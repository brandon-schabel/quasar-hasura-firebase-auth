import { auth } from 'firebase/index.js'

export const setUser = state => {
  state.user = auth.currentUser
}
