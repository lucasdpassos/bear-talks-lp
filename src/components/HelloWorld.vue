<template>
<div class="container max-h-screen">
<div class="flex w-screen h-[500px] bg-primary flex-col items-center sm:flex-row justify-evenly">  
  <div class="basis-1/3 flex flex-row justify-center items-center">
  <img class="animate-pulse sm:max-h-[300px] max-h-[150px]" src="../assets/lucasquadro.png" />
  </div>
  <div class="flex flex-col gap-8 align-middle justify-evenly">
  <h1 class="text-secondary font-Poppins text-3xl">{{ personalData.name }}</h1>
  <HeroSectionButton heroBtnMessage="Quem sou eu?" />
  <HeroSectionButton heroBtnMessage="Tecnologias" />
  <HeroSectionButton heroBtnMessage="Esta Página" />
  </div>
  </div>
</div>
</template>

<script setup>


import { personalData } from './example.json'
import HeroSectionButton from './heroSectionButton.vue';

</script>