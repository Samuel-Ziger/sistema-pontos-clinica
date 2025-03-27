<!-- frontend/src/pages/Maintenance.vue -->
<template>
    <div class="maintenance-page">
      <h1>🚧 Em Manutenção 🚧</h1>
      <p>Estamos trabalhando para melhorar o sistema. Tente novamente mais tarde.</p>
      <router-link to="/">Voltar para a Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "Maintenance",
  };
  </script>
  
  <style scoped>
  .maintenance-page {
    text-align: center;
    margin-top: 100px;
  }
  
  a {
    text-decoration: none;
    color: #42b983;
  }
  </style>
  