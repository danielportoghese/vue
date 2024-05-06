<template>
  <div>
    <Header />
    <main :class="currentPageClass">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Header from './components/Header.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    Header
  },
  setup() {
    const route = useRoute()
    const currentPageClass = ref('')

    const updatePageClass = () => {
      currentPageClass.value = route.name || ''
    }

    updatePageClass() // Atualiza a classe quando o componente é montado

    return { currentPageClass, updatePageClass }
  },
  watch: {
    '$route'(to, from) {
      this.updatePageClass()
    }
  }
})
</script>
