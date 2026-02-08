<script setup lang="ts">
import SectionHeader from './ui/SectionHeader.vue'
// import { useReveal } from '../composables/useReveal'


const homenageados = [
  {
    nome: 'Cedenir Borges',
    cargo: 'Funcionário Homenageado',
    foto: '/images/homenageados/cedenir.webp'
  },
  {
    nome: 'Gabriel Lavoura',
    cargo: 'Professor Homenageado',
    foto: '/images/homenageados/gabriel-lavoura.webp'
  },
  {
    nome: 'Rodrigo Azzolin',
    cargo: 'Professor Homenageado',
    foto: '/images/homenageados/rodrigo-azzolin.webp'
  },
  {
    nome: 'Rodrigo Guerra',
    cargo: 'Professor Homenageado',
    foto: '/images/homenageados/rodrigo-guerra.webp'
  },
  {
    nome: 'Vinniccius Menezes',
    cargo: 'Professor Homenageado',
    foto: '/images/homenageados/vinicius.webp'
  },
  {
    nome: 'Vitor Gervini',
    cargo: 'Professor Homenageado',
    foto: '/images/homenageados/vitor-gervini.webp'
  }
]
</script>

<template>
  <section class="honored">
    <SectionHeader title="OS HOMENAGEADOS" />

    <div class="grid">
      <article
        v-for="h in homenageados"
        :key="h.nome"
        class="card"
      >
        <img :src="h.foto" :alt="h.nome" />

        <div class="info">
          <strong>{{ h.nome }}</strong>
          <span>{{ h.cargo }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.honored {
  padding: 4rem 2rem;
}

.grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.card {
  text-align: center;
}

.card img {
  width: 100%;
  height: 450px;
  border-radius: 18px;
  margin-bottom: 0.75rem;
}

.info strong {
  display: block;
  font-size: 0.95rem;
}

.info span {
  font-size: 0.85rem;
  opacity: 0.8;
}

.card img {
  transition: transform .25s ease;
}

.card:hover img {
  transform: translateY(-4px) scale(1.02);
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .card img {
    height: 500px;
  }
}

@media (max-width: 500px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
