<template>
  <v-btn variant="elevated"
         color="success"
         size="small"
         @click="toggleTheme"
         class="mr-5">
    <v-icon>mdi-theme-light-dark</v-icon>
  </v-btn>
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