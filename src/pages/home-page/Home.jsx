import AboutUs from "../../component/about-us/AboutUs";
import Banner from "../../component/banner/Banner";
import Offer from "../../component/offers/Offer";
import Sponsars from "../../component/sponsars/Sponsars";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Banner />
            <Sponsars />
            <AboutUs />
            <Offer />
        </div>
    );
};

export default Home;