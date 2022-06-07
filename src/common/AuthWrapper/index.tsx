/**
 * @name AuthWrapper
 * @description
 * @author darcrand
 */

import React, { PropsWithChildren } from 'react'
import { Authorization } from '@/enums'
import { useUser } from '@/stores/user'

const AuthWrapper: React.FC<PropsWithChildren<{ roles?: Authorization[] }>> = ({ children, roles }) => {
  const { login, checkRoles } = useUser()

  if (!checkRoles(roles)) {
    return (
      <div className='m-4 text-center'>
        <p className='mb-4 text-2xl text-gray-600'>You have not logged in yet.</p>
        <button className='ml-auto px-4 py-2 rounded bg-violet-600 text-white' onClick={login}>
          Login Now
        </button>
      </div>
    )
  }

  return <>{children}</>
}

export default AuthWrapper
