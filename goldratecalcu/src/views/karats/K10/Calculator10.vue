<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const karat = 10
const purity = (karat / 10) * 100  // Correct purity relative to 24K

const goldRate = ref(4073.72) // Current gold rate
const grams = ref(0)
const makingCharge = ref(0)
const total = ref(0)

function calculate() {
  const subtotal = goldRate.value * grams.value + makingCharge.value
  total.value = subtotal * 1.12 // Add 12% VAT
}

function goBack() {
  router.push('/') // Go back to landing page
}
</script>

<template>
  <div class="container">
    <h1>{{ karat }}K Gold Calculator</h1>
    <p>Purity: {{ purity.toFixed(2) }}%</p>
    <p>Current Gold Rate: ₱{{ goldRate.toFixed(2) }}</p>

    <div>
      <label>Grams:</label>
      <input type="number" v-model.number="grams" />
    </div>

    <div>
      <label>Making Charge (₱):</label>
      <input type="number" v-model.number="makingCharge" />
    </div>

    <button @click="calculate">Calculate</button>

    <div v-if="total > 0" class="result">
      <h2>Total (with 12% VAT): ₱{{ total.toFixed(2) }}</h2>
    </div>

    <button @click="goBack" class="back-btn">⬅ Back to Landing Page</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
  font-family: Arial, sans-serif;
}
input {
  margin: 5px 0;
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
button {
  margin-top: 10px;
  padding: 10px 15px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #2b6cb0;
  color: white;
}
button:hover {
  background-color: #2c5282;
}
.back-btn {
  background-color: #718096;
  margin-top: 16px;
}
.back-btn:hover {
  background-color: #4a5568;
}
.result {
  margin-top: 16px;
  font-weight: bold;
  color: #2c5282;
}
</style>
