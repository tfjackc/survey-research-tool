<template>
  <header class="flex items-center justify-between p-4 shadow-md h-24"
          :class="{ 'bg-stone-800': theme.global.current.value.dark, 'bg-stone-700': !theme.global.current.value.dark }">
    <div class="flex items-center space-x-4">
      <NuxtImg src="/cc_logo.png" height="90" class="pt-2"/>
      <h2 class="text-2xl font-bold text-stone-50"
         >Survey Research Tool</h2>
      <v-btn href="https://geo.co.crook.or.us/surveys_legacy/" color="primary" size="small" variant="elevated">Legacy Survey Search Tool</v-btn>
    </div>
    <div class="flex items-center space-x-4">
      <Disclaimer />
      <v-btn variant="elevated"
             color="success"
             size="small"
             @click="toggleTheme"
             class="mr-5">
        <v-icon>mdi-theme-light-dark</v-icon>
        DARK/LIGHT
      </v-btn>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';
const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
