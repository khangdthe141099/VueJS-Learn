<script setup lang="ts">
defineProps(['task'])
defineEmits(['handleChangeValue'])
</script>

<template>
    <input 
    :value="task" 
    @input="$emit('handleChangeValue', $event?.target?.value)" 
    />
</template>