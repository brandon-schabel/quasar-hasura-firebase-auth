export const getUser = state => {
  console.log('userState', state)
  return {
    user: state.user,
    token: state.token,
    status: state.status
  }
}
