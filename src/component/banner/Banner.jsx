import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/lottie-jsons/home.json";

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <Lottie animationData={groovyWalkAnimation} loop={true} />
                <div className="">
                    <h1 className="text-5xl font-bold">Invest Your Money With <span className="text-green-500">Higher Return</span>
</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-green-500 hover:bg-green-600 text-white">Get Started</button>

                </div>
            </div>
        </div>
    );
};

export default Banner;