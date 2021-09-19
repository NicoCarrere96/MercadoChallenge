import axios from 'axios';
import { NextPage } from 'next';
import SearchList from '../../components/Items/SearchList';
import MainLayout from '../../components/MainLayout';

import ItemDTO from '../../models/dtos/ItemDTO';
import SearchResponse from '../../models/responses/SearchResponse';

interface Props {
    items?: ItemDTO[],
    categories?: string[]
}

const Items: NextPage<Props> = ({ items, categories }) => {
    return (
        <MainLayout title={'Búsqueda'}>
            {
                items && items.length > 0 ?
                    <SearchList {...{ items }} />
                    :
                    <h2>No se encontraron resultados</h2>
            }
        </MainLayout>
    );
};

Items.getInitialProps = async ({ query }) => {
    const { search } = query
    if (!search) return {}
    const response = await axios.get<SearchResponse>(`http://localhost:3000/api/items?q=${search}`)
    return {
        items: response.data.items,
        categories: response.data.categories
    }
}

export default Items;