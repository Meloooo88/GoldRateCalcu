<template>
    <div class="container">
      <h1>Register</h1>
  
      <div class="form-group">
        <label>Username</label>
        <input v-model="username" type="text" placeholder="Enter username" />
      </div>
  
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="Enter password" />
      </div>
  
      <button @click="register">Register</button>
  
      <p class="login-text">
        Already have an account?
        <span class="login-link" @click="goLogin">Login</span>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      register() {
        if (this.username && this.password) {
          // Save fake account in localStorage
          const users = JSON.parse(localStorage.getItem('users') || '[]')
          users.push({ username: this.username, password: this.password })
          localStorage.setItem('users', JSON.stringify(users))
          alert('Account created! Please login.')
          this.$router.push('/login')
        } else {
          alert('Please fill out all fields.')
        }
      },
      goLogin() {
        this.$router.push('/login')
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 350px;
    margin: 80px auto;
    padding: 25px;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .login-text {
    margin-top: 15px;
    font-size: 0.9rem;
  }
  
  .login-link {
    color: #2b6cb0;
    cursor: pointer;
    font-weight: bold;
  }
  
  .login-link:hover {
    text-decoration: underline;
  }
  </style>
  