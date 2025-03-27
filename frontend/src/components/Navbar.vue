<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/register">Cadastro</router-link>
      <router-link to="/about">Sobre a Clínica</router-link>
      <router-link to="/qr-reader">Bater Ponto</router-link>
    </nav>
  </template>
  
  <style scoped>
  nav {
    display: flex;
    gap: 20px;
    background: transparent;
    padding: 10px;
  }
  </style>