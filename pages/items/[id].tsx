import axios from 'axios';
import { NextPage } from 'next';
import ItemDetail from '../../components/Items/ItemDetail';
import MainLayout from '../../components/MainLayout';
import { ItemDetailDTO } from '../../models/dtos/ItemDetailDTO';
import { ItemResponse } from '../../models/responses/ItemResponse';

interface Props {
    item?: ItemDetailDTO,
}

const ItemPage: NextPage<Props> = ({ item }) => {
    return (
        <MainLayout title={item?.title ?? 'No existe producto'} >
            {
                item ? <ItemDetail {...{ item }} /> : <h2>El producto solicitado no esta disponible o no existe</h2>
            }
        </MainLayout>
    );
};

ItemPage.getInitialProps = async ({ query }) => {
    const { id } = query
    try {
        const response = await axios.get<ItemResponse>(`http://localhost:3000/api/items/${id}`)
        return {
            item: response.data.item
        }
    } catch (error) {
        console.error(error)
        return {}
    }

}

export default ItemPage;