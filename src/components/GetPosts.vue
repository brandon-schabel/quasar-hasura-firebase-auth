<template>
  <div>
    {{posts}}
    your posts:
    {{userId}}
    <div v-if="user">
      {{getCurrUserPosts}}
    </div>
  </div>
</template>

<script>
import { ALL_POSTS, ALL_POSTS_CURR_USER } from '../graphql/queries/posts'

export default {
  name: 'GetPosts',
  data() {
    return {
      posts: [],
      currUserPosts: [],
      userId: ''
    }
  },
  methods: {
    async getCurrUserPosts() {
      const response = await this.$apollo.query({
        query: ALL_POSTS_CURR_USER,
        variables: this.user.uid
      })

      return response
    }
  },
  computed: {
    user() {
      return this.$store.getters['userState/getUser'].user
    }
  },
  apollo: {
    posts: {
      query: ALL_POSTS
    }
  }
}
</script>

<style>
</style>
