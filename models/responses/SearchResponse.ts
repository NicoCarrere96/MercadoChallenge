import AuthorDTO from "../dtos/AuthorDTO";
import ItemDTO from "../dtos/ItemDTO";

export default interface SearchResponse {
    author: AuthorDTO,
    categories: string[],
    items: ItemDTO[],
}