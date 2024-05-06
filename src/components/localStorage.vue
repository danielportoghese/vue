<template>
    <h1>Contagem: {{ store.count }}</h1>
    <button @click="store.increment">Incrementar</button>
    <button @click="resetCount">Zerar</button>

</template>

<script setup lang="ts">
import { useStore } from '../store/store'

const store = useStore()

const resetCount = () => {
  store.count = 0
  store.saveState() // Salvar o estado atualizado no localStorage
}
</script>
