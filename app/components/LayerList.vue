<template>
  <div id="layer-list">
  <v-list-item>
    <div class="font-thin italic text-2xl">Map Layers</div>
  </v-list-item>
  <v-list-item>
    <v-checkbox
      class="top-box"
      :class="{ 'text-stone-50': theme.global.current.value.dark, 'text-stone-900': !theme.global.current.value.dark }"
      :model-value="surveyLayerCheckbox"
      label="Survey Boundaries"
      @change="mapping_store.surveyLayerCheck($event)"
    ></v-checkbox>
  </v-list-item>
  <v-list-item>
    <v-checkbox
      class="middle-box"
      v-if="returnCount > 0"
      :model-value="searchedLayerCheckbox"
      label="Search Results"
      @change="mapping_store.searchedLayerCheck($event)"
    ></v-checkbox>
  </v-list-item>
    <v-list-item>
      <v-checkbox
      class="middle-box"
      v-if="addressCount > 0"
      :model-value="addressGraphicsLayerCheckbox"
      label="Address Points"
      @change="mapping_store.addressGraphicsLayerCheck($event)"
      ></v-checkbox>
    </v-list-item>
    <v-list-item>
      <v-checkbox
          class="middle-box"
          v-if="taxlotCount > 0"
          :model-value="maptaxlotGraphicsLayerCheckbox"
          label="Map Tax Lots"
          @change="mapping_store.maptaxlotGraphicsLayerCheck($event)"
      ></v-checkbox>
    </v-list-item>
  </div>
</template>

<script setup lang="ts">
import { useMappingStore } from "~~/app/store/mapping";
import { storeToRefs } from "pinia";
import { useTheme } from 'vuetify';
const theme = useTheme()
const mapping_store = useMappingStore()
const {
  returnCount,
  addressCount,
  taxlotCount,
  surveyLayerCheckbox,
  searchedLayerCheckbox,
  addressGraphicsLayerCheckbox,
  maptaxlotGraphicsLayerCheckbox
} = storeToRefs(mapping_store)
</script>
