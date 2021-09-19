import Image from 'next/image';
import ItemDTO from "../../models/dtos/ItemDTO";
import NumberFormat from 'react-number-format';
import freeShippingLogo from '../../public/imgs/ic_shipping.png'

import styles from "../../styles/ListItem.module.scss";

interface Props {
    item: ItemDTO
}

const ListItem = ({ item }: Props) => {
    return (
        <>
            <a href={`/items/${item.id}`} className={styles.itemCard}>
                <img src={item.picture} alt={item.id} className={styles.img} />
                <div className={styles.info}>
                    <div className={styles.firstLine}>
                        <span className={styles.price}>
                            <span className={styles.amount}><NumberFormat prefix={'$ '} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} value={item.price.amount} /> </span>
                            {item.price.decimals > 0 &&
                                <span className={styles.decimals}><NumberFormat value={item.price.decimals} displayType={'text'} format={item.price.decimals < 10 ? '0#' : '##'} /></span>
                            }
                            <span className={styles.freeShipping}>{item.free_shipping ? <Image src={freeShippingLogo} alt={'Envio Gratis'} /> : null}</span>
                        </span>
                        <h6 className={styles.location}>Capital Federal</h6>
                    </div>
                    <h2 className={styles.title}>{item.title}</h2>
                </div>
            </a>
            <hr className={styles.separator} />
        </>
    );
};

export default ListItem;