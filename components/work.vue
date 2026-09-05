<script lang="ts" setup></script>

<template>
  <div class="w-full flex items-center">
    <div>
      <h1 class="text-5xl text-dark dark:text-light pb-12 mt-64">
        {{ $t("work.title") }}
      </h1>
      <div class="w-full flex flex-col">
        <div
          v-for="job in $tm('work.content')"
          :key="job"
          class="flex flex-col md:flex-col h-full mb-16"
        >
          <h2 class="text-3xl text-dark dark:text-light pb-2">
            {{ job.title }}
          </h2>
          <p class="text-lg text-secondary dark:text-tertiary mb-1">
            {{ job.position }}
          </p>
          <p class="text-sm text-secondary dark:text-light mb-4">
            {{ job.startDate }} - {{ job.endDate }}
          </p>
          <p class="w-full text-justify text-secondary dark:text-light">
            {{ job.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
