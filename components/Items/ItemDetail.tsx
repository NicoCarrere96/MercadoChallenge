import NumberFormat from 'react-number-format';
import { ItemDetailDTO } from '../../models/dtos/ItemDetailDTO';

import styles from '../../styles/ItemDetail.module.scss'

interface Props {
    item: ItemDetailDTO
}

const ItemDetail = ({ item }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <img src={item.picture} alt={item.title} className={styles.image} />
                <div className={styles.details}>
                    <h4 className={styles.state}>{item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos</h4>
                    <h1 className={styles.title}>{item.title}</h1>
                    <h2 className={styles.price}>
                        <span className={styles.amount}><NumberFormat prefix={'$ '} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} value={item.price.amount} /> </span>
                        {item.price.decimals > 0 &&
                            <span className={styles.decimals}><NumberFormat value={item.price.decimals} displayType={'text'} format={item.price.decimals < 10 ? '0#' : '##'} /></span>
                        }
                    </h2>
                    <button className={styles.buyBtn}>Comprar</button>
                </div>
            </div>
            <div>
                <h2 className={styles.descriptionTitle}>Descripción del producto</h2>
                <p className={styles.description}>{item.description}</p>
            </div>
        </div>
    );
};

export default ItemDetail;