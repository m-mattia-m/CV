<script lang="ts" setup></script>

<template>
  <div
    class="w-full py-4 bg-primary flex flex-col md:flex-row justify-between items-center"
  >
    <NuxtLink class="text-light dark:text-dark" to="mailto:hi@mattiamueggler.ch"
      >hi@mattiamueggler.ch</NuxtLink
    >
    <NuxtLink class="text-light dark:text-dark" to="tel:+41795054828"
      >+41 79 505 48 28</NuxtLink
    >
    <p class="text-light dark:text-dark">
      &copy;
      {{ new Date().getFullYear() }}
      {{ $t("footer.copyright") }}
    </p>
  </div>
</template>

<style scoped></style>
