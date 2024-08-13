<template>
  <button
         @click="toggleTheme"
         class="bg-stone-800 text-white font-bold py-2 px-2 rounded hover:bg-stone-950 text-sm drop-shadow-xl">
    <v-icon>mdi-theme-light-dark</v-icon>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';
const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<style scoped>

</style>