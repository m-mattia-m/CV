<template>
  <div class="w-full h-full font scroll-smooth focus:scroll-auto">
    <NuxtPage />
  </div>
</template>

<style scoped>
@font-face {
  font-family: "IBM-3270";
  src: url(/assets/fonts/IBM-3270/3270-Regular.ttf) format("truetype");
}

.font {
  font-family: "IBM-3270", serif;
  white-space: pre-line;
}

::-moz-selection {
  background-color: #ba9eb0;
  color: #ffffff;
}

::selection {
  background-color: #ba9eb0;
  color: #ffffff;
}
</style>
