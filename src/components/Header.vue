<script setup lang="ts">
import { useFormando } from "../utils/useFormando";
import { CircleCheckBig } from "lucide-vue-next";

import furgLogo from "../assets/images/furg-logo.png";
import c3Logo from "../assets/images/c3-logo.png";

const { formandoAtual } = useFormando();
</script>

<template>
  <header class="header">
    <div class="left">
      <img :src="furgLogo" alt="FURG" class="logo" />
      <img :src="c3Logo" alt="C3" class="logo" />
    </div>

    <div class="center" v-if="formandoAtual">
      Você recebeu um convite de
      <strong>{{ formandoAtual.primeiroNome }}</strong>
    </div>

    <div class="right" v-if="formandoAtual">
      <a :href="formandoAtual.whatsapp" target="_blank" class="confirm-btn">
        <CircleCheckBig />
        Confirmar presença
      </a>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 64px;
  padding: 6px 0px;
  margin: 0;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
  z-index: 1000;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}

.left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo {
  height: 36px;
  width: auto;
}

.center {
  text-align: center;
  font-size: 0.9rem;
}

.confirm-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--white);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.85rem;
  white-space: nowrap;
  font-weight: 600;
}

@media (max-width: 768px) {
  .center {
    display: none;
  }
}
</style>
