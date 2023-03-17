import styles from "../Cart/Cart.module.scss";
import productAddImg from '../../components/Products/Products_img/product-07.jpg';
import { Link } from "react-router-dom";

const Cart = () => {
    return (     
            <div className={styles.cart__list}>
                <div className={styles.item}>
                    <div className={styles.item__content}>
                        <button href="#" className={styles.item__delete_btn}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>

                            <i></i>
                        </button>

                        <img
                            src={productAddImg}
                            className={styles.item__image}
                            alt="Partridge Bar Stool"
                        />

                        <div>
                            <p className={styles.item__category}>Dress</p>
                            <Link to="/" className={styles.item__name}>
                                Oversize cotton sweatshirt
                            </Link>
                        </div>
                    </div>

                    <p>$750.00</p>
                </div>
            </div>

            

    )
}

export default Cart