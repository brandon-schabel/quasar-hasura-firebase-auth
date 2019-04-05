import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'
import user from './user-module'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      example,
      user
    }
  })

  return Store
}
