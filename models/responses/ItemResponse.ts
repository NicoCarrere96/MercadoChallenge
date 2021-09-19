import AuthorDTO from "../dtos/AuthorDTO";
import { ItemDetailDTO } from "../dtos/ItemDetailDTO";

export interface ItemResponse {
    author: AuthorDTO,
    item: ItemDetailDTO
}