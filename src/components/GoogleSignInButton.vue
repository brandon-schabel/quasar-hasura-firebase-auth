<template>
  <div>
    <button @click="googleSignIn">Google Sign In</button>
  </div>
</template>

<script>
import { auth, googleSignInProvider } from '../firebase'

export default {
  name: 'GoogleSignInButton',
  methods: {
    googleSignIn: function() {
      return auth
        .signInWithPopup(googleSignInProvider)
        .then(user => {
          this.$router.replace('dashboard')
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>
