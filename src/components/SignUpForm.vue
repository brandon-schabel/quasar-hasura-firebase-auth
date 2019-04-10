<template>
  <div>
    <div>
      <div>
        <div>
          <h2>Create an Account</h2>
        </div>
        <div>
          <form v-on:submit.prevent>
            <div>
              <label>Email</label>
              <div>
                <input v-model="email">
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <input v-model="password">
              </div>
            </div>
            <q-btn @click="signUp">Sign-up</q-btn>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '../firebase'
import { CREATE_USER } from '../graphql/mutations/user'

export default {
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      auth.createUserWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.createUserInDb(user)
          this.$router.replace('dashboard')
        },
        error => {
          alert(error.message)
        }
      )
    },
    createUserInDb: function(user) {
      const { uid, displayName, email, phoneNumber } = user
      this.$apollo.mutate({
        mutation: CREATE_USER,
        variables: {
          userInput: {
            userId: uid,
            displayName,
            email,
            phoneNumber
          }
        }
      })
    }
  }
}
</script>
