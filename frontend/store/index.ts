import Vue from "vue";
import Vuex from "vuex";

import Tutorial from "./modules/auth.module";

Vue.use(Vuex)

export default new Vuex.Store{
    modules: {
        Auth
    }
}