<script lang="ts" setup></script>

<template>
  <div class="w-full flex items-center">
    <div>
      <h1 class="text-5xl text-dark dark:text-light pb-12">
        {{ $t("privateProjects.title") }}
      </h1>
      <div class="w-full flex flex-col py-8">
        <div v-for="project in $tm('privateProjects.content')" :key="project">
          <h2
            class="text-3xl decoration-1 underline-offset-2 text-dark dark:text-light pt-12 pb-4"
          >
            <NuxtLink :to="project.href">{{ project.title }}</NuxtLink>
          </h2>
          <div class="flex flex-col md:flex-row justify-between">
            <p
              class="w-full md:w-1/2 text-justify text-secondary dark:text-light md:pr-8"
            >
              {{ project.description }}
            </p>
            <img
              :alt="project.title"
              :src="project.imagePath"
              class="w-full md:w-1/2 mt-6 md:mt-0 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
