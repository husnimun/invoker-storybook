import React from 'react';
import PropTypes from 'prop-types';

import omit from 'lodash/omit';
import has from 'lodash/has';
import some from 'lodash/some';
import includes from 'lodash/includes';
import forEach from 'lodash/forEach';

export const alignes = [
  'alignCenter',
  'alignStart',
  'alignEnd',
  'alignStretch',
  'alignBaseline',
];

const getBooleanAlignPropTypes = () => {
  const booleanProps = {};

  forEach(alignes, align => {
    booleanProps[align] = PropTypes.bool;
  });

  return booleanProps;
};

export const AlignPropTypes = {
  align: (props, propName, componentName) => {
    // eslint-disable-line consistent-return
    if (props.align && !includes(alignes, props.align)) {
      return new Error(
        `Invalid prop size='${props.align}' supplied to ${componentName}`,
      );
    }

    if (props.align && some(alignes, align => has(props, align))) {
      return new Error(
        `Seems that you've accidentially supplied boolean size along with size='${
          props.align
        }' to ${componentName}, please remove one of them. Otherwise boolean prop will overwrite the 'size' prop.`,
      );
    }
  },
  ...getBooleanAlignPropTypes(),
};

const parseBooleanAlign = props => {
  const alignProps = {};

  forEach(alignes, align => {
    if (props[align]) {
      alignProps.align = align;
    }
  });

  return alignProps;
};

const withAlignProps = OriginalComponent => {
  const DecoratedComponent = props => {
    const alignProp = parseBooleanAlign(props);

    const newProps = {
      ...omit(props, alignes),
      ...alignProp,
    };

    return <OriginalComponent {...newProps} />;
  };

  DecoratedComponent.propTypes = AlignPropTypes;

  DecoratedComponent.displayName = OriginalComponent.displayName;

  return DecoratedComponent;
};

export default withAlignProps;
