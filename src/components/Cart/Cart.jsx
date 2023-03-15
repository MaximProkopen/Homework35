import styles from "../Cart/Cart.module.scss";
import classNames from "classnames";
import productAddImg from '../../components/Products/Products_img/product-07.jpg';

const Cart = () => {
    return (
        <div className={styles.cart__grid}>
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
                            <a href="/" className={styles.item__name}>
                                Oversize cotton sweatshirt
                            </a>
                        </div>
                    </div>

                    <p>$750.00</p>
                </div>
            </div>

            <div className={styles.summary}>
                <h4 className={styles.summary__title}>Summary</h4>

                <div className={styles.summary__body}>
                    <div className={styles.summary__line}>
                        <div>Total</div>
                        <div>$2020.00</div>
                    </div>
                </div>

                <button
                    type="submit"
                    className={classNames(
                        styles.btn,
                        styles.btn_dark,
                        styles.btn_full_width
                    )}
                >
                    Check Out
                </button>
            </div>
        </div>
    )
}

export default Cart