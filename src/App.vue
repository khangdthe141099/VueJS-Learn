<script setup lang="ts">
import { ref } from 'vue';

const crrNav = ref<string>('home');
</script>

<template>
  <nav class="header">
    <RouterLink class="nav-link" to="/">
      <button @click="crrNav = 'home'" :class="[{ 'nav-btn--active': crrNav === 'home' }, 'nav-btn']">Home</button>
    </RouterLink>
    <RouterLink class="nav-link" to="/list">
      <button @click="crrNav = 'list'" :class="[{ 'nav-btn--active': crrNav === 'list' }, 'nav-btn']">Product
        List</button>
    </RouterLink>
    <RouterLink class="nav-link" :to="{ name: 'list', params: { id: ':id' } }">
      <button @click="crrNav = 'detail'" :class="[{ 'nav-btn--active': crrNav === 'detail' }, 'nav-btn']">Product
        Detail</button>
    </RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
}

.nav-btn {
  margin: 10px 50px;
  width: 200px;
  height: 30px;
  background-color: brown;
  border: none;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.nav-btn--active {
  background-color: red;
}
</style>
