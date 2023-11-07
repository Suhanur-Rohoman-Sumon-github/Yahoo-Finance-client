import AboutUs from "../../component/about-us/AboutUs";
import Banner from "../../component/banner/Banner";
import Offer from "../../component/offers/Offer";
import Roadmap from "../../component/roadmap/Roadmap";
import Servises from "../../component/servises/Servises";
import Sponsars from "../../component/sponsars/Sponsars";


const Home = () => {
    return (
        <div className="">
            <Banner />
            <Sponsars />
            <AboutUs />
            <Offer />
            <Servises />
            <Roadmap />
        </div>
    );
};

export default Home;