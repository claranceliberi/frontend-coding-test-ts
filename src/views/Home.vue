<template>
  <div class="justify-center mt-10">
    <section class="w-full flex items-center justify-center">
      <div class="flex flex-wrap gap-4 px-12">
        <ManufactureCard
          v-for="mfct in manufactures"
          v-bind:key="mfct.Mfr_ID"
          v-bind:manufacturer="mfct"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { getAllManufacturers } from '../services/index'
import { Manufacturer } from '../types/vehicle.d'
import ManufactureCard from '../components/ui/ManufactureCard.vue'
import useToaster from '../composables/toast'

const manufactures = reactive<Manufacturer[]>([])

const { toastSuccess } = useToaster()

onMounted(async () => {
  const res = await getAllManufacturers(1)

  manufactures.push(...res.Results)

  toastSuccess('Data fetched!')
})
</script>
