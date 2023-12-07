<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import Post from './Post.vue'

const posts = ref([
    {
        id: 1,
        name: 'post1'
    },
    {
        id: 2,
        name: 'post2'
    },
    {
        id: 3,
        name: 'post3'
    },
    {
        id: 4,
        name: 'post4'
    },
])

const crrPost = ref('post1')

const selectPost = (post) => {
    console.log('runn');
    crrPost.value = post
}

</script>

<template>
    <h1>Product List</h1>
    <Post v-for="post in posts" :key="post.id" :post="post" @selectPost="selectPost" />
    <div>Current post: {{ crrPost }}</div>
</template>