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
      <div class="lg:col-span-3 h-96 lg:h-full lg:min-h-screen"> <!-- Adjust height as needed -->
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
import { onMounted } from "vue";
const mapping_store = useMappingStore()
onMounted(async() => {
  await mapping_store.initGetData()
})
</script>