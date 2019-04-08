<template>
  <div>
    Title
    <input v-model="postTitle" />
    <input v-model="postBody" />
    <button @click="addPost">Submit</button>
  </div>
</template>

<script>
import { CREATE_POST } from '../graphql/mutations/posts'
// import { auth } from '../firebase'

export default {
  name: 'CreatePost',
  data() {
    return {
      postTitle: '',
      postBody: ''
    }
  },
  methods: {
    addPost() {
      this.$apollo.mutate({
        mutation: CREATE_POST,
        variables: {
          postTitle: this.postTitle,
          postBody: this.postBody,
          userId: '1'
        }
      })
    }
  }
}
</script>

<style>
</style>
