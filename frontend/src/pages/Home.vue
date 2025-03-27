<template>
  <!-- Contêiner principal da página inicial -->
  <div class="home-container">
    <!-- Navbar importada do componente separado -->
    <Navbar />
    
    <!-- Seção de conteúdo centralizado -->
    <div class="content">
      <h1>Bem-vindo ao Sistema de Pontos da Clínica</h1>
      <p>Gerencie seus pontos de forma rápida e eficiente</p>

      <!-- Botão que leva o usuário para a página de login -->
      <button @click="startSystem">Começar</button>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'; // Importa o componente de navegação

export default {
  components: { Navbar }, // Define Navbar como um componente filho

  methods: {
    // Método chamado ao clicar no botão "Começar"
    startSystem() {
      this.$router.push('/login'); // Redireciona o usuário para a página de login
    }
  }
};
</script>

<style scoped>
/* Estilização da página inicial */
.home-container {
  display: flex; /* Usa flexbox para organização */
  flex-direction: column; /* Organiza os elementos em coluna */
  align-items: center; /* Centraliza os itens horizontalmente */
  justify-content: center; /* Centraliza os itens verticalmente */
  height: 100vh; /* Define altura total da tela */
  background: linear-gradient(to right, #4c93af, #4f5155); /* Gradiente colorido */
  color: white; /* Define a cor do texto */
  text-align: center; /* Centraliza o texto */
}

/* Estilização do título principal */
.content h1 {
  font-size: 2rem; /* Define o tamanho da fonte */
  margin-bottom: 10px; /* Espaçamento abaixo do título */
}

/* Estilização do parágrafo */
.content p {
  font-size: 1.2rem; /* Define o tamanho da fonte */
  margin-bottom: 20px; /* Espaçamento abaixo do parágrafo */
}

/* Estilização do botão */
button {
  background-color: white; /* Define cor de fundo */
  color: #2E7D32; /* Define cor do texto */
  border: none; /* Remove bordas */
  padding: 10px 20px; /* Define espaçamento interno */
  font-size: 1rem; /* Define tamanho da fonte */
  border-radius: 5px; /* Borda arredondada */
  cursor: pointer; /* Cursor de mão ao passar por cima */
  transition: 0.3s; /* Suaviza a mudança de cor */
}

/* Efeito ao passar o mouse no botão */
button:hover {
  background-color: #A5D6A7; /* Cor mais clara ao passar o mouse */
}
</style>
