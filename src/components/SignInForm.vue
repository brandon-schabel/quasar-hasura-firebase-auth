<template>
  <div>
    <div>
      <div>
        <div>
          <h2>Sign in to Your Account</h2>
        </div>
        <div>
          <form v-on:submit.prevent>
            <div>
              <label>Email</label>
              <div>
                <input type="email" placeholder="joe@bloggs.com" v-model="email">
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <input type="password" v-model="password">
              </div>
            </div>
            <button type="submit" v-on:click="signIn">Sign-in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '../firebase'

export default {
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function() {
      auth.signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.$router.replace('dashboard')
        },
        error => {
          alert(error.message)
        }
      )
    }
  }
}
</script>