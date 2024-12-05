<script>
export default {
    props: {
        msg: {
            type: String,
            required: true,
        },
    },
}
</script>
<template>
    <div class="contenedor-parent">
        <h4>Parent</h4>
        <div class="mensajes">
            <p>{{ msg }}</p>
        </div>
    </div>
</template>

<style scoped>
.contenedor-parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100px;
}

.mensajes {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50px;
    border: 1px solid white;


}
</style>
