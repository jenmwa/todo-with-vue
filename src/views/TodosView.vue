<script setup lang="ts">
import { Todo } from '../models/Todo';
import { ref } from 'vue';

const todos = ref<Todo[]>([]);

</script>

<template>
  todos View
  <div>
    <ul>
      <li v-for="todo in todos" :class="todo.done ? 'done' : '' " :key='todo.id'>
        {{  todo.text }}
      </li>
       
    </ul>
    
  </div>
</template>

<style scoped lang="scss">

.done {
  text-decoration: line-through;
}
</style>