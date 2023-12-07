<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '../store/task-store'
import CustomInput from './CustomInput.vue';

//[STATE]
const task = ref(""); //Task input
const crrTask = ref(); //Current task edit
const typeEdit = ref(false) //true: edit, false: read only
const inputRef = ref();

//[INITIALIZE]
const { getTasks, addTask, removeTask, editTask } = useTaskStore()

const handleAddTask = () => {
    addTask(task.value)
    task.value = ''
    inputRef?.value?.focus()
}

const handleEdit = (id: number, name: string) => {
    crrTask.value = id

    if (typeEdit.value) {
        editTask(id, name)
    }

    typeEdit.value = !typeEdit.value
}

const handleChangeValue = (newValue: string) => {
   return task.value = newValue
}


</script>

<template>
    <div class="container">
        <h1 class="title">To do list</h1>
        <div class="body">
            <form @submit.prevent="handleAddTask">
                <span class="label">Enter task:</span>
                <p>Task name: {{ task }}</p>
                <!-- <input ref="inputRef" class="input" type="text" v-model="task" /> -->
                <CustomInput :task="task" @handleChangeValue="handleChangeValue" />

                <button class="add-btn" type="submit">Add</button>
            </form>
            <div class="task-list" v-for="task in getTasks" :key="task">
                <div class="task-item">
                    <input class="task-input task-input-read" v-model="task.name" :readonly="!typeEdit" />
                    <div>
                        <button class="btn" @click="removeTask(task.id)">Remove</button>
                        <button class="btn" @click="handleEdit(task.id, task.name)">{{ task?.id === crrTask && typeEdit ?
                            'Save' :
                            'Edit' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.container {
    padding: 50px;
}

.title {
    font-size: 30px;
    margin-bottom: 10px;
}

.label {
    font-size: 20px;
    margin-right: 34px;
}

.add-btn {
    margin-left: 10px;
    cursor: pointer;
}

.task-list {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.task-item {
    display: flex;
    width: 400px;
    margin-bottom: 5px;
}

.task-input {
    width: 150px;
    margin-right: 10px;
}

.task-input-read {}

.text {
    font-size: 20px;
    margin-right: 10px;
    flex: 1;
}

.btn {
    margin-right: 10px;
}
</style>