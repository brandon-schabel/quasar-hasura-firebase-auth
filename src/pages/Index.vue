<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <CreatePost></CreatePost>
  </q-page>
</template>

<style>
</style>

<script>
import CreatePost from 'components/CreatePost'
export default {
  components: {
    CreatePost
  },
  name: 'PageIndex'
}
</script>
