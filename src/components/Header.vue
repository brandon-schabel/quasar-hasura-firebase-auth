<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link
        to="dashboard"
        v-if="user"
      >Dashboard</router-link>
      <router-link
        to="sign-in"
        v-if="!user"
      >Sign-in</router-link>
      <router-link
        to="sign-up"
        v-if="!user"
      >Sign-up</router-link>
      <router-link
        to="create-name"
        v-if="user"
      >Create Name</router-link>
      <a
        v-on:click="signOut"
        v-if="user"
      >Sign-out</a>
    </nav>
  </header>
</template>

<script>
import { auth } from '../firebase'

export default {
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  },
  methods: {
    signOut: function() {
      auth.signOut().then(() => {
        this.$router.push('sign-in')
      })
    }
  }
}
</script>
