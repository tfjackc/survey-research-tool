<template>
  <header class="flex items-center justify-between p-4 drop-shadow-xl shadow-md h-24"
          :class="{ 'bg-stone-800': theme.global.current.value.dark, 'bg-stone-700': !theme.global.current.value.dark }">
    <div class="flex items-center space-x-4">
      <v-img width="90" cover src="/cc_logo.png" class="pt-2 mt-2"></v-img>
      <h2 class="text-2xl font-bold text-stone-50"
         >Survey Research Tool</h2>
    </div>
    <div class="hidden sm:flex items-center space-x-4">
      <LegacyToolButton />
    <div class="flex items-center space-x-4">
      <Disclaimer />
      <ThemeToggle />
    </div>
    </div>
    <div class="sm:flex sm:hidden">
      <SmallScreenMenu />
    </div>

  </header>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';
import ThemeToggle from "~/components/ThemeToggle.vue";
import LegacyToolButton from "~/components/LegacyToolButton.vue";
const theme = useTheme();
</script>

<style scoped>
</style>
