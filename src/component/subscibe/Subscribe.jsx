import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/lottie-jsons/subscribe.json";

const Subscribe = () => {
    return (
        <div className="hero grediant-4 ">
        <div className="hero-content flex-col lg:flex-row">
        <Lottie animationData={groovyWalkAnimation} loop={true} />
          <div>
            <h1 className="text-5xl font-bold"><span className="text-blue-500">Subscribe</span> Our News</h1>
            <p className="text-white my-6"> Hey! Are you tired of missing out on our updates? Subscribe to our news now and stay in the loop!</p>
            <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
            <button className="btn subscribe-button ml-4">send now</button>
          </div>
        </div>
      </div>
    );
};

export default Subscribe;