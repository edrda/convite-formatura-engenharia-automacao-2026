<script setup lang="ts">
import HonoreeCard from './HonoreeCard.vue'

const paraninfo = {
  titulo: 'PROF PARANINFO',
  nome: 'Cláudio Dornelles',
  descricao: `Assumir a voz desta turma em um momento tão grandioso é, no fundo, apenas traduzir em palavras uma trajetória que escrevemos. Das horas de laboratório, entre Código, sistemas de controle e a teimosia dos circuitos com "osmar contato", cria-se uma resiliência que máquina nenhuma consegue replicar. A tuma ingressa em um cenário onde a Engenharia de Automação deixou de ser apenas a engrenagem industrial para se tornar o próprio cérebro da revolução tecnológica. O verdadeiro, daqui para frente, não será apenas dominar as novas ferramentas, mas manter a capacidade de inovar com ética e adaptabilidade em um mundo de transformações rápidas. Que o orgulho presente nestas linhas reflita a exata dimensão do esforço necessário para chegar até aqui. A inteligência por trás de qualquer sistema sempre será humana, e é com profunda admiração por essa essência e por tudo o que superamos que hoje celebramos esta vitória!`,
  assinatura: '— Turma EAUTO13',
  foto: '/images/homenageados/paraninfo.webp'
}

const patronesse = {
  titulo: 'PROFA PATRONESSE',
  nome: 'Gisele Simas',
  descricao: `Acompanhar a trajetória desta turma foi um privilégio. Desde o início, na exigente Engenharia de Automação, vocês enfrentaram desafios significativos, reflexos da pandemia. Com dedicação e apoio mútuo, transformaram dificuldades em crescimento coletivo.
Ao longo dessa caminhada, foi possível presenciar um expressivo amadurecimento profissional, evidenciado por trabalhos de elevada qualidade técnica e relevante impacto social. Vocês mostraram que a engenharia vai além da técnica: ela exige sensibilidade humana, ética e cooperação.
Que esta formatura seja o início de uma brilhante jornada de excelência técnica e humana.`,
  assinatura: '— Profa. Gisele Simas',
  foto: '/images/homenageados/patronesse.webp'
}
</script>

<template>
  <div>
    <HonoreeCard v-bind="paraninfo" />
    <HonoreeCard v-bind="patronesse" />
  </div>
</template>
