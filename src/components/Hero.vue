<template>
  <section class="hero">
    <h1>
      <strong>{{ nome }}</strong> e demais formandos da
      Turma 13 de Engenharia de Automação 2026 da FURG
    </h1>

    <p>📅 7 de março de 2026 • 17h</p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const nome = ref('O formando')

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const aluno = params.get('nome')

  if (aluno) nome.value = aluno
})
</script>

<style scoped>
.hero {
  padding: 4rem 2rem;
  text-align: center;
}
</style>
