/**
 * @name AuthWrapper
 * @description
 * @author darcrand
 */

import React from 'react'
import { observer } from 'mobx-react-lite'
import { Authorization } from '../../enums'
import { user } from '../../stores/user'

const AuthWrapper: React.FC<{ roles?: Authorization[] }> = ({ children, roles }) => {
  if (!user.checkRoles(roles)) {
    return (
      <div className='m-4'>
        <p>You are not logged in.</p>
        <button
          className='inline-block px-4 py-2 mt-2 bg-green-500 rounded-md text-white hover:bg-green-400 transition-all'
          onClick={user.login}
        >
          login
        </button>
      </div>
    )
  }

  return <>{children}</>
}

export default observer(AuthWrapper)
