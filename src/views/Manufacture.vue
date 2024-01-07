<template>
  <div>
    <h1 class="text-2xl py-6 font-bold">Manufacturer Details</h1>
    <div>
      <div
        v-for="manufacturer in details"
        v-bind:key="manufacturer.Mfr_ID"
        class="manufacturer"
      >
        <h2>{{ manufacturer.Mfr_Name }} (ID: {{ manufacturer.Mfr_ID }})</h2>
        <p>
          <strong>Address:</strong> {{ manufacturer.Address }},
          {{ manufacturer.City }}, {{ manufacturer.StateProvince }},
          {{ manufacturer.Country }} - {{ manufacturer.PostalCode }}
        </p>
        <p v-if="manufacturer.ContactEmail">
          <strong>Email:</strong> {{ manufacturer.ContactEmail }}
        </p>
        <p v-if="manufacturer.ContactPhone">
          <strong>Phone:</strong> {{ manufacturer.ContactPhone }}
        </p>
        <p v-if="manufacturer.DBAs">
          <strong>Doing Business As:</strong> {{ manufacturer.DBAs }}
        </p>
        <p>
          <strong>Principal:</strong> {{ manufacturer.PrincipalFirstName }} ({{
            manufacturer.PrincipalPosition
          }})
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import { DetailedManufacturer } from '../types/vehicle.d'
import { getManufacturerDetails } from '../services/index'

const route = useRoute()
const details = ref<DetailedManufacturer[]>()

const $toast = useToast()

onMounted(async () => {
  const res = await getManufacturerDetails(+route.params.id)

  if (res.length === 0) {
    const instance = $toast.error('No data found!', {
      position: 'top-right',
    })
    setTimeout(() => {
      instance.dismiss()
    }, 3000)
  } else {
    details.value = res

    const instance = $toast.success('Manufacture Details fetched!', {
      position: 'top-right',
    })

    setTimeout(() => {
      instance.dismiss()
    }, 3000)
  }
})
</script>
