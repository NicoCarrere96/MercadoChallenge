import { MeliSearchResponse, Result, Description } from '../models/responses/MeliResponse';
import axios from 'axios';


const MELI_API = 'https://api.mercadolibre.com'

export const searchItemsByQuery = async (query: string) =>{
    const limit = 4
    const url = `${MELI_API}/sites/MLA/search?q=${encodeURI(query)}&limit=${limit}`
    const response = await axios.get<MeliSearchResponse>(url)
    return response.data
}

export const findItemById = async (id: string) =>{
    const url = `${MELI_API}/items/${id}`
    const response = await axios.get<Result>(url);
    return response.data
}

export const findItemDescriptionById = async (id: string) =>{
    const url = `${MELI_API}/items/${id}/description`
    const response = await axios.get<Description>(url);
    return response.data
}