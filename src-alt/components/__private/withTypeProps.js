import React from 'react';
import PropTypes from 'prop-types';

import omit from 'lodash/omit';
import has from 'lodash/has';
import some from 'lodash/some';
import includes from 'lodash/includes';
import forEach from 'lodash/forEach';

export const types = [
  'normal',
  'ghost',
  'text',
  'primary',
  'primaryGhost',
  'primaryText',
  'secondary',
  'secondaryGhost',
  'secondaryText',
  'light',
  'lightGhost',
  'lightText',
  'success',
  'successGhost',
  'danger',
  'dangerGhost',
  'dangerText',
  'warning',
  'warningGhost',
  'warningText',
];

const getBooleanTypePropTypes = () => {
  const booleanProps = {};

  forEach(types, type => {
    booleanProps[type] = PropTypes.bool;
  });

  return booleanProps;
};

export const TypePropTypes = {
  type: (props, propName, componentName) => {

    // eslint-disable-line consistent-return
    if (props.type && !includes(types, props.type)) {
      return new Error(
        `Invalid prop type='${props.type}' supplied to ${componentName}`,
      );
    }

    if (props.type && some(types, type => has(props, type))) {
      return new Error(
        `Seems that you've accidentially supplied boolean type along with type='${
          props.type
        }' to ${componentName}, please remove one of them. Otherwise boolean prop will overwrite the 'type' prop.`,
      );
    }
  },
  ...getBooleanTypePropTypes(),
};

const parseBooleanType = props => {
  const typeProps = {};

  forEach(types, type => {
    if (props[type]) {
      typeProps.type = type;
    }
  });

  return typeProps;
};

const withVariationsProps = OriginalComponent => {
  const DecoratedComponent = props => {
    const typeProp = parseBooleanType(props);

    const newProps = {
      ...omit(props, types),
      ...typeProp,
    };

    return <OriginalComponent {...newProps} />;
  };

  DecoratedComponent.propTypes = TypePropTypes;

  DecoratedComponent.displayName = OriginalComponent.displayName;

  return DecoratedComponent;
};

export default withVariationsProps;
