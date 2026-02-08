<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <header class="section-header">
    <span class="line" />
    <h2>{{ title }}</h2>
    <span class="line" />
  </header>
</template>

<style scoped>
.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.section-header h2 {
  letter-spacing: 0.25em;
  font-size: 38px;
  font-weight: 600;
}

.line {
  flex: 1;
  max-width: 140px;
  height: 1px;
  background: rgba(255,255,255,0.35);
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 22px;
  }
}
</style>
