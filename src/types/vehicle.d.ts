// Type for Vehicle Types
export type VehicleType = {
  GVWRFrom?: string
  GVWRTo?: string
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

// Type for Manufacturer Types
type ManufacturerType = {
  Name: string
}

// Type for each Manufacturer object in the Results array
type DetailedManufacturer = {
  Address: string
  Address2: string | null
  City: string
  ContactEmail: string | null
  ContactFax: string | null
  ContactPhone: string | null
  Country: string
  DBAs: string | null
  EquipmentItems: any[] // Replace 'any' with a more specific type if available
  LastUpdated: string
  ManufacturerTypes: ManufacturerType[]
  Mfr_CommonName: string | null
  Mfr_ID: number
  Mfr_Name: string
  OtherManufacturerDetails: string | null
  PostalCode: string
  PrimaryProduct: string | null
  PrincipalFirstName: string
  PrincipalLastName: string | null
  PrincipalPosition: string
  StateProvince: string
  SubmittedName: string
  SubmittedOn: string
  SubmittedPosition: string
  VehicleTypes: VehicleType[]
}

// Overall data structure
type DetailedApiResponse = {
  Count: number
  Message: string
  SearchCriteria: null
  Results: DetailedManufacturer[]
}
