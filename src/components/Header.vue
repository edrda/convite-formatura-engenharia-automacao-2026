<script setup lang="ts">
import { useFormando } from "../utils/useFormando";
import ConfirmPresenceButton from "../components/buttons/ConfirmPresenceButton.vue";
import { GraduationCap } from 'lucide-vue-next';

import furgLogo from "/images/furg-logo.png";
import c3Logo from "/images/c3-logo.png";
import { ref, onMounted } from "vue";

const { formandoAtual } = useFormando();

const progress = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    const h = document.documentElement
    progress.value = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
  })
})

</script>

<template>
  <header class="header">
    <div class="progress" :style="{ width: progress + '%' }" />

    <div class="left">
      <img :src="furgLogo" alt="FURG" class="logo furg" />
      <img :src="c3Logo" alt="C3" class="logo" />
    </div>

    <div class="center" v-if="formandoAtual">
      <h1>
        Você recebeu um convite de
      <strong>{{ formandoAtual.primeiroNome }}</strong> <GraduationCap :size="14" style="margin-left: -6px;"/>
      </h1>
      
    </div>

    <div class="right" v-if="formandoAtual">
      <ConfirmPresenceButton />
    </div>
  </header>
</template>

<style scoped>
.progress {
  position: fixed;
  top:0;
  left:0;
  height:3px;
  background:#055C97;
  z-index:2000;
}

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

h1 {
  font-weight: 500;
  font-size: 16px !important;
  line-height: 40px;
  color: var(--white);
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

img.logo.furg {
  border-right: 1px solid var(--white);
  padding-right: 10px;
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
