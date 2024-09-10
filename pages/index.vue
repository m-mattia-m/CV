<script lang="ts" setup>
import Home from "~/components/home.vue";
import PrivateProjects from "~/components/private-projects.vue";
import MyFooter from "~/components/molecules/myFooter.vue";
import Awards from "~/components/awards.vue";
</script>

<template>
  <div
    class="w-full bg-light dark:bg-dark selection:bg-dark selection:text-light dark:selection:bg-light dark:selection:text-dark"
  >
    <home />
    <div class="w-full px-mobile md:px-tablet lg:px-desktop">
      <about />
      <hobbies />
      <skills />
      <awards />
      <work />
      <private-projects />
    </div>
    <my-footer class="w-full px-mobile md:px-tablet lg:px-desktop" />
  </div>
</template>

<style scoped></style>
