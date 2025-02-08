<script lang="ts" setup>
import type { Ref } from "vue";
import { MinusIcon, PlusIcon } from "@heroicons/vue/24/outline";

const { t, tm, rt } = useI18n({
  useScope: "local",
});

const openSkillIndex: Ref<number> = ref(-1);

function toggleSkillState(index: number) {
  if (openSkillIndex.value === index) return (openSkillIndex.value = -1);
  openSkillIndex.value = index;
}

const skills: Ref<skill[]> = ref(tm("skills.content"));
const filters: Ref<string[] | undefined> = ref(
  skills.value
    .map((skill) => skill.tags)
    .flat()
    .filter((tag, index, array) => array.indexOf(tag) === index)
    .sort((a, b) => b.length - a.length),
);

const activeFilters: Ref<Map<string, boolean>> = ref(
  new Map<string, boolean>(),
);

function updateFilter(filterKey: string): void {
  if (activeFilters.value.has(filterKey)) {
    activeFilters.value.delete(filterKey);
  } else {
    activeFilters.value.set(filterKey, true);
  }
}

function filterSkills(): void {
  let allSkills = tm("skills.content") as skill[];
  if (activeFilters.value.size !== 0) {
    const activeFilterKeys = Array.from(activeFilters.value.keys());
    allSkills = allSkills.filter((skill) =>
      activeFilterKeys.every((filter) => skill.tags.includes(filter)),
    );
  }
  skills.value = allSkills;
}

interface skill {
  title: string;
  tags: string[];
  description: string;
}
</script>

<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <h1 class="text-5xl text-dark dark:text-light pb-12">
        {{ $t("skills.title") }}
      </h1>
      <ul
        class="scrollbar overflow-hidden overflow-x-auto box-content w-full grid grid-flow-col-dense gap-1 pb-4"
      >
        <li
          v-for="filter in filters"
          :class="[
            activeFilters.get(filter)
              ? 'bg-primary text-white'
              : 'bg-white text-primary',
          ]"
          class="w-fit cursor-pointer flex justify-center rounded-full py-1 px-2 whitespace-nowrap text-xs"
          @click="
            updateFilter(filter);
            filterSkills();
          "
        >
          {{ filter }}
        </li>
      </ul>
      <div
        class="w-full flex flex-col justify-between items-start text-dark dark:text-light"
      >
        <!-- for desktop -->
        <ul class="w-full list-disc py-2 hidden lg:block">
          <li
            v-for="(skill, index) in skills"
            class="w-full list-['\25A1'] list-inside my-1"
          >
            <!-- TODO: Skill list has a wrong styling on iPad but if I add md:/xl: the styling for desktop is wrong  -->
            <div
              class="ml-6 -mt-[25px] grid grid-cols-10 grid-flow-col h-8 cursor-pointer"
              @click="toggleSkillState(index)"
            >
              <p class="col-span-4 text-lg">{{ skill.title }}</p>
              <p class="col-span-5 text-sm flex flex-row justify-end">
                <span v-for="(tag, index) in skill.tags" class="flex flex-row">
                  <span v-if="index !== 0" class="pr-2">, </span>
                  <span>{{ tag }}</span>
                </span>
              </p>
              <div class="col-span-1 flex justify-end items-center">
                <PlusIcon
                  v-if="openSkillIndex !== index"
                  class="w-5 h-5 text-dark dark:text-light"
                />
                <MinusIcon
                  v-if="openSkillIndex === index"
                  class="w-5 h-5 text-dark dark:text-light"
                />
              </div>
            </div>
            <div
              v-if="openSkillIndex === index"
              class="text-justify ml-6 grid grid-cols-10 grid-flow-col my-8 text-base"
            >
              <p class="col-span-9">{{ skill.description }}</p>
            </div>
          </li>
        </ul>

        <!-- for mobile -->
        <ul class="w-full py-2 block lg:hidden">
          <li
            v-for="(skill, index) in skills"
            class="w-full py-4 list-none border-b-[0.5px] border-dark dark:border-light"
          >
            <div class="cursor-pointer" @click="toggleSkillState(index)">
              <div class="flex flex-row justify-between">
                <p class="text-lg">{{ skill.title }}</p>
                <div class="flex justify-end items-center">
                  <PlusIcon
                    v-if="openSkillIndex !== index"
                    class="w-5 h-5 text-dark dark:text-light"
                  />
                  <MinusIcon
                    v-if="openSkillIndex === index"
                    class="w-5 h-5 text-dark dark:text-light"
                  />
                </div>
              </div>
              <p class="text-sm flex flex-row">
                <template v-for="(tag, index) in skill.tags" class="">
                  <template v-if="index !== 0" class="pr-2">,</template>
                  {{ tag }}
                </template>
              </p>
              <p
                v-if="openSkillIndex === index"
                class="text-justify mt-8 mb-4 text-base"
              >
                {{ skill.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styling the scrollbar */
::-webkit-scrollbar {
  height: 2px;
}

/* Track (background of the scrollbar) */
::-webkit-scrollbar-track {
  @apply bg-transparent;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  @apply bg-primary;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-primary;
}

/* Firefox-specific scrollbar styling */
* {
  scrollbar-width: none; /* thin */
  /* TODO: replace with the primary color from tailwind */
  scrollbar-color: #0b4f6c transparent;
}
</style>
