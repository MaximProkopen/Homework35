import Products from './Products';
import styles from './ProductList.module.scss';
import productImg1 from '../../components/Products/Products_img/product-01.jpg';
import productImg2 from '../../components/Products/Products_img/product-02.jpg';
import productImg3 from '../../components/Products/Products_img/product-03.jpg';
import productImg4 from '../../components/Products/Products_img/product-04.jpg';
import productImg5 from '../../components/Products/Products_img/product-05.jpg';
import productImg6 from '../../components/Products/Products_img/product-06.jpg';
import productImg7 from '../../components/Products/Products_img/product-07.jpg';
import productImg8 from '../../components/Products/Products_img/product-08.jpg';

const ProductsItem = () => {
    const productsList = [
        {
            name: "Hoodie with pocket",
            img: productImg1,
            alt: "Hoodie with pocket",
            price: "79$",
        },
        {
            name: "Flowers cotton dress",
            img: productImg2,
            alt: "Flowers cotton dress",
            price: "85$",
        },
        {
            name: "Hoodie with pocket",
            img: productImg3,
            alt: "Hoodie with pocket",
            price: "65$",
        },
        {
            name: "Oversize cotton sweatshirt",
            img: productImg4,
            alt: "Oversize cotton sweatshirt",
            price: "74$",
        },
        {
            name: "Striped cotton-blend sweatshirt",
            img: productImg5,
            alt: "Striped cotton-blend sweatshirt",
            price: "96$",
        },
        {
            name: "Hoodie with pocket",
            img: productImg6,
            alt: "Hoodie with pocket",
            price: "46$",
        },
        {
            name: "Flowers cotton dress",
            img: productImg7,
            alt: "Flowers cotton dress",
            price: "85$",
        },
        {
            name: "Hoodie with pocket",
            img: productImg8,
            alt: "Hoodie with pocket",
            price: "63$",
        },
    ];

    return (
        <section className={styles.products}>
            <div className={styles.container}>
                <h2 className={styles.products_title}>This Week's Highlights</h2>
                <div className={styles.products_grid}>
                    {productsList.map((product, i) => {
                        return (
                            <Products
                                id={i}
                                key={i}
                                img={product.img}
                                productName={product.name}
                                price={product.price}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProductsItem;