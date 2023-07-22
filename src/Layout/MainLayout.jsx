import Footer from '../ShareComponents/Footer/Footer';
import Navber from '../ShareComponents/Navber/Navber';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;