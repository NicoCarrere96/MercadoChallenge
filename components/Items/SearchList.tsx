
import ItemDTO from '../../models/dtos/ItemDTO'

import styles from '../../styles/SearchList.module.scss'
import ListItem from './ListItem';

interface Props {
    items: ItemDTO[]
}
const SearchList = ({ items }: Props) => {
    return <div className={styles.container}>
        {items.map(item =>
            <ListItem key={item.id} item={item} />
        )}
    </div>
};

export default SearchList;