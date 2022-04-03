<template>
<div class="container max-h-screen">
<div class="flex w-screen h-[500px] bg-primary flex-row items-center justify-evenly">  
  <div class="basis-1/3 flex flex-row justify-center items-center">
  <img src="../assets/lucaskatana.png" />
  </div>
  <div class="flex flex-col gap-8 align-middle justify-evenly">
  <h1 class="text-secondary text-3xl">{{ personalData.name }}</h1>
  </div>
  </div>
</div>
</template>

<script setup>

import HeroSectionButton from './heroSectionButton.vue';
import { personalData } from './example.json'

</script>