<!--<template>-->
<!--    <v-main class="bg-shades-dark-gray">-->
<!--    <v-row>-->
<!--        <v-col cols="4">-->
<!--          <v-sheet rounded="lg" class="elevation-2">-->
<!--            <v-list rounded="lg">-->
<!--              <Search />-->
<!--              <v-divider class="my-2"></v-divider>-->
<!--              <LayerList />-->
<!--            </v-list>-->
<!--          </v-sheet>-->
<!--        </v-col>-->
<!--        <v-col>-->
<!--          <ClientOnly>-->
<!--          <Map />-->
<!--          </ClientOnly>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--      <v-row>-->
<!--        <v-col>-->
<!--          <TableComponent />-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </v-main>-->
<!--</template>-->
<template>
  <v-main class="bg-shades-dark-gray min-h-screen p-4">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div class="lg:col-span-1">
        <div class="rounded-lg p-4">
          <Search />
          <hr class="my-2 border-gray-300" />
          <LayerList />
        </div>
      </div>
      <div class="lg:col-span-3">
        <ClientOnly>
          <Map />
        </ClientOnly>
      </div>
    </div>
    <div class="mt-4">
      <TableComponent />
    </div>
  </v-main>
</template>

<script setup lang ="ts">
import { useMappingStore } from "~/store/mapping";
import { onMounted, ref } from "vue";
const mapping_store = useMappingStore()
onMounted(async() => {
  await mapping_store.initGetData()
})
</script>