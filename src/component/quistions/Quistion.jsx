import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/lottie-jsons/quistions.json";

const Quistion = () => {
  return (
    < div className=" green-bg">
      <div className='text-center pt-5 '>
        <h1 className="primary-text text-center mt-5"><span className="text-green-500">Frequently </span>Asked Questions</h1>
        <p className="secendary-text  my-5">ey everyone, meet our amazing advisers! Theyare here to help and guide us through anything.</p> </div>
      <div className="hero min-h-screen ">

        <div className="hero-content flex-col lg:flex-row-reverse mx">
          <div className="md:w-[40%]">
            <Lottie animationData={groovyWalkAnimation} loop={true} />
          </div>
          <div className="md:w-[60%]">
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 my-4">
              <div className="collapse-title text-xl font-medium text-green-500">
                What Does This Tool Do?
              </div>
              <div className="collapse-content text-gray-400">
                <p>Online trading’s primary advantages are that it allows you to manage your trades at your convenience.</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 my-4">
              <div className="collapse-title text-xl font-medium text-green-500">
                What Does This Tool Do?
              </div>
              <div className="collapse-content text-gray-400">
                <p>Online trading’s primary advantages are that it allows you to manage your trades at your convenience.</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 my-4">
              <div className="collapse-title text-xl font-medium text-green-500">
                What Does This Tool Do?
              </div>
              <div className="collapse-content text-gray-400">
                <p>Online trading’s primary advantages are that it allows you to manage your trades at your convenience.</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 my-4">
              <div className="collapse-title text-xl font-medium text-green-500">
                What Does This Tool Do?
              </div>
              <div className="collapse-content text-gray-400">
                <p>Online trading’s primary advantages are that it allows you to manage your trades at your convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quistion;