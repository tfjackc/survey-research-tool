<template>
  <div class="tablediv">
    <v-fade-transition>
      <v-data-table
        items-per-page="5"
        :items="filteredData"
        :headers="headers"
        class="elevation-10"
        :hover=true
        item-key="cs"
      >
        <template v-slot:[`item.image`]="{ value }">
          <a :href="`${value}`">
            {{ value }}
          </a>
        </template>
      </v-data-table>
    </v-fade-transition>
  </div>
</template>

<script setup lang="ts">
import { useMappingStore } from "@/store/mapping";
import { storeToRefs } from "pinia";
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
    {title: 'Link', key: 'image', align: 'center'},
  ]
</script>
