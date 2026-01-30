<template>
    <div class="container">
    <h1>24K Gold Calculator</h1>
    <p>Purity: {{ purity.toFixed(2) }}%</p>
    
    
    <input type="number" v-model.number="goldRate" placeholder="Current Gold Rate" />
    <input type="number" v-model.number="grams" placeholder="Grams" />
    <input type="number" v-model.number="makingCharge" placeholder="Making Charge" />
    
    
    <button @click="calculate">Calculate</button>
    
    
    <h2 v-if="total">₱ {{ total.toFixed(2) }}</h2>
    </div>
    </template>
    
    
    <script>
    export default {
    data() {
    return {
    karat: 24,
    purity: 0,
    goldRate: 0,
    grams: 0,
    makingCharge: 1,
    total: 0
    }
    },
    mounted() {
    this.purity = (this.karat / 24) * 100
    },
    methods: {
    calculate() {
    this.total = this.goldRate * this.grams * this.makingCharge * 1.12
    }
    }
    }
    </script>