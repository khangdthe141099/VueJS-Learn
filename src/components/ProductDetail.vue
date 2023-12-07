<template lang="">
    <div>
        Product Detail
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id

console.log('id', id)
</script>
<style lang="">
    
</style>