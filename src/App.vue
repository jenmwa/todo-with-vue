<script setup lang="ts">
import { RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <h1>this is going to be my todo app</h1>
  <RouterLink to="/">Home</RouterLink> | 
  <RouterLink to="/todos">Todos</RouterLink> | 
  <RouterLink to="/categories">Categories</RouterLink> | 
  <RouterLink to="/about">About</RouterLink><br>

  <router-view></router-view>

  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
