<script lang="ts" setup>
import Moon from "~/public/icons/moon.svg";
import Sun from "~/public/icons/sun.svg";

const colorMode = useColorMode();

onBeforeMount(() => {
  toggleColorMode(colorMode.value);
});

function toggleColorMode(theme: string) {
  console.log(colorMode.preference);
  colorMode.preference = theme === "dark" ? "light" : "dark";
  console.log(colorMode.preference);
}
</script>

<template>
  <div
    :class="[
      { 'flex-row': colorMode.preference === 'dark' },
      { 'flex-row-reverse': colorMode.preference === 'light' },
    ]"
    class="h-12 w-[5.5rem] bg-light dark:bg-secondary flex cursor-pointer"
    @click="toggleColorMode(colorMode.preference)"
  >
    <div
      class="h-10 w-10 mt-1 ml-1 mr-1 text-light dark:text-secondary bg-primary flex items-center justify-center"
    >
      <component
        :is="colorMode.preference === 'dark' ? Moon : Sun"
        :filled="false"
        class="text-light dark:text-secondary text-2xl text-center mt-1"
      />
    </div>
    <div
      class="h-10 w-10 mt-1 ml-1 mr-1 text-light dark:text-primary flex items-center justify-center"
    >
      <component
        :is="colorMode.preference !== 'dark' ? Moon : Sun"
        :filled="false"
        class="text-primary text-2xl text-center mt-1"
      />
    </div>
  </div>
</template>

<style scoped></style>
