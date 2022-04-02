<template>
<div class="container max-h-screen">
<div class="flex w-screen h-[500px] bg-primary flex-row items-center justify-evenly">  
  <div class="basis-1/3 flex flex-row justify-center items-center">
  <img src="../assets/logo.png" />
  </div>
  <div class="flex flex-col gap-8 align-middle justify-evenly">
  <HeroSectionButton heroBtnMessage="Cases de Sucesso" />  
  <HeroSectionButton heroBtnMessage="Nossa Tecnologia" />  
  <HeroSectionButton heroBtnMessage="Equipe" />  
  </div>
  </div>
</div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import HeroSectionButton from './heroSectionButton.vue';
</script>