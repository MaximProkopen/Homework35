import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import ProductsItem from '../../components/Products/ProductList';
import Button from '../../components/Button/Button';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import bannerImg from '../../components/Banner/Banner_img/banner-img.jpg';
import categoryImg1 from '../../components/Category/Category_img/banner-20.jpg';
import categoryImg2 from '../../components/Category/Category_img/banner-21.jpg';
import categoryImg3 from '../../components/Category/Category_img/banner-22.jpg';
import styles from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <div className="App">
            <main>
                <Banner
                    imgBanner={bannerImg}
                    titleBanner="Waffle Hooded Coat"
                    btnBanner="Shop Now"
                />
                <section className="category">
                    <div className="container">
                        <CategoryTitle name="This Season Collection" />
                        <div className="category_grid">
                            <Category categoryImg={categoryImg1} categoryName="Glasses" />
                            <Category categoryImg={categoryImg2} categoryName="Sneakers" />
                            <Category categoryImg={categoryImg3} categoryName="Handbags" />
                        </div>
                    </div>
                </section>

                <ProductsItem />

                <div className={styles.btn__hp}>
                    <Button name="Shop Now" />
                </div>
            </main>
        </div>
    )
}

export default HomePage;