export const initialState = {
    productWishlist: [],
};

export const wishlistReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_WISHLIST":
            return { productWishlist: [...state.productWishlist, payload] };
        case "REMOVE_FROM_WISHLIST":
            const filteredProducts = state.productWishlist.filter(
                (product) => product.id !== payload
            );
            return {
                productWishlist: filteredProducts,
            };
        default:
            return state;
    }
};
