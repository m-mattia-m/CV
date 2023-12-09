<script lang="ts" setup></script>

<template>
  <div class="h-screen w-full flex items-center">
    <div>
      <h1 class="text-5xl text-dark dark:text-light pb-12">
        {{ $t("currentWork.title") }}
      </h1>
      <div
        class="w-full flex flex-col md:flex-row justify-center md:justify-around items-center py-8"
      >
        <p class="w-full text-justify text-secondary dark:text-light pl-0">
          {{ $t("currentWork.text") }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
