<script lang="ts" setup></script>

<template>
  <div class="w-full flex items-center">
    <div>
      <h1 class="text-5xl text-dark dark:text-light pb-12 mt-64">
        {{ $t("awards.title") }}
      </h1>
      <div
        class="w-full flex flex-col justify-center md:justify-around items-center py-8 text-dark dark:text-white"
      >
        <div
          v-for="award in $tm('awards.content')"
          class="flex flex-col md:flex-col h-full mb-16"
        >
          <h2 class="text-3xl mb-4">{{ award.title }}</h2>
          <div class="flex flex-col md:flex-row h-full">
            <div
              class="w-full h-full md:w-1/2 md:mr-8 flex items-center justify-center"
            >
              <Carousel :autoplay="4000" :wrap-around="true" class="w-full">
                <Slide v-for="(image, index) in award.images" :key="index">
                  <img :alt="award.name" :src="image" class="object-fill" />
                </Slide>
                <template #addons>
                  <Navigation />
                  <Pagination />
                </template>
              </Carousel>
            </div>
            <div class="w-full md:w-1/2">
              <p class="mb-4">{{ award.description }}</p>
              <ul
                class="w-full list-disc text-base underline underline-offset-2"
              >
                <li
                  v-for="mention in award.mentions"
                  class="w-full list-['\25A1'] -indent-2.5 ml-2.5 pl-3 my-1"
                >
                  <NuxtLink :to="mention.url" class="pl-2" target="_blank">{{
                    mention.title
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* this classes are for the carousel*/
.carousel__prev,
.carousel__next {
  @apply text-white;
  @apply active:text-white;
  @apply hover:text-white;
}
</style>
