<template>
  <div class="container">
    <div class="card">
      <h1>Login</h1>

      <div class="form-group">
        <label>Username</label>
        <input v-model="username" type="text" placeholder="Enter username" />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="Enter password" />
      </div>

      <button @click="login">Login</button>

      <!-- Sign up / register link -->
      <p class="register-text">
        Don't have an account?
        <span class="register-link" @click="goRegister">Sign Up</span>
      </p>
    </div>
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
    login() {
      if (this.username && this.password) {
        localStorage.setItem('isLoggedIn', 'true')
        this.$router.push('/landing')
      } else {
        alert('Please enter username and password')
      }
    },
    goRegister() {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
/* Container centers the card */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ebf8ff, #f0f4f8);
  font-family: Arial, sans-serif;
}

/* Card style */
.card {
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 30px 25px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* Headings */
h1 {
  color: #2b6cb0;
  margin-bottom: 25px;
}

/* Form groups */
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  font-weight: bold;
  color: #4a5568;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  transition: border 0.3s;
}

input:focus {
  border-color: #2b6cb0;
  outline: none;
}

/* Button styling */
button {
  width: 100%;
  padding: 12px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background-color: #2b6cb0;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #2c5282;
  transform: translateY(-2px);
}

/* Register link */
.register-text {
  margin-top: 20px;
  font-size: 0.95rem;
  color: #4a5568;
}

.register-link {
  color: #2b6cb0;
  cursor: pointer;
  font-weight: bold;
  margin-left: 5px;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
