import AboutUs from "../../component/about-us/AboutUs";
import Banner from "../../component/banner/Banner";
import Mentor from "../../component/mentors/Mentor";
import Offer from "../../component/offers/Offer";
import Quistion from "../../component/quistions/Quistion";
import Roadmap from "../../component/roadmap/Roadmap";
import Servises from "../../component/servises/Servises";
import Sponsars from "../../component/sponsars/Sponsars";
import Subscribe from "../../component/subscibe/Subscribe";


const Home = () => {
    return (
        <div className="">
            <Banner />
            <Sponsars />
            <AboutUs />
            <Offer />
            <Servises />
            <Roadmap />
            <Mentor />
            <Quistion />
            <Subscribe />
        </div>
    );
};

export default Home;