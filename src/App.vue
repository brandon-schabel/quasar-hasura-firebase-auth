<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { auth, db } from './firebase'
// import { mapMutations } from 'vuex'

export default {
  name: 'App',
  methods: {
    setUser: function(state, token, status) {
      this.$store.dispatch('userState/setUser', { state, token, status })
    }
  },
  created() {
    auth.onAuthStateChanged(async user => {
      if (user) {
        const token = await user.getIdToken()
        const idTokenResult = await user.getIdTokenResult()
        const hasuraClaim = idTokenResult.claims['https://hasura.io/jwt/claims']

        if (hasuraClaim) {
          this.setUser(this.$store.state, token, 'in')
        } else {
          const metadataRef = db.collection('metadata').doc(user.uid)

          metadataRef
            .get()
            .then(async doc => {
              if (doc.exists && doc.data().refreshTime) {
                const token = await user.getIdToken(true)
                this.setUser(this.$store.state, token, 'in')
              } else {
                console.log('Refresh time doesnt exist')
                this.setUser(this.$store.state, null, 'out')
              }
            })
            .catch(error => {
              console.log('Error getting refresh time ', error)
            })
        }
      }
    })
  },
  computed: {
    user() {
      return this.$store.getters['userState/getUser']
    }
  }
}
</script>
