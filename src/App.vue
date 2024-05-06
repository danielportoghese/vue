<template>
  <div>
    <Header />
    <main :class="currentPageClass">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue'
  import { useRoute, RouteRecordName } from 'vue-router'
  import Header from './components/Header.vue'

  export default defineComponent({
    components: {
      Header,
    },
    setup() {
      const route = useRoute()
      const currentPageClass = ref<string | null>('')

      const updatePageClass = () => {
        const name: RouteRecordName | null | undefined = route.name
        currentPageClass.value = name && typeof name === 'string' ? name : null
      }

      updatePageClass() // Atualiza a classe quando o componente é montado

      watch(
        () => route.name,
        () => {
          updatePageClass()
        },
      )

      return { currentPageClass }
    },
  })
</script>
