import React from 'react';
import PropTypes from 'prop-types';

import omit from 'lodash/omit';
import has from 'lodash/has';
import some from 'lodash/some';
import includes from 'lodash/includes';
import forEach from 'lodash/forEach';

export const directions = ['row', 'rowReverse', 'column', 'columnReverse'];

const getBooleanDirectionPropTypes = () => {
  const booleanProps = {};

  forEach(directions, direction => {
    booleanProps[direction] = PropTypes.bool;
  });

  return booleanProps;
};

export const DirectionPropTypes = {
  direction: (props, propName, componentName) => {
    // eslint-disable-line consistent-return
    if (props.direction && !includes(directions, props.direction)) {
      return new Error(
        `Invalid prop size='${props.direction}' supplied to ${componentName}`,
      );
    }

    if (
      props.direction &&
      some(directions, direction => has(props, direction))
    ) {
      return new Error(
        `Seems that you've accidentially supplied boolean size along with size='${
          props.direction
        }' to ${componentName}, please remove one of them. Otherwise boolean prop will overwrite the 'size' prop.`,
      );
    }
  },
  ...getBooleanDirectionPropTypes(),
};

const parseBooleanDirection = props => {
  const directionProps = {};

  forEach(directions, direction => {
    if (props[direction]) {
      directionProps.direction = direction;
    }
  });

  return directionProps;
};

const withDirectionProps = OriginalComponent => {
  const DecoratedComponent = props => {
    const directionProp = parseBooleanDirection(props);

    const newProps = {
      ...omit(props, directions),
      ...directionProp,
    };

    return <OriginalComponent {...newProps} />;
  };

  DecoratedComponent.propTypes = DirectionPropTypes;

  DecoratedComponent.displayName = OriginalComponent.displayName;

  return DecoratedComponent;
};

export default withDirectionProps;
