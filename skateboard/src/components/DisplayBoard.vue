<template>
    <div class="display-board">
        <h4>Skateboards Created</h4>
        <div class="number">
        {{numberOfSkateboards}}
        </div>
        <div class="btn">
            <button @click='getAllSkateboards()' type="button" class="btn btn-warning">Get all Skateboards (Console)</button>
        </div>
        <div class="btn">
            <a href="/api/skateboards"><button type="button" class="btn btn-warning">Api (JSON)</button></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: ['numberOfSkateboards'],
        methods: {
            getAllSkateboards() {
                this.$emit('getAllSkateboards')
            }
        }
    }
</script>