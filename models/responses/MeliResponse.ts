export interface MeliSearchResponse {
    results: Result[],    
    available_filters: AvailableFilter[]
}

export interface Result{
    id: string,
    title: string,
    price: number,
    currency_id: string,
    shipping: Shipping,
    address: Address,
    thumbnail: string,
    condition: string,
    sold_quantity: number,
}

interface Address {
    state_name: string,
    city_name: string
}

interface Shipping{
    free_shipping: boolean
}

export interface Description {
    text: string,
    plain_text: string
}

export interface AvailableFilter {
    id: string,
    values: FilterValue[]
}

interface FilterValue {
    name: string,
    results: number
}

