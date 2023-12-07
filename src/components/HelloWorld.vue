<script setup lang="ts">
import { computed, onMounted, onUnmounted, onUpdated, reactive, ref, toRefs } from 'vue'
import axios from 'axios'

defineProps<{
  props?: any;
}>()

//INITIAL STATES: <Can re-assign>
const init: any = reactive({
  //[STATES]
  player: ref([]),
  search: ref(''),

  //[FUNC]
  listSearch: computed(() => {
    return init?.player?.filter((item: any) => item.title.includes(init?.search))
  })
});

//STRANFERING STATE: <Readonly>
const data = {
  ...toRefs(init)
}

//SPREAD STATE -> DATA: <Readonly>
const { search, listSearch } = data

const getPost = async () => {
  try {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        init.player = res.data

      })
      .catch(err => console.log('err', err))
  } catch (err) {
    console.log(err)
  }
}


onMounted(() => {
  getPost()
})

onUnmounted(() => {
  console.log('un mounted')
})

onUpdated(() => {
  console.log('updated')
})

</script>

<template>
  <div>
    <h1>Search app</h1>
    <input type="text" v-model="search" />
    <div>Search term - {{ search }}</div>
    <div v-for="name in listSearch" :key="name">{{ name?.title }}</div>
  </div>
</template>

<style scoped></style>
