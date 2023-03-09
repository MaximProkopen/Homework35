import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import headerImg from '../../components/Header/Header_img/logo-black.png';

const Layout = () => {
    return (
        <div>
            <Header
                headerImg={headerImg}
            />

            <Outlet />

            <Footer />
        </div>
    )
}

export default Layout
