<script>
import Parent from '../components/ParentComp.vue'
import Child from '../components/ChildComp.vue'
export default {
    components: {
        Parent,
        Child
    },
    data() {
        return {
            mensaje: ''
        }
    },
    methods: {
        actualizaMensaje(mensaje) {
            this.mensaje = mensaje
        }
    }

}
</script>

<template>
    <div>
        <h1>Comunicación entre Componentes</h1>
        <Parent :msg="mensaje" />
        <Child @mandaMensaje="actualizaMensaje" />
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
}
</style>