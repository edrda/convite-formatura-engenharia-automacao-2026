<script setup lang="ts"></script>

<template>
  <section class="juramento">
    <p>
      “Juro Honrar o grau que solenemente recebo, exercendo a profissão de
      engenheiro com ética, dignidade e respeito a vida e ao meio ambiente.<br />
      Com meu conhecimento cientifico e tecnológico, buscarei contribuir para o
      desenvolvimento socialmente justo do Brasil e para prosperidade da
      humanidade”
    </p>
    <br />
    <span> ASSIM JURO </span>
  </section>
</template>

<style scoped>
.juramento {
  margin: 0 auto;
  padding: 2rem;
  max-width: 1200px;
  font-size: 28px;
  line-height: 45px;
  text-align: justify;
  background-color: var(--black);

  span {
    display: block;
    font-size: 30px;
    text-align: center;
  }
}

@media (max-width: 900px) {
  .juramento {
    font-size: 20px;
    line-height: 32px;
    padding: 1.5rem;
  }
}
</style>
