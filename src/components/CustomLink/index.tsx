/**
 * @name CustomLink
 * @description
 * @author darcrand
 */

import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

const CustomLink: React.FC<NavLinkProps> = (props) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => ['m-4 inline-block', isActive && 'text-green-500'].join(' ')}
    ></NavLink>
  )
}

export default CustomLink
