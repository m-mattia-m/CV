<script lang="ts" setup></script>

<template>
  <div class="h-screen w-full flex items-center">
    <div class="w-full">
      <h1 class="text-5xl text-dark dark:text-light pb-12">
        {{ $t("skills.title") }}
      </h1>
      <div class="w-full flex md:flex-row justify-between items-start">
        <div class="w-full h-full flex flex-col justify-start items-start">
          <h2 class="text-3xl text-dark dark:text-light pt-2">
            {{ $t("skills.content.programmingLanguages.main.title") }}
          </h2>
          <ul class="list-disc py-2">
            <li
              v-for="item in $tm(
                'skills.content.programmingLanguages.main.list',
              )"
              :key="item"
              class="list-item list-['\25fb'] list-inside marker:text-dark dark:marker:text-light"
            >
              <span class="pl-4 text-dark dark:text-light">{{
                $rt(item)
              }}</span>
            </li>
          </ul>
          <h2 class="text-3xl text-dark dark:text-light pt-2">
            {{ $t("skills.content.programmingLanguages.besides.title") }}
          </h2>
          <ul class="list-disc py-2">
            <li
              v-for="item in $tm(
                'skills.content.programmingLanguages.besides.list',
              )"
              :key="item"
              class="list-item list-['\25fb'] list-inside marker:text-dark dark:marker:text-light"
            >
              <span class="pl-4 text-dark dark:text-light">{{
                $rt(item)
              }}</span>
            </li>
          </ul>
        </div>
        <div
          class="w-full h-full md:ml-6 flex flex-col justify-start items-start"
        >
          <h2 class="text-3xl text-dark dark:text-light pt-2">
            {{ $t("skills.content.devops.title") }}
          </h2>
          <ul class="list-disc py-2">
            <li
              v-for="item in $tm('skills.content.devops.list')"
              :key="item"
              class="list-item list-['\25fb'] list-inside marker:text-dark dark:marker:text-light"
            >
              <span class="pl-4 text-dark dark:text-light">{{
                $rt(item)
              }}</span>
            </li>
          </ul>
        </div>
        <div
          class="w-full h-full md:ml-6 flex flex-col justify-start items-start"
        >
          <h2 class="text-3xl text-dark dark:text-light pt-2">
            {{ $t("skills.content.more.title") }}
          </h2>
          <ul class="list-disc py-2">
            <li
              v-for="item in $tm('skills.content.more.list')"
              :key="item"
              class="list-item list-['\25fb'] list-inside marker:text-dark dark:marker:text-light"
            >
              <span class="pl-4 text-dark dark:text-light">{{
                $rt(item)
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
