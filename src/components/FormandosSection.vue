<script setup lang="ts">
import SectionHeader from "./ui/SectionHeader.vue";
import { onMounted, ref } from "vue";

const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});


const titulo = "OS FORMANDOS";

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

const formandosSemFoto = [
  {
    nome: "Rodrigo K.",
    local: "Rio Grande/RS",
  },
  {
    nome: "Thiago F. S. O.",
    local: "Rio Grande/RS",
  },
  {
    nome: "Pedro H. M. L.",
    local: "Cordeirópolis/SP",
  },
];
</script>

<template>
  <section ref="sectionRef" class="formandos">
    <header class="formandos-header">
      <span class="line" />

      <SectionHeader :title="titulo" />

      <span class="line" />
    </header>

    <div class="grid">
      <article
        v-for="formando in formandos"
        :key="formando.nome"
        class="card show"
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

    <div class="extra-row">
      <div
        v-for="formando in formandosSemFoto"
        :key="formando.nome"
        class="extra-card"
      >
        <strong>{{ formando.nome }}</strong>
        <span>{{ formando.local }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.formandos {
  padding: 4rem 2rem;
  background: #0b0b0b;

  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.formandos.visible {
  opacity: 1;
  transform: none;
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

  opacity: 0;
  transform: translateY(20px);
  transition:
    transform 0.4s cubic-bezier(.2,.8,.2,1),
    box-shadow 0.4s ease;
  will-change: transform;
}

@media (hover: hover) and (pointer: fine) {

  .card {
    transform-style: preserve-3d;
  }

  .card:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0,0,0,.4);
    transition-delay: .1s;
  }

  .card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 20%, rgba(255,255,255,.15), transparent 60%);
    opacity: 0;
    transition: opacity .4s ease;
  }

  .card:hover::after {
    opacity: 1;
  }
}

.formandos.visible .card.show {
  opacity: 1;
  transition: opacity .3s ease, transform .6s ease;
}

/* .formandos.visible .card:nth-child(1) { transition-delay: .1s; }
.formandos.visible .card:nth-child(2) { transition-delay: .2s; }
.formandos.visible .card:nth-child(3) { transition-delay: .3s; }
.formandos.visible .card:nth-child(4) { transition-delay: .4s; }
.formandos.visible .card:nth-child(5) { transition-delay: .5s; }
.formandos.visible .card:nth-child(6) { transition-delay: .6s; }
.formandos.visible .card:nth-child(7) { transition-delay: .7s; }
.formandos.visible .card:nth-child(8) { transition-delay: .8s; } */

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

.extra-row {
  margin-top: 3rem;
  display: flex;
  gap: 60px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.extra-card {
  min-width: 180px;
  padding: 16px 12px;
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(20, 20, 20, 1), rgba(0, 0, 0, 1));
  text-align: left;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.extra-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
}

.extra-card strong {
  display: block;
  font-size: 0.95rem;
}

.extra-card span {
  font-size: 0.8rem;
  opacity: 0.8;
}

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
    animation: mobileFloat 6s ease-in-out infinite;
  }

  .card:nth-child(2) {
    animation-delay: 1s;
  }

  .card:nth-child(3) {
    animation-delay: 2s;
  }

  .card:nth-child(4) {
    animation-delay: 3s;
  }

  .formandos-header h2 {
    font-size: 22px;
  }

  .extra-row {
    gap: 22px;
    margin-top: 1rem;
  }
}

@keyframes mobileFloat {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0px);
  }
}

</style>
