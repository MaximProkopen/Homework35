import { useSelector } from "react-redux";
import Item from "./Item";


const Wishlist = () => {
  const value = useSelector((store) => store.product);

  return (
    <div>
      {value?.productWishlist &&
        value?.productWishlist.map((item, i) => (
          <Item key={i} id={i} item={item} name={item.productName} />
        ))}
    </div>
  );
};

export default Wishlist;
