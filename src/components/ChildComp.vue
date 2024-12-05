<script>
export default {
    name: 'ChildComp',
    emits: ['mandaMensaje'],
    data() {
        return {
            texto: ''
        }
    },
    methods: {
        mandaMensaje() {
            this.$emit('mandaMensaje', this.texto)
            this.limpia()
        },
        limpia() {
            this.texto = ''
        }
    }
}
</script>

<template>
    <div class="contenedor-child">
        <h4>Child</h4>
        <div class="form">
            <input class="item" type="text" v-model="texto" placeholder="Escribe un mensaje">
            <button class=" btn btn-primary item" @click="mandaMensaje">Enviar Mensaje</button>
        </div>
    </div>
</template>

<style scoped>
.contenedor-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100px;
    margin-top: 20px;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



    border: 1px solid white;
    width: 50%;
    height: 100px;
    text-align: center;
}

.item {
    margin: 5px;
}
</style>
