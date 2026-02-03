<script setup lang="ts">
import { MapPin } from "lucide-vue-next";
import { CalendarClock } from "lucide-vue-next";
import { gerarICS } from "../utils/calendar";

const evento = {
  title:
    "Solenidade de formatura da 13ª Turma de Engenharia de Automação da FURG",
  location: "CIDEC - FURG",
  start: "20260307T170000",
  end: "20260307T190000",
  description:
    "Esteja lá antes! A Universidade é extremamente pontual, portanto, compareça antes das 17h para tirar fotos com o formando e viver cada momento deste evento tão importante.",
};

const downloadICS = () => {
  const url = gerarICS(evento);
  const link = document.createElement("a");
  link.href = url;
  link.download = "formatura-furg.ics";
  link.click();
};
</script>

<template>
  <section class="schedule">
    <div class="location">
      <div class="title">
        <MapPin :size="32" />
        <span> Local: </span>
      </div>
      <span> CIDEC FURG - Av. Itália, km 8 - Carreiros, Rio Grande - RS </span>

      <a
        class="schedule-btn"
        href="https://share.google/FL8jdc0pZTBuLvCfi"
        target="_blank"
      >
        Conferir local no mapa
      </a>
    </div>
    <div class="date">
      <div class="title">
        <CalendarClock :size="32" />
        <span> Data e Horário: </span>
      </div>
      <span> 07 de Março de 2026, às 17h </span>
      <button class="schedule-btn" @click="downloadICS">
        Marcar na agenda
      </button>
    </div>
  </section>
</template>

<style scoped>
.schedule {
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: linear-gradient(90deg, rgba(5, 92, 151, 0.66) 0%, #0F0F0F 100%);
}

.location, .date{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
    height: 160px;
}
.location {
    width: 30%;
    border-right: 1px solid var(--white);
    margin-right: 8px;
}

.title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-size: 30px;
    font-weight: 600;
}

.schedule-btn {
    cursor: pointer;
    background: var(--white);
    color: var(--primary);
    border-radius: 8px;
    padding: 8px 16px;
    max-width: 190px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
}

@media (max-width: 900px) {
    .schedule {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-radius: 12px 12px 0 0;
        background: linear-gradient(1deg, rgba(5, 92, 151, 0.66) 0%, #0F0F0F 100%);
    }
    .location {
        width: 100%;
        border-right: none;
        margin-right: 0;
    }
}
</style>
