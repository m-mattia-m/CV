<script lang="ts" setup>
const { locale, setLocale } = useI18n();

const language = computed((): string => locale.value);
const invertedLanguage = computed((): string => {
  if (locale.value === "de") {
    return "en";
  }
  if (locale.value === "en") {
    return "de";
  }
  return "";
});

function invertLanguage() {
  if (locale.value === "en") {
    setLocale("de");
    return;
  }
  if (locale.value === "de") {
    setLocale("en");
    return;
  }
}
</script>

<template>
  <div
    :class="[
      { 'flex-row': language === 'de' },
      { 'flex-row-reverse': language === 'en' },
    ]"
    class="h-12 w-[5.5rem] bg-light dark:bg-secondary flex cursor-pointer"
    @click="invertLanguage"
  >
    <div
      class="h-10 w-10 bg-primary mt-1 ml-1 mr-1 flex justify-center items-center"
    >
      <p class="text-light dark:text-secondary">
        {{ language.toUpperCase() }}
      </p>
    </div>
    <div class="h-10 w-11 mt-1 flex justify-center items-center text-center">
      <p class="text-primary">
        {{ invertedLanguage.toUpperCase() }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
