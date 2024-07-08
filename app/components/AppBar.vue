<template>
<v-app style="height: 92px;">
  <v-app-bar flat height="92"
             class="elevation-2">
    <v-icon size="80">
      <NuxtImg src="/cc_logo.png" height="80"></NuxtImg>
    </v-icon>
    <h2 class="text-2xl font-bold">Survey Research Tool</h2>
    <v-btn href="https://geo.co.crook.or.us/surveys_legacy/" color="primary" size="small" variant="elevated">Legacy Survey Search Tool</v-btn>

    <v-spacer></v-spacer>

    <Disclaimer />
    <v-btn variant="elevated"
           color="success"
           size="small"
           @click="toggleTheme"
           class="mr-5">
      <v-icon>mdi-theme-light-dark</v-icon>
      DARK/LIGHT
    </v-btn>
  </v-app-bar>
</v-app>
</template>
<script lang="ts" setup>
import { useTheme } from 'vuetify';

const theme = useTheme()
function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>