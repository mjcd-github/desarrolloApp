<script>
import { mapActions, mapState } from 'vuex'
export default {

    computed: {
        ...mapState(['contador'])
    },
    methods: {
        ...mapActions(['incrementar', 'decrementar']),


    }
}
</script>

<template>

    <div class="contenedor-contador">

        <p class="counter">{{ contador }}</p>
        <div class="botones">
            <button class="btn btn-success incrementar" @click="incrementar">Incrementar</button>
            <button class="btn btn-danger decrementar" @click="decrementar">Decrementar</button>
        </div>
    </div>
</template>

<style scoped>
.contenedor-contador {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.botones {
    margin: 20px;
}

button {
    margin: 10px;
}

.counter {
    font-size: 100px;
}
</style>