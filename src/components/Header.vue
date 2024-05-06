<template>
  <header
    class="backdrop-blur bg-rich-black-700/70 text-white w-full sticky top-0 z-10 shadow-[0_0_5px_5px_rgba(0,0,0,0.4)]"
  >
    <div class="flex w-full justify-between items-center py-4 px-8">
      <div class="text-xl font-bold cursor-pointer text-white">Logo Aqui</div>
      <div class="text-2xl cursor-pointer" @click="toggleMenu">
        <Bars3Icon
          class="size-7 text-white transition-colors hover:text-charcoal-400"
        />
      </div>
    </div>
  </header>

  <nav
    class="menu absolute top-0 right-0 w-10/12 h-full bg-gray-800 text-white space-y-4 p-8 transition-transform duration-300 transform"
    :class="{
      'translate-x-full': !isMenuOpen,
      'translate-x-0 shadow-xl shadow-black': isMenuOpen,
    }"
  >
    <ul class="flex flex-col items-center justify-center h-full">
      <li class="primary-item">
        <router-link to="/login">Bem-vindo. Entre ou cadastre-se</router-link>
      </li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/localStorage">localStorage</router-link></li>
      <li><router-link to="/cores">Cores</router-link></li>
      <li><router-link to="/swiper">Swiper</router-link></li>
    </ul>
    <div class="absolute right-9 -top-3 p-4">
      <button class="text-white" @click="closeMenu">
        <XMarkIcon
          class="size-7 text-white transition-colors hover:text-charcoal-400"
        />
      </button>
    </div>
  </nav>
</template>

<script setup>
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const isMenuOpen = ref(false)

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  watch(
    () => route.path,
    () => {
      closeMenu()
    },
  )
</script>

<style scoped>
  .menu {
    transition: all 0.3s ease-out;
    z-index: 999;
  }
</style>
