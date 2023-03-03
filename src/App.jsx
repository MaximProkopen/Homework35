import './App.css';
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Button from './components/Button/Button';
import CategoryTitle from './components/CategoryTitle/CategoryTitle';
import headerImg from './components/Header/Header_img/logo-black.png';
import bannerImg from './components/Banner/Banner_img/banner-img.jpg';
import categoryImg1 from './components/Category/Category_img/banner-20.jpg';
import categoryImg2 from './components/Category/Category_img/banner-21.jpg';
import categoryImg3 from './components/Category/Category_img/banner-22.jpg';
import productImg1 from './components/Products/Products_img/product-01.jpg';
import productImg2 from './components/Products/Products_img/product-02.jpg';
import productImg3 from './components/Products/Products_img/product-03.jpg';
import productImg4 from './components/Products/Products_img/product-04.jpg';
import productImg5 from './components/Products/Products_img/product-05.jpg';
import productImg6 from './components/Products/Products_img/product-06.jpg';
import productImg7 from './components/Products/Products_img/product-07.jpg';
import productImg8 from './components/Products/Products_img/product-08.jpg';


function App() {
  return (

    <div className="App">

      <Header
        headerImg={headerImg}
      />
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

        <section className="products">
          <div className="container">
            <CategoryTitle name="This Week's Highlights" />
            <div className="products_grid">
              <Products
                productImg={productImg1}
                productName="Hoodie with pocket"
                price="79"
              />
              <Products
                productImg={productImg2}
                productName="Flowers cotton dress"
                price="85"
              />
              <Products
                productImg={productImg3}
                productName="Hoodie with pocket"
                price="65"
              />
              <Products
                productImg={productImg4}
                productName="Oversize cotton sweatshirt"
                price="74"
              />
              <Products
                productImg={productImg5}
                productName="Striped cotton-blend sweatshirt"
                price="96"
              />
              <Products
                productImg={productImg6}
                productName="Hoodie with pocket"
                price="46"
              />
              <Products
                productImg={productImg7}
                productName="Flowers cotton dress"
                price="85"
              />
              <Products
                productImg={productImg8}
                productName="Hoodie with pocket"
                price="63"
              />
            </div>
            <Button bannerBtn="Shop Now" />
          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;
