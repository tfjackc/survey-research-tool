<template>
    <v-main class="bg-shades-dark-gray">
    <v-row>
        <v-col cols="4">
          <v-sheet rounded="lg" class="elevation-2">
            <v-list rounded="lg">
              <Search />
              <v-divider class="my-2"></v-divider>
              <LayerList />
            </v-list>
          </v-sheet>
        </v-col>
        <v-col>
          <ClientOnly>
          <Map />
          </ClientOnly>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <TableComponent />
        </v-col>
      </v-row>
    </v-main>
</template>

<script setup lang ="ts">
import { useMappingStore } from "~/store/mapping";
import {storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
const mapping_store = useMappingStore()
const { filteredData, dataLoaded, drawer } = storeToRefs(mapping_store)

onMounted(async() => {
  await mapping_store.initGetData()
})
</script>