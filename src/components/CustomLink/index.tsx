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
      className={({ isActive }) =>
        [
          'mx-2 p-2 inline-block text-violet-200 text-sm hover:text-violet-400',
          isActive ? 'text-violet-600' : 'text-violet-300',
        ].join(' ')
      }
    />
  )
}

export default CustomLink
