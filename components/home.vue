<script lang="ts" setup>
import LinkedIn from "~/public/icons/linkedin.svg";
import Github from "~/public/icons/github.svg";
import Darkmode from "~/components/molecules/darkmode.vue";
import Language from "~/components/molecules/language.vue";
</script>

<template>
  <div class="h-screen bg-primary">
    <div class="h-4/6 flex items-end">
      <div class="flex flex-col w-full justify-center items-center">
        <h1
          class="w-full text-7xl text-center uppercase text-light dark:text-dark"
        >
          <!--          <span-->
          <!--            class="md:before:block md:before:absolute md:before:-inset-1 md:before:-skew-y-3 md:before:bg-dark dark:md:before:bg-light md:relative md:inline-block"-->
          <!--          >-->
          <span class="relative">{{ $t("name") }}</span>
          <!--          </span>-->
        </h1>
        <div class="flex flex-row w-36 justify-between mt-12">
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
    <div class="h-2/6 flex items-end flex-row justify-between p-4">
      <language />
      <darkmode />
    </div>
  </div>
</template>

<style scoped></style>
