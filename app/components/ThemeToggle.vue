<template>
  <button
         @click="toggleTheme"
         class="bg-green-500 text-white px-2 py-1.5 rounded hover:bg-blue-700 text-sm">
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