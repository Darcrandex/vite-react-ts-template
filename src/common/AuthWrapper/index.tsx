/**
 * @name AuthWrapper
 * @description
 * @author darcrand
 */

import React from 'react'
import { Authorization } from '@/enums'
import { useUserInfo } from '@/stores/user'

const AuthWrapper: React.FC<{ roles?: Authorization[] }> = ({ children, roles }) => {
  const { login, checkRoles } = useUserInfo()

  if (!checkRoles(roles)) {
    return (
      <div className='m-4 text-center'>
        <p className='mb-4 text-2xl text-gray-600'>You are not logged in.</p>
        <button className='ml-auto px-4 py-2 rounded bg-violet-600 text-white' onClick={login}>
          Sign In Now
        </button>
      </div>
    )
  }

  return <>{children}</>
}

export default AuthWrapper
