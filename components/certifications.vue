<script lang="ts" setup>
function isSet(parameter?: string): boolean {
  if (parameter == undefined) return false;
  if (parameter == null) return false;
  if (parameter == "") return false;

  return true;
}
</script>

<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <h1 class="text-5xl text-dark dark:text-light pb-12 mt-64 hyphens-auto break-words">
        {{ $t("certifications.title") }}
      </h1>
      <div
        class="w-full flex flex-col justify-center md:justify-around items-center text-dark dark:text-light"
      >
        <div
          v-for="certification in $tm('certifications.content')"
          class="flex flex-col md:flex-col h-full mb-16"
        >
          <h2 class="text-3xl mb-4">{{ certification.title }}</h2>
          <div class="flex flex-col md:flex-row h-full justify-between">
            <div
              class="w-full h-full md:w-1/2 md:mr-8 flex items-center justify-center"
            >
              <template
                v-if="
                  certification.images.length == 0 ||
                  certification.images.length == 1
                "
              >
                <img
                  :alt="certification.title"
                  :src="certification.images[0]"
                  class="w-full object-contain"
                />
              </template>

              <Carousel
                v-else
                :autoplay="4000"
                :wrap-around="true"
                class="w-full"
              >
                <Slide
                  v-for="(image, index) in certification.images"
                  :key="index"
                >
                  <img
                    :alt="certification.title"
                    :src="image"
                    class="w-full object-contain"
                  />
                </Slide>
                <template #addons>
                  <Navigation />
                  <Pagination />
                </template>
              </Carousel>
            </div>
            <div class="w-full md:w-1/2">
              <p class="mb-4">{{ certification.description }}</p>
              <p v-if="isSet(certification.issueDate)" class="mb-1">
                {{ $t("certifications.issuedLabel") }}:
                {{ certification.issueDate }}
              </p>
              <p v-if="isSet(certification.credentialId)" class="mb-4">
                {{ $t("certifications.credentialIdLabel") }}:
                {{ certification.credentialId }}
              </p>
              <ul
                v-if="isSet(certification.verifyUrl)"
                class="w-full list-disc text-base underline underline-offset-2"
              >
                <li class="w-full list-['\25A1'] -indent-2.5 ml-2.5 pl-3 my-1">
                  <NuxtLink
                    :to="certification.verifyUrl"
                    class="pl-2"
                    target="_blank"
                    >{{ $t("certifications.verifyLabel") }}</NuxtLink
                  >
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
