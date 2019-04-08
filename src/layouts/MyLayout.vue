<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Auth</q-list-header>
        <router-link to="/">
          <q-item>
            <q-item-side icon="house" />
            <q-item-main
              label="Home"
              sublabel="go to app home"
            />
          </q-item>
        </router-link>
        <router-link to="/sign-in" v-if="!user">
          <q-item>
            <q-item-side icon="key" />
            <q-item-main
              label="Sign In"
              sublabel="Sign In"
            />
          </q-item>
        </router-link>
        <router-link to="/sign-up" v-if="!user">
          <q-item>
            <q-item-side icon="key" />
            <q-item-main
              label="Sign Up"
              sublabel="Sign Up"
            />
          </q-item>
        </router-link>
        <q-item>
          <SignOutButton v-if="user"></SignOutButton>
          <!-- <q-item-side icon="key" />
          <q-item-main
            label="Sign Out"
            sublabel="Sign Out"
          /> -->
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
// import { auth } from '../firebase'
import SignOutButton from 'components/SignOutButton'

export default {
  name: 'MyLayout',
  components: { SignOutButton },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  computed: {
    user() {
      return this.$store.getters['userState/getUser'].user
    }
  },
  methods: {
    openURL
  }
}
</script>
