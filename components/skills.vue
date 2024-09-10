<script lang="ts" setup>
import type { Ref } from "vue";
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/outline";

const openSkillIndex: Ref<number> = ref(-1);

function toggleSkillState(index: number) {
  if (openSkillIndex.value === index) return (openSkillIndex.value = -1);
  openSkillIndex.value = index;
}
</script>

<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <h1 class="text-5xl text-dark dark:text-light pb-12">
        {{ $t("skills.title") }}
      </h1>
      <div
        class="w-full flex flex-col justify-between items-start text-dark dark:text-white"
      >
        <ul class="w-full list-disc py-2 hidden lg:block">
          <li
            v-for="(skill, index) in $tm('skills.content')"
            class="w-full list-['\25A1'] list-inside my-1"
          >
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
                  class="w-5 h-5 text-dark dark:text-white"
                />
                <MinusIcon
                  v-if="openSkillIndex === index"
                  class="w-5 h-5 text-dark dark:text-white"
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

        <ul class="w-full py-2 block lg:hidden">
          <li
            v-for="(skill, index) in $tm('skills.content')"
            class="w-full my-1 list-none"
          >
            <div class="cursor-pointer" @click="toggleSkillState(index)">
              <div class="flex flex-row justify-between">
                <p class="text-lg">{{ skill.title }}</p>
                <div class="flex justify-end items-center">
                  <PlusIcon
                    v-if="openSkillIndex !== index"
                    class="w-5 h-5 text-dark dark:text-white"
                  />
                  <MinusIcon
                    v-if="openSkillIndex === index"
                    class="w-5 h-5 text-dark dark:text-white"
                  />
                </div>
              </div>
              <p class="text-sm flex flex-row">
                <template v-for="(tag, index) in skill.tags" class="">
                  <template v-if="index !== 0" class="pr-2">, </template>
                  {{ tag }}
                </template>
              </p>
              <p
                v-if="openSkillIndex === index"
                class="text-justify my-8 text-base"
              >
                {{ skill.description }}
              </p>
            </div>

            <!--            <div-->
            <!--              class="ml-6 -mt-[25px] flex flex-row justify-between h-8 cursor-pointer"-->
            <!--              @click="toggleSkillState(index)"-->
            <!--            >-->
            <!--              <p class="col-span-4 text-lg">{{ skill.title }}</p>-->
            <!--              <div class="col-span-1 flex justify-end items-center">-->
            <!--                <PlusIcon-->
            <!--                  v-if="openSkillIndex !== index"-->
            <!--                  class="w-5 h-5 text-dark dark:text-white"-->
            <!--                />-->
            <!--                <MinusIcon-->
            <!--                  v-if="openSkillIndex === index"-->
            <!--                  class="w-5 h-5 text-dark dark:text-white"-->
            <!--                />-->
            <!--              </div>-->
            <!--            </div>-->
            <!--            <p class="text-sm flex flex-row ml-6">-->
            <!--              <span v-for="(tag, index) in skill.tags" class="flex flex-row">-->
            <!--                <span v-if="index !== 0" class="pr-2">, </span>-->
            <!--                <span>{{ tag }}</span>-->
            <!--              </span>-->
            <!--            </p>-->
            <!--            <p-->
            <!--              v-if="openSkillIndex === index"-->
            <!--              class="text-justify ml-6 mr-[84px] my-8 text-base"-->
            <!--            >-->
            <!--              {{ skill.description }}-->
            <!--            </p>-->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
