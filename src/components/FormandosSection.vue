<script setup lang="ts">
const formandos = [
  {
    nome: "Fernando P.M.",
    local: "Rio Grande/RS",
    img: "farnando_estudio.webp",
  },
  {
    nome: "Gabriel R.S.",
    local: "Rio Grande/RS",
    img: "gabriel_estudio.webp",
  },
  {
    nome: "João Victor A.A.",
    local: "Rio Grande/RS",
    img: "joao_estudio.webp",
  },
  {
    nome: "Leonardo L.V.",
    local: "Rio Grande/RS",
    img: "leonardo_estudio.webp",
  },
  {
    nome: "Luiz H.M.",
    local: "Pelotas/RS",
    img: "luis_estudio.webp",
  },
  {
    nome: "Nicolas F.D.",
    local: "Rio Grande/RS",
    img: "nicolas_estudio.webp",
  },
  {
    nome: "Rafaella Q.L.",
    local: "Rio Grande/RS",
    img: "rafaella_estudio.webp",
  },
  {
    nome: "Vitor W.A.",
    local: "Rio Grande/RS",
    img: "vitor_estudio.webp",
  },
];
</script>

<template>
  <section class="formandos">
    <header class="formandos-header">
      <span class="line" />
      <h2>OS FORMANDOS</h2>
      <span class="line" />
    </header>

    <div class="grid">
      <article
        v-for="formando in formandos"
        :key="formando.nome"
        class="card"
        :style="{
          backgroundImage: `url(/images/turma/${formando.img})`,
        }"
      >
        <div class="info">
          <strong>{{ formando.nome }}</strong>
          <span>{{ formando.local }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.formandos {
  padding: 4rem 2rem;
  background: #0b0b0b;
}

.formandos-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.formandos-header h2 {
  font-family: "Roboto Mono", monospace;
  font-size: 1.4rem;
  letter-spacing: 0.2em;
}

.line {
  flex: 1;
  max-width: 120px;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
}

.grid {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 160px;
}

.card {
  position: relative;
  flex: 0 0 25%;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  transition: transform 0.25s ease;
  max-width: 208px;
  height: 304px;
}

.card:hover {
  transform: translateY(-4px);
}

.info {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0));
}

.info strong {
  display: block;
  font-size: 0.95rem;
}

.info span {
  font-size: 0.8rem;
  opacity: 0.85;
}

/* RESPONSIVO */
@media (max-width: 900px) {
  .grid {
    padding: 0;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    flex-wrap: nowrap;
    display: flex;
    width: 100%;
  }

  .card {
    width: 100%;
    min-height: 300px;
  }
}
</style>
