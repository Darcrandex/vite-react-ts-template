import { atom, useRecoilState, useResetRecoilState } from 'recoil'
import { v4 as uuid } from 'uuid'
import { Authorization } from '@/enums'

const userState = atom({
  key: 'user',
  default: { id: '', name: '', avatar: '', roles: [] },
})

export function useUserInfo() {
  const [info, setInfo] = useRecoilState(userState)
  const logout = useResetRecoilState(userState)
  const login = () => {
    setInfo({
      id: uuid(),
      name: 'darcrand',
      avatar: 'https://avatars.githubusercontent.com/u/26473667?v=4',
      roles: [Authorization.User] as never[],
    })
  }

  const checkRoles = (arr: Authorization[] | undefined) => {
    if (!Array.isArray(arr)) return false
    return info.roles.some((str) => arr.includes(str))
  }

  return { info, login, logout, checkRoles }
}
