import { useContext } from "react";
import { WishlistContext } from "../Context/ProductContext";
import Item from "./Item";


const Wishlist = () => {
  const { state } = useContext(WishlistContext);

  return (
    <div>
        {state?.productWishlist && state?.productWishlist.map((item, i) => (
          <Item key={i} id={i} item={item} name={item.productName}/>
        ))}
      </div>
  );
};

export default Wishlist;
