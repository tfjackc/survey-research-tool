<template>
  <div>
        <button id="menu-activator" class="bg-stone-800 text-white font-bold pt-1 px-2 rounded hover:bg-stone-950 text-sm drop-shadow-xl">
          <Icon size="2em" name="iconamoon:menu-burger-horizontal-fill" />
        </button>
    <v-menu activator="#menu-activator">
        <v-list style="background-color: #44403c;">
          <v-list-item>
            <LegacyToolButton />
          </v-list-item>
          <v-list-item>
            <Disclaimer />
          </v-list-item>
          <v-list-item>
            <button
                @click="toggleTheme"
                class="text-white hover:bg-stone-800 rounded-sm font-bold px-4 py-2 text-sm underline underline-offset-8 hover:no-underline flex items-center justify-center">
             DARK / LIGHT THEME
            </button>
          </v-list-item>
        </v-list>
    </v-menu>
  </div>
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
