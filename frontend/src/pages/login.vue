<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Login</h2>
        <input v-model="cpf" placeholder="Digite seu CPF" />
        <button @click="handleLogin">Entrar</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return { cpf: '' };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post(import.meta.env.VITE_API_URL + '/auth/login', { cpf: this.cpf });
          alert('Login bem-sucedido!');
        } catch (error) {
          alert('Erro ao fazer login');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 128, 0, 0.5);
  }
  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
  }
  </style>