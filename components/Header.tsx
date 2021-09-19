import useSearchBar from '../hooks/useSearchBar'
import styles from '../styles/Header.module.scss'
import meliLogo from '../public/imgs/Logo_ML.png'
import searchIcon from '../public/imgs/ic_Search.png'
import Image from 'next/image'

const Header = () => {
    const { value, handleSubmit, handleInputChange } = useSearchBar();
    return (
        <div className={styles.container}>
            <a href={'/'}><Image src={meliLogo} alt="Mercado Libre" /></a>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    onChange={handleInputChange}
                    value={value}
                    placeholder="Nunca dejes de buscar"
                    type="text"
                    className={styles.input}
                />
                <button className={styles.btnSearch}>
                    <Image src={searchIcon} alt="Buscar" />
                </button>
            </form>
        </div>
    );
};

export default Header;