import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

const NavLink = ({
  children,
  to,
  ...restProps
  }) => {
  return (
    <RouterNavLink to={to} {...restProps}>
      {children}
    </RouterNavLink>
  )
}

export default NavLink