<template>
  <button class="bg-secondary px-3 py-3 rounded-md hover:py-5">
    <span>{{ heroBtnMessage }}</span>
  </button>
</template>

<script>
export default {
  props: {
    heroBtnMessage: String
  }
}
</script>