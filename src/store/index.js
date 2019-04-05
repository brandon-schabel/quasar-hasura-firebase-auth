import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'
import userState from './user-module'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */
console.log(userState)

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      example,
      userState
    }
  })

  return Store
}
