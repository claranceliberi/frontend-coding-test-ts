// Type for Vehicle Types
export type VehicleType = {
  IsPrimary: boolean
  Name: string
}

// Type for each Result object
export type Manufacturer = {
  Country: string
  Mfr_CommonName: string | null
  Mfr_ID: number
  Mfr_Name: string
  VehicleTypes: VehicleType[]
}

// Overall data structure
export type ApiResponse = {
  Count: number
  Message: string
  SearchCriteria: null
  Results: Manufacturer[]
}
