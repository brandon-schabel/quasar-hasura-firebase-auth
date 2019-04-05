<template>
  <q-btn @click="signOut">Sign Out</q-btn>
</template>

<script>
import { auth } from '../firebase'

export default {
  name: 'SignOutButton',
  methods: {
    setUser: function(state, token, status) {
      this.$store.dispatch('userState/setUser', { state, token, status })
    },
    signOut: async function() {
      try {
        this.setUser(this.$store.state, null, 'loading')
        await auth.signOut().then(() => {
          this.setUser(this.$store.state, null, 'out')
          this.$router.push('sign-in')
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
