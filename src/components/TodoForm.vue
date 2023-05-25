<script setup lang="ts">
import { ref } from 'vue';
// import TodosView from '../views/TodosView.vue';
import { Todo } from '../models/Todo';

const todos = ref<Todo[]>([]);

const userInput = ref('');
// const userDeadline = ref('');
console.log(userInput)

const handleTodotext = (e: Event) => {
  const theAddedTodo= e.target as HTMLInputElement;
  userInput.value = theAddedTodo.value;
} 

const handleAddtodo = () => {
  console.log('click addtodo');
    todos.value = [
    ...todos.value,
    // new Todo( new Date().getTime(), userInput.value, userDeadline.value, false)
    new Todo( new Date().getTime(), userInput.value, false)
  ]
}

const toggleTodoDone = (id: number) => {
  todos.value = todos.value.map((todo) => {
    if(todo.id === id) {
      return { ...todo, done: !todo.done}
    } else {
      return todo;
    }
  })
}


</script>

<template>
  <section>
<form @submit.prevent="handleAddtodo">
  <label for="todoInput">
    <input type="text" placeholder="What to do?" id="todoInput" :value="userInput" @input="handleTodotext"/>
  </label>
  <label for="todoInput">
    dateinput
    <!-- <input type="date" placeholder="Deadline?" id="deadlineDate" :model="userDeadline"/> -->
  </label>
  <p>Choose a category:</p>
  <button>SAVE todo</button>
</form>
</section>

todos View
  <div>
    <ul>
      <li @click="() => toggleTodoDone(todo.id)" v-for="todo in todos" :class="todo.done ? 'done' : '' " :key='todo.id'>
        {{  todo.text }}
      </li>
       
    </ul>
    
  </div>
</template>

<style scoped>

section {
  display: flex;
  flex-direction: column;

}

label {
  display: block;
}

li {
  cursor: pointer;
}
.done {
  text-decoration: line-through;
}

</style>