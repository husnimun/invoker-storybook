import React from 'react';
import PropTypes from 'prop-types';

import omit from 'lodash/omit';
import has from 'lodash/has';
import some from 'lodash/some';
import includes from 'lodash/includes';
import forEach from 'lodash/forEach';

export const spaces = ['compact', 'default', 'cozy', 'comfortable', 'extreme'];

const getBooleanSpacePropTypes = () => {
  const booleanProps = {};

  forEach(spaces, space => {
    booleanProps[space] = PropTypes.bool;
  });

  return booleanProps;
};

export const SpacePropTypes = {
  space: (props, propName, componentName) => {
    if (props.space && !includes(spaces, props.space)) {
      return new Error(
        `Invalid prop space='${props.space}' supplied to ${componentName}`,
      );
    }

    if (props.space && some(spaces, space => has(props, space))) {
      return new Error(
        `Seems that you've accidentially supplied boolean space along with space='${
          props.space
        }' to ${componentName}, please remove one of them. Otherwise boolean prop will overwrite the 'space' prop.`,
      );
    }
  },
  ...getBooleanSpacePropTypes(),
};

const parseBooleanSpace = props => {
  const spaceProps = {};

  forEach(spaces, space => {
    if (props[space]) {
      spaceProps.space = space;
    }
  });

  return spaceProps;
};

const withSpacesProps = OriginalComponent => {
  const DecoratedComponent = props => {
    const spaceProp = parseBooleanSpace(props);

    const newProps = {
      ...omit(props, spaces),
      ...spaceProp,
    };

    return <OriginalComponent {...newProps} />;
  };

  DecoratedComponent.propTypes = SpacePropTypes;

  DecoratedComponent.displayName = OriginalComponent.displayName;

  return DecoratedComponent;
};

export default withSpacesProps;
