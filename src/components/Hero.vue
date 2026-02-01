<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFormando } from '../utils/useFormando'

import turma1 from '../assets/images/turma/turma1.jpg'
import turma2 from '../assets/images/turma/turma2.jpg'
import turma3 from '../assets/images/turma/turma3.jpg'
import turma4 from '../assets/images/turma/turma4.jpg'
import turma5 from '../assets/images/turma/turma5.jpg'
import turma6 from '../assets/images/turma/turma6.jpg'
import turma7 from '../assets/images/turma/turma7.jpg'
import turma8 from '../assets/images/turma/turma8.jpg'
import turma9 from '../assets/images/turma/turma9.jpg'
import turma10 from '../assets/images/turma/turma10.jpg'

const { formandoAtual } = useFormando()

const imagensTurma = [
  turma1,
  turma2,
  turma3,
  turma4,
  turma5,
  turma6,
  turma7,
  turma8,
  turma9,
  turma10
]

const slideAtual = ref(0)

onMounted(() => {
  setInterval(() => {
    slideAtual.value = (slideAtual.value + 1) % imagensTurma.length
  }, 4000)
})
</script>

<template>
  <section class="hero" v-if="formandoAtual">
    <div
      class="slide"
      :style="{ backgroundImage: `url(${imagensTurma[slideAtual]})` }"
    />

    <div class="overlay-card">
      <p>
        <strong>{{ formandoAtual.nome }}</strong> e demais formandos da <strong>TURMA 13 DE ENGENHARIA DE AUTOMAÇÃO</strong> 2026 da FURG têm a honra de convidá-los para a solenidade de sua formatura.
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
}

.overlay-card {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 690px;
  height: 221px;
  padding: 1.5rem 2rem;
  background: linear-gradient(
    90deg,
    rgba(5, 92, 151, 0.8) 0%,
    rgba(15, 15, 15, 0.8) 100%
  );
  border-radius: 12px;
  display: flex;
  align-items: center;
}

.overlay-card p {
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .overlay-card {
    width: calc(100% - 2rem);
    left: 1rem;
    right: 1rem;
    height: auto;
  }
}
</style>
