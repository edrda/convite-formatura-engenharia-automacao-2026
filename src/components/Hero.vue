<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFormando } from '../utils/useFormando'

import turma1 from '/images/turma/turma1_compressed.webp' 
import turma2 from '/images/turma/turma2_compressed.webp'
import turma3 from '/images/turma/turma3_compressed.webp'
import turma4 from '/images/turma/turma4_compressed.webp'
import turma5 from '/images/turma/turma5_compressed.webp'
import turma6 from '/images/turma/turma6_compressed.webp'
import turma7 from '/images/turma/turma7_compressed.webp'
import turma8 from '/images/turma/turma8_compressed.webp'
import turma9 from '/images/turma/turma9_compressed.webp'
import turma10 from '/images/turma/turma10_compressed.webp'

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

const offset = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    offset.value = window.scrollY * 0.3
  })
})

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
      :style="{
      backgroundImage: `url(${imagensTurma[slideAtual]})`,
      transform: `translateY(${offset}px)`
    }"
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
  height: 170px;
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
    width: 76%;
    height: 94px;
    left: -10px;

    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
  .hero {
    height: 40vh;}

}
</style>
