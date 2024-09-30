<script lang="ts" setup></script>

<template>
  <div class="h-screen w-full flex items-center">
    <div>
      <h1 class="text-5xl text-dark dark:text-light pb-12">
        {{ $t("hobbies.title") }}
      </h1>
      <div
        class="w-full flex flex-col md:flex-row md:justify-between justify-start md:items-center"
      >
        <ul class="list-disc py-8">
          <li
            v-for="hobby in $tm('hobbies.list')"
            :key="hobby"
            class="list-item list-['\25A1'] list-inside marker:text-dark dark:marker:text-light"
          >
            <span class="pl-4 text-dark dark:text-light">{{ $rt(hobby) }}</span>
          </li>
        </ul>
        <Carousel :autoplay="4000" :wrap-around="true" class="w-full md:w-1/2">
          <Slide key="image-snowboarding">
            <img
              alt="snowboarding"
              class="object-fill"
              src="/images/snowboarding.png"
            />
          </Slide>
          <!-- Credits: Safar Safarov @ Unsplash - https://unsplash.com/de/fotos/eingeschaltetes-macbook-pro-LKsHwgzyk7c -->
          <Slide key="image-coding">
            <img alt="coding" class="object-fill" src="/images/coding.jpg" />
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<style>
/* this classes are for the carousel*/
.carousel__prev,
.carousel__next {
  @apply text-white;
  @apply active:text-white;
  @apply hover:text-white;
}
</style>
