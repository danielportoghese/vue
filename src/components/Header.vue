<template>
  <header class="bg-gray-800 text-white fixed w-full top-0 z-10">
    <div class="flex w-full justify-between items-center py-4 px-8">
      <div class="text-xl font-bold cursor-pointer">
        Logo Aqui
      </div>
      <div class="text-2xl cursor-pointer" @click="toggleMenu">&#9776;</div>

    </div>
  </header>
  <nav>
    <ul class="menu flex flex-col absolute top-0 right-0 w-full h-full bg-gray-800 text-white space-y-4 p-8" :class="{ 'hidden':!isMenuOpen }">
      <li class="primary-item">Bem-vindo. Entre ou cadastre-se</li>
      <li>Home</li>
      <li>Sobre Nós</li>
      <li>Serviços</li>
      <li>Contato</li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value =!isMenuOpen.value
}
</script>

<style scoped>
.menu {
  transition: all 0.3s ease-out;
}
</style>
