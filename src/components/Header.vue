<template>
  <header class="bg-gray-800 text-white">
    <div class="flex justify-between items-center py-4 px-8">
      <div class="text-xl font-bold">Logo Aqui</div>
      <nav>
        <div class="text-2xl cursor-pointer" @click="toggleMenu">&#9776;</div>
        <ul class="menu flex items-center space-x-4" :class="{ 'hidden': !isMenuOpen }">
          <li class="primary-item">Bem-vindo. Entre ou cadastre-se</li>
          <li>Home</li>
          <li>Sobre Nós</li>
          <li>Faq</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
