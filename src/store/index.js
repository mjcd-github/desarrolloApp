import { createStore } from 'vuex'

const store = createStore({
    state: {
        contador: 0

    },
    mutations: {
        incrementar(state) {
            state.contador++
        },
        decrementar(state) {
            state.contador--
        }


    },
    actions: {
        incrementar({ commit }) {
            commit('incrementar')
        },
        decrementar({ commit }) {
            commit('decrementar')
        }


    }

})

export default store