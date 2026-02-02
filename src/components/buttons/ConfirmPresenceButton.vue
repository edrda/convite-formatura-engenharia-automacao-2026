<script setup lang="ts">
import { CircleCheckBig } from "lucide-vue-next";
import { useFormando } from "../../utils/useFormando";

const { formandoAtual } = useFormando();

</script>
<template>
  <a
    v-if="formandoAtual"
    :href="formandoAtual.whatsapp" 
    target="_blank" 
    class="confirm-btn"
    rel="noopener noreferrer"
  >
    <CircleCheckBig />
    Confirmar presença
  </a>
</template>

<style scoped>
.confirm-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0.9rem 1.6rem;
  border-radius: 999px;

  background-color: #ffffff;
  color: var(--primary);

  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.confirm-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.confirm-btn:active {
  transform: translateY(0);
  box-shadow: none;
}

</style>
