import { useDispatch } from "react-redux"; 
import { addToWishlist } from "../../redux/wishlistSlice";
import styles from './Products.module.scss';

const Products = (product) => {
  const { productImg, productName, price, id } = product;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToWishlist(product));
  };
  return (
    <div className={styles.product} id={id}>
      <div className={styles.products_image}>
        <a href="/" className={styles.products_image_block}>
          <img src={productImg} alt={productName} />
        </a>
        <button onClick={handleClick} className={styles.add_to_wishlist}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
      <div className={styles.product_body}>
        <h3>
          <a href="/">{productName}</a>
        </h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Products;