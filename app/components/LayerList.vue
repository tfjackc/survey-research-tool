<template>
  <div id="layer-list">
  <v-list-item>
    <div class="font-thin italic text-2xl">Map Layers</div>
  </v-list-item>
  <v-list-item>
    <div class="flex flex-row items-center">
    <v-checkbox
      class="top-box"
      :class="{ 'text-stone-50': theme.global.current.value.dark, 'text-stone-900': !theme.global.current.value.dark }"
      :model-value="surveyLayerCheckbox"
      label="Survey Boundaries"
      @change="mapping_store.surveyLayerCheck($event)"
    ></v-checkbox>
      <v-tooltip text="Layer consisting of all surveys in Crook County">
        <template v-slot:activator="{ props }">
        <Icon v-bind="props" name="mdi:tooltip-text-outline" class="text-2xl text-gray-400 ml-5"/>
        </template>
      </v-tooltip>
    </div>
  </v-list-item>
  <v-list-item>
    <div class="flex flex-row items-center">
    <v-checkbox
      class="middle-box"
      v-if="returnCount > 0"
      :model-value="searchedLayerCheckbox"
      label="Search Results"
      @change="mapping_store.searchedLayerCheck($event)"
    ></v-checkbox>
      <v-tooltip  v-if="returnCount > 0" text="Survey's returned based on search parameters">
        <template v-slot:activator="{ props }">
          <Icon v-bind="props" name="mdi:tooltip-text-outline" class="text-2xl text-gray-400 ml-5"/>
        </template>
      </v-tooltip>
    </div>
  </v-list-item>
    <v-list-item>
      <div class="flex flex-row">
      <v-checkbox
      class="middle-box"
      v-if="addressCount > 0"
      :model-value="addressGraphicsLayerCheckbox"
      label="Address Points"
      @change="mapping_store.addressGraphicsLayerCheck($event)"
      ></v-checkbox>
      </div>
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
