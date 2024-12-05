import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import Contador from '../ContadorComp.vue'

describe('Contador', () => {
    it('verifica valor inicial', () => {
        const store = createStore({
            state: { contador: 0 },

        })

        const wrapper = mount(Contador, {
            global: {
                plugins: [store]
            }
        });
        const contador = wrapper.find('.counter')
        expect(contador.text()).toBe('0')
    }),

        it('incrementar el contador al hacer click', async () => {
            const store = createStore({
                state: { contador: 0 },
                mutations: {
                    incrementar(state) {
                        state.contador++
                    }
                },
                actions: {
                    incrementar({ commit }) {
                        commit('incrementar');
                    },
                },
            })

            const wrapper = mount(Contador, {
                global: {
                    plugins: [store]
                }
            });
            const incrementar = wrapper.find('.incrementar')
            await incrementar.trigger('click')
            expect(store.state.contador).toBe(1)

        }),
        it('decrementa el contador al hacer click', async () => {
            const store = createStore({
                state: { contador: 1 },
                mutations: {
                    decrementar(state) {
                        state.contador--
                    }
                },
                actions: {
                    decrementar({ commit }) {
                        commit('decrementar');
                    },
                },
            })

            const wrapper = mount(Contador, {
                global: {
                    plugins: [store]
                }
            });
            const decrementar = wrapper.find('.decrementar')
            await decrementar.trigger('click')
            expect(store.state.contador).toBe(0)
        })
})


