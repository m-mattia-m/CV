<script lang="ts" setup>
import Home from "~/components/home.vue";
</script>

<template>
  <div class="w-full bg-light dark:bg-dark">
    <home />
    <div class="w-full px-mobile md:px-tablet lg:px-desktop">
      <about />
      <hobbies />
    </div>
  </div>
</template>

<style scoped></style>
