import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';


describe("Verifica las vistas del proyecto", () => {
    it("Verifica si la vista HomeView existe en el proyecto", async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [
                { path: '/', name: 'home', component: HomeView },

            ],
        });
        router.push('/');
        await router.isReady();
        const wrapper = mount(HomeView, {
            global: {
                plugins: [router],
            },
        });
        expect(wrapper.findComponent(HomeView).exists()).toBe(true);

    }),
        it("Verifica si la vista AboutView existe en el proyecto", async () => {
            const router = createRouter({
                history: createWebHistory(),
                routes: [
                    { path: '/about', name: 'about', component: AboutView },

                ],
            });
            router.push('/AboutView');
            await router.isReady();
            const wrapper = mount(AboutView, {
                global: {
                    plugins: [router],
                },
            });
            expect(wrapper.findComponent(AboutView).exists()).toBe(true);
        })

})