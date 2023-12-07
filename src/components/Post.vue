<script setup lang="ts">
defineProps(['post'])
defineEmits(['selectPost'])
</script>

<template>
    <div @click="$emit('selectPost', post.name)">
    {{ post.id }} - {{ post.name }}
    </div>
</template>