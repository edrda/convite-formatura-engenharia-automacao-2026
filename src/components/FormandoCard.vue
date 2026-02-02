<script setup lang="ts">
import { useFormando } from "../utils/useFormando";
import ConfirmPresenceButton from "../components/buttons/ConfirmPresenceButton.vue";


const { formandoAtual, existeFormando } = useFormando();
</script>

<template>
  <section class="formando" v-if="existeFormando">
    <div class="formando-card">
      <div class="photo-wrapper">
        <img
          :src="formandoAtual?.fotos[0]"
          :alt="`Foto de ${formandoAtual?.nome}`"
        />
      </div>

      <div class="content">
        <div class="personal-info">
            <h2>{{ formandoAtual?.nome }}</h2>
            <span class="location">{{ formandoAtual?.nacionalidade }}</span>
        </div>
        
        <p class="description">
          {{ formandoAtual?.descricao }}
        </p>

        <div class="invite-wrapper">
            <p class="invite">
            <strong>{{ formandoAtual?.primeiroNome }}</strong> te convida a fazer
            parte desse momento único!
            </p>

            <ConfirmPresenceButton  />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.formando {
  padding: 4rem 1.5rem;
  background-color: var(--black, #000);
}

.formando-card {
  max-width: 1100px;
  margin: 0 auto;
  background: linear-gradient(180deg, #055c97 0%, rgba(5, 92, 151, 0.66) 100%);
  border-radius: 40px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  overflow: hidden;
}

.photo-wrapper {
  position: relative;
}

.photo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.25rem;
  color: #fff;
}
.personal-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.content h2 {
  font-size: 2rem;
  margin: 0;
}

.location {
  font-size: 1rem;
  opacity: 0.9;
}

.description {
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 420px;
}

.invite {
  margin-top: 1rem;
  font-size: 0.95rem;
}

.confirm-btn {
  margin-top: 1.5rem;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: #fff;
  color: #055c97;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 900px) {
  .formando-card {
    grid-template-columns: 1fr;
  }

  .photo-wrapper {
    height: 320px;
  }

  .content {
    padding: 2rem;
  }

  .content h2 {
    font-size: 1.6rem;
  }
}
</style>
