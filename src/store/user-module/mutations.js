import { auth } from '../../firebase'

export const setUser = (state, payload) => {
  state.user = auth.currentUser
  state.token = payload.token
  state.status = payload.status
}
