<template>
  <div class="container">
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
      // SIMPLE / FAKE LOGIN (for school project)
      if (this.username && this.password) {
        localStorage.setItem('isLoggedIn', 'true')
        this.$router.push('/landing')
      } else {
        alert('Please enter username and password')
      }
    },
    goRegister() {
      // Navigate to register page
      this.$router.push('/register')
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

.register-text {
  margin-top: 15px;
  font-size: 0.9rem;
}

.register-link {
  color: #2b6cb0;
  cursor: pointer;
  font-weight: bold;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
