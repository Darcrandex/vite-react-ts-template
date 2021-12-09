import { Authorization } from '../enums'
import { createStore } from '../utils/create-mobx-store'

export const user = createStore({
  info: {
    id: '',
    name: '',
    roles: [],
  },

  login() {
    this.info.id = 'user-id'
    this.info.name = 'Tony'
    this.info.roles = [Authorization.Admin] as never[]
  },

  logout() {
    this.info.id = ''
    this.info.name = ''
    this.info.roles = []
  },

  checkRoles(roles?: Authorization[]) {
    if (!roles) return false
    return this.info.roles?.some((r) => roles.includes(r))
  },
})
