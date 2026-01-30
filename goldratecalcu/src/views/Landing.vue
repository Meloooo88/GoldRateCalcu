<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo(path) {
  router.push(path)
}

// Current gold rates per karat
const goldGrades = [
  { karat: '24K', rate: 9776.92, path: '/24k' },
  { karat: '22K', rate: 8962.17, path: '/22k' },
  { karat: '21K', rate: 8543.50, path: '/21k' },
  { karat: '18K', rate: 7332.69, path: '/18k' },
  { karat: '14K', rate: 5703.20, path: '/14k' },
  { karat: '10K', rate: 4073.72, path: '/10k' },
  { karat: '8K', rate: 3291.68, path: '/8k' },
  { karat: '6K', rate: 2471.23, path: '/6k' }
]
</script>

<template>
  <div class="container">
    <h1>Select Gold Grade</h1>
    <div class="cards">
      <div 
        v-for="grade in goldGrades" 
        :key="grade.karat" 
        class="card" 
        @click="goTo(grade.path)"
      >
        <h2>{{ grade.karat }}</h2>
        <p>₱{{ grade.rate.toLocaleString(undefined, { minimumFractionDigits: 2 }) }} / g</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  padding: 30px 20px;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 30px;
  color: #2c5282;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  background-color: #f7fafc;
  border: 1px solid #cbd5e0;
  border-radius: 12px;
  width: 120px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.card h2 {
  margin: 0 0 10px 0;
  color: #2b6cb0;
}

.card p {
  margin: 0;
  font-weight: bold;
  color: #4a5568;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  background-color: #ebf8ff;
}
</style>
