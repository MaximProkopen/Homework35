import { useContext } from "react";
import { WishlistContext } from "../Context/ProductContext";
import styles from "./Wishlist.module.scss";
import classNames from "classnames";
import Button from "../Button/Button";

const Item = (props) => {
  const { img, price, productName, id } = props.item;

  const { removeFromWishlist } = useContext(WishlistContext);

  const handelClick = () => {
    removeFromWishlist(id);
  };
  return (
    <div className={styles.item}>
      <div className={styles.item__content}>
        <button className={styles.item__delete} onClick={handelClick}>
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
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
        <div className={styles.item__body}>
          <img src={img} alt={productName} className={styles.item__image} />
          <div className={classNames(styles.media_body, styles.mw - 210)}>
            <p className={styles.item__title}>{productName}</p>
            <p className={styles.item__price}>{price}</p>
          </div>
        </div>
      </div>
      <div className={styles.item__buttons}>
        <Button bannerBtn="Add To Cart" />
      </div>
    </div>
  );
};

export default Item;