import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/lottie-jsons/home.json";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="hero min-h-screen  green-bg">
            <div className="hero-content flex-col lg:flex-row-reverse mx">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
                <div className="">
                    <h1 className="primary-text">Invest Your Money <br /> With <span className="text-green-500">Higher Return</span>
                    </h1>
                    <p className="secendary-text ">Anyone can invest money to different currency to increase their earnings by the help of Bitrader through online.</p>
                    <button className="btn-primary">Get Started</button>
                    <button className="ml-2 btn-secendary">Get Started</button>
                    <p className="text-2xl font-bold text-white my-10">Follow Us</p>
                    <div className="flex items-center gap-4">
                        <p className="icon"><FaFacebookF className=""/></p>
                        <p className="icon"><FaLinkedinIn className=""/></p>
                        <p className="icon"><FaInstagram className=""/></p>
                        <p className="icon"><FaYoutube className=""/></p>
                        <p className="icon"><FaTwitter className=""/></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;