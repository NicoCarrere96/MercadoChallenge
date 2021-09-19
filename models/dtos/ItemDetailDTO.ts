import ItemDTO from "./ItemDTO";

export interface ItemDetailDTO extends ItemDTO {
    sold_quantity: number,
    description: string
}