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
        <router-link to="/sign-in">
          <q-item>
            <q-item-side icon="key" />
            <q-item-main
              label="Sign In"
              sublabel="Sign In"
            />
          </q-item>
        </router-link>
        <q-item
          v-if="user"
          @click="signOut"
        >
          <q-item-side icon="key" />
          <q-item-main
            label="Sign Out"
            sublabel="Sign Out"
          />
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
import { auth } from '../firebase'

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  },
  methods: {
    openURL,
    signOut: function() {
      auth.signOut().then(() => {
        this.$router.push('sign-in')
      })
    }
  }
}
</script>
