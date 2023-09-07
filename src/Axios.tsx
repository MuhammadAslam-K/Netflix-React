import axios from "axios"
import { baseUrl } from './constants/constants'

const Instance = axios.create({
    baseURL: baseUrl
})

export default Instance