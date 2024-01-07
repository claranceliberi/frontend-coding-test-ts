import axios from 'axios'
import { ApiResponse, DetailedApiResponse } from '../types/vehicle.d'

const API_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles'

export const getAllManufacturers = async (page: number) => {
  const response = await axios.get<ApiResponse>(
    `${API_URL}/getallmanufacturers?format=json&page=${page}`,
  )
  return response.data
}

export const getManufacturerDetails = async (id: number) => {
  const response = await axios.get<DetailedApiResponse>(
    `${API_URL}/getmanufacturerdetails/${id}?format=json`,
  )
  return response.data.Results
}
