<script>
import Contador from '../components/ContadorComp.vue'
export default {
    components: {
        Contador
    }
}
</script>

<template>
    <div>
        <h1>Contador</h1>
        <Contador />
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