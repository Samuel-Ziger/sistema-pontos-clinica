<!-- frontend/src/pages/Error404.vue -->
<template>
    <div class="error-404">
      <h1>404 - Página não encontrada</h1>
      <router-link to="/">Voltar para a Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "Error404",
  };
  </script>
  
  <style scoped>
  .error-404 {
    text-align: center;
    margin-top: 100px;
  }
  
  a {
    text-decoration: none;
    color: #42b983;
  }
  </style>
  