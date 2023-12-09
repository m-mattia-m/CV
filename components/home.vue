<script lang="ts" setup>
import LinkedIn from "~/public/icons/linkedin.svg";
import Github from "~/public/icons/github.svg";
</script>

<template>
  <div class="h-screen bg-primary">
    <div class="h-4/6 flex items-end">
      <div class="flex flex-col w-full justify-center items-center">
        <h1
          class="w-full text-7xl text-center uppercase text-light dark:text-dark"
        >
          {{ $t("name") }}
        </h1>
        <div class="flex flex-row w-4/12 justify-between mt-12">
          <NuxtLink
            class="cursor-pointer"
            target="_blank"
            to="https://www.linkedin.com/in/mattia-mueggler"
          >
            <LinkedIn
              :filled="false"
              alt="linkedin"
              class="text-light dark:text-dark text-5xl"
            />
          </NuxtLink>
          <NuxtLink
            class="cursor-pointer"
            target="_blank"
            to="https://github.com/m-mattia-m"
          >
            <Github
              :filled="false"
              alt="Github"
              class="text-light dark:text-dark text-5xl"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="h-2/6 flex items-end flex-row justify-between p-mobile md:p-tablet lg:p-desktop">
      <language />
      <darkmode />
    </div>
  </div>
</template>

<style scoped></style>
