import AuthorDTO from "../models/dtos/AuthorDTO"
import ItemDTO from "../models/dtos/ItemDTO"
import { MeliSearchResponse, Result, Description, AvailableFilter } from "../models/responses/MeliResponse"
import SearchResponse from "../models/responses/SearchResponse"


const author: AuthorDTO = {
    name: "Nicolás",
    lastName: "Carrere"
}
export const mapToSearchResponse = (data: MeliSearchResponse): SearchResponse => {
    const items: ItemDTO[] = data.results.map(item => parseResult(item))
    return {
        author,
        categories: [],
        items
    }
}

export const mapToItemResponse = (item: Result, description: Description) => {
    return {
        author,
        item: {...parseResult(item), description: description.plain_text ?? ''}
    }
  }
  
const parseResult = (item: Result): ItemDTO => {
    return {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: parseInt(item.price.toFixed()),
            decimals: parseFloat((item.price % 1).toFixed(2)) * 100
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity
    } as ItemDTO
}