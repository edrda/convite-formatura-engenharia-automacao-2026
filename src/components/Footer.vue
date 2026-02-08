<script setup lang="ts">
import ConfirmPresenceButton from "../components/buttons/ConfirmPresenceButton.vue";
</script>

<template>
  <footer class="footer">
    <span> Não esqueça de confirmar sua presença! </span>
    <ConfirmPresenceButton />
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 56px;
  padding: 6px 0px;
  margin: 0;
  background-color: var(--primary);
}

span {
  font-weight: 400;
  font-size: 16px;
  color: var(--white);
}

.confirm-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--white);
  color: var(--primary);
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 14px;
  white-space: nowrap;
  font-weight: 600;
}

@media (max-width: 768px) {
  .center {
    display: none;
  }

  .footer {
    flex-direction: column;
    height: auto;
    padding: 10px 0;
    gap: 12px;
  }
  span {
    font-size: 14px;
  }

  .confirm-btn {
    padding: 0.5rem 0.75rem;
    font-size: 12px;
  }
}
</style>
