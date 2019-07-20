import React from 'react';
import PropTypes from 'prop-types';

import omit from 'lodash/omit';
import has from 'lodash/has';
import some from 'lodash/some';
import includes from 'lodash/includes';
import forEach from 'lodash/forEach';

export const justifys = [
  'justifyCenter',
  'justifyStart',
  'justifyEnd',
  'justifyBetween',
  'justifyAround',
  'justifyEvenly',
];

const getBooleanJustifyPropTypes = () => {
  const booleanProps = {};

  forEach(justifys, justify => {
    booleanProps[justify] = PropTypes.bool;
  });

  return booleanProps;
};

export const JustifyPropTypes = {
  justify: (props, propName, componentName) => {
    // eslint-disable-line consistent-return
    if (props.justify && !includes(justifys, props.justify)) {
      return new Error(
        `Invalid prop size='${props.justify}' supplied to ${componentName}`,
      );
    }

    if (props.justify && some(justifys, justify => has(props, justify))) {
      return new Error(
        `Seems that you've accidentially supplied boolean size along with size='${
          props.justify
        }' to ${componentName}, please remove one of them. Otherwise boolean prop will overwrite the 'size' prop.`,
      );
    }
  },
  ...getBooleanJustifyPropTypes(),
};

const parseBooleanJustify = props => {
  const justifyProps = {};

  forEach(justifys, justify => {
    if (props[justify]) {
      justifyProps.justify = justify;
    }
  });

  return justifyProps;
};

const withJustifyProps = OriginalComponent => {
  const DecoratedComponent = props => {
    const justifyProp = parseBooleanJustify(props);

    const newProps = {
      ...omit(props, justifys),
      ...justifyProp,
    };

    return <OriginalComponent {...newProps} />;
  };

  DecoratedComponent.propTypes = JustifyPropTypes;

  DecoratedComponent.displayName = OriginalComponent.displayName;

  return DecoratedComponent;
};

export default withJustifyProps;
