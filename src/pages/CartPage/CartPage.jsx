import Cart from "../../components/Cart/Cart";
import Summary from "../../components/Summary/Summary";
import styles from "../CartPage/CartPage.module.scss";

const CartPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.cart__title}>Shopping Cart</h1>
            <div className={styles.cart__grid}>
                <Cart />
                <Summary />
            </div>
        </div>
    )
}

export default CartPage
