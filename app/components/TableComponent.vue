<template>
  <div class="tablediv">
    <v-fade-transition>
      <v-data-table
        @click:row="rowClick"
        items-per-page="5"
        :items="filteredData"
        :headers="headers"
        :hover=true
        item-key="cs"
        @mouseover:row="linkTableToMap"
        @mouseleave:row="clearHighlight"
      >
      </v-data-table>
    </v-fade-transition>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import {useMappingStore} from "~~/app/store/mapping";
const mapping_store = useMappingStore()
const { filteredData } = storeToRefs(mapping_store)

const headers: [] | any =
  [
    {title: 'Survey', key: 'cs', align: 'center'},
    {title: 'TRS', key: 'trsqq', align: 'center'},
    {title: 'Year', key: 'rec_y', align: 'center'},
    {title: 'Partition Plat', key: 'pp', align: 'center'},
    {title: 'Prepared For', key: 'prepared_for', align: 'center'},
    {title: 'Property By', key: 'prepared_by', align: 'center'},
    {title: 'Subdivision', key: 'subdivision', align: 'center'},
    {title: 'Type', key: 'type', align: 'center'},
    {title: 'Description', key: 'identification', align: 'center'},
    // {title: 'Link', key: 'image', align: 'center'},
  ]

function rowClick(item: any, row: any) {
  // Access the image value
  const imageValue = row.internalItem.image || row.item.image;
  console.log("Image URL:", imageValue);
  if (imageValue) {
    window.open(imageValue, '_blank');
  }
}

async function linkTableToMap(item: any, row: any) {
  const cs = row.internalItem.cs || row.item.cs;
  await mapping_store.highlightFeature(cs);
}

async function clearHighlight() {
  await mapping_store.clearHighlight();
}
</script>

<style scoped>
</style>