import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shaerd/navbar/Navbar";
import Footer from "../../pages/shaerd/footer/Footer";


const Main = () => {
    return (
        <div className="bg-black text-white ">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;