import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavItem = ({value}) => {

    const valueMayuscula = value.toUpperCase();
    
    
  return (
    <NavLink 
        className= { ({ isActive }) => 'nav-item nav-link ' + ( isActive?  'active' : '')}
        to={`/${value}`}
    >
        {valueMayuscula}
    </NavLink>
  )
};
