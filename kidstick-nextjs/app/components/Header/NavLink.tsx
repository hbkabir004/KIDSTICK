import * as React from 'react';
import { NavLinkProps } from './types';

export const NavLink: React.FC<NavLinkProps> = ({ text, isActive, suffix }) => (
  <div className={`whitespace-nowrap ${isActive ? 'text-red-500' : ''}`}>
    {text} {suffix}
  </div>
);