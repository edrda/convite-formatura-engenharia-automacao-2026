<script setup lang="ts">
import SectionHeader from './ui/SectionHeader.vue'
import { useReveal } from '../composables/useReveal'

defineProps<{
  titulo: string
  nome: string
  descricao: string
  foto: string
}>()

const { el, visible } = useReveal()
</script>

<template>
  <section
    ref="el"
    class="honoree"
    :class="{ show: visible }"
  >
    <SectionHeader :title="titulo" />

    <div class="content">
      <img :src="foto" :alt="nome" class="photo" />

      <div class="text">
        <h3>{{ nome }}</h3>
        <p>{{ descricao }}</p>
      </div>
    </div>
  </section>
</template>


<style scoped>
.honoree {
  padding: 4rem 2rem;
}

.honoree-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.line {
  flex: 1;
  max-width: 120px;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
}

.content {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.photo {
  width: 282px;
  border-radius: 12px;
  object-fit: cover;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text h3 {
  margin: 0 0 1rem;
  font-size: 32px;
  font-weight: 600;
}

.text p {
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .photo {
    width: 260px;
  }

  .honoree-header h2 {
    font-size: 22px;
  }

  .text p {
    font-size: 16px;
    text-align: justify;
  }
}
</style>
