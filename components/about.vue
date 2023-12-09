<script lang="ts" setup></script>

<template>
  <div
    class="h-screen w-full flex flex-col-reverse md:flex-row justify-end md:justify-around items-center"
  >
    <img
      :alt="$t('name')"
      class="py-8 w-full md:w-1/2 lg:w-4/12"
      src="/images/profile_cut.jpeg"
    />
    <div class="flex justify-center w-full md:ml-8 pt-8 md:pt-0">
      <p class="w-full text-justify text-secondary dark:text-light pl-0">
        {{ $t("about") }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
