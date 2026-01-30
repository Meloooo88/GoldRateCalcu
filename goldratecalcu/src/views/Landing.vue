<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo(path) {
  router.push(path)
}
</script>

<template>
  <div class="container">
    <h1>Select Gold Grade</h1>

    <button @click="goTo('/24k')">24K</button>
    <button @click="goTo('/22k')">22K</button>
    <button @click="goTo('/21k')">21K</button>
    <button @click="goTo('/18k')">18K</button>
    <button @click="goTo('/14k')">14K</button>
    <button @click="goTo('/10k')">10K</button>
    <button @click="goTo('/8k')">8K</button>
    <button @click="goTo('/6k')">6K</button>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 40px;
}

button {
  margin: 5px;
  padding: 10px 15px;
  font-weight: bold;
}
</style>
