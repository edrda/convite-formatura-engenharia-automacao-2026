<script setup lang="ts">
import HonoreeCard from './HonoreeCard.vue'

const paraninfo = {
  titulo: 'PROF PARANINFO',
  nome: 'Cláudio Dornelles',
  descricao: `Lorem ipsum dolor sit amet consectetur adipiscing elit.
Quisque faucibus ex sapien vitae pellentesque sem placerat.
In id cursus mi pretium tellus duis convallis.
Tempus leo eu aenean sed diam urna tempor.
Pulvinar vivamus fringilla lacus nec metus bibendum egestas.`,
  foto: '/images/homenageados/paraninfo.webp'
}

const patronesse = {
  titulo: 'PROFA PATRONESSE',
  nome: 'Gisele Simas',
  descricao: `Acompanhar a trajetória desta turma foi um privilégio. Desde o início, na exigente Engenharia de Automação, vocês enfrentaram desafios significativos, reflexos da pandemia. Com dedicação e apoio mútuo, transformaram dificuldades em crescimento coletivo.
Ao longo dessa caminhada, foi possível presenciar um expressivo amadurecimento profissional, evidenciado por trabalhos de elevada qualidade técnica e relevante impacto social. Vocês mostraram que a engenharia vai além da técnica: ela exige sensibilidade humana, ética e cooperação.
Que esta formatura seja o início de uma brilhante jornada de excelência técnica e humana.`,
  foto: '/images/homenageados/patronesse.webp'
}
</script>

<template>
  <div>
    <HonoreeCard v-bind="paraninfo" />
    <HonoreeCard v-bind="patronesse" />
  </div>
</template>
