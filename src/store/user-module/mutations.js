import { auth } from '../../firebase'

export const setUser = state => {
  state.user = auth.currentUser
}
