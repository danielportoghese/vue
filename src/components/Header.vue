<template>
  <header class="bg-gray-800 text-white fixed w-full top-0 z-10">
    <div class="flex w-full justify-between items-center py-4 px-8">
      <div class="text-xl font-bold cursor-pointer">
        Logo Aqui
      </div>
      <div class="text-2xl cursor-pointer" @click="toggleMenu">&#9776;</div>

    </div>
  </header>

  <nav class="menu absolute top-0 right-0 w-full h-full bg-gray-800 text-white space-y-4 p-8 transition-transform duration-300 transform " :class="{ 'translate-x-full':!isMenuOpen },{ 'translate-x-0': isMenuOpen }">
    <ul class="flex flex-col">
      <li class="primary-item"><a href="/login">Bem-vindo. Entre ou cadastre-se</a></li>
      <li><a href="/">Home</a></li>
      <li><a href="/sobre">Sobre Nós</a></li>

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
