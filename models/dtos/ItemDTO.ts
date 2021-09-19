export default interface ItemDTO {
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string,
    free_shipping: boolean
}

interface Price {
    currency: string,
    amount: number,
    decimals: number
}