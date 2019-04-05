<template>
  <div>
    <button @click="googleSignIn">Google Sign In</button>
  </div>
</template>

<script>
import { auth, googleSignInProvider } from '../firebase'

export default {
  methods: {
    googleSignIn: function() {
      auth.signInWithPopup(googleSignInProvider).then(user => {
        this.$router.replace('dashboard')
      }),
        error => {
          alert(error.message)
        }
    }
  }
}
</script>