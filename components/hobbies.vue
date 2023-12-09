<script lang="ts" setup></script>

<template>
  <div class="h-screen w-full">
    <ul v-for="paragraph in $tm('hobbies')" :key="paragraph" class="list-disc">
      <li class="list-item list-['◻'] list-inside">
        <span class="pl-8">{{ $rt(paragraph) }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
