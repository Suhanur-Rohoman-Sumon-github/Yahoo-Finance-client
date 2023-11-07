import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/lottie-jsons/about.json"

const AboutUs = () => {
    return (
        <div className="hero min-h-screen mx">
            <div className="hero-content flex-col lg:flex-row">
                <div className="md:w-[45%] relative">
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                    <div className="absolute top-4 left-0 grediant-2 ">
                        <h1 className="text-3xl font-bold"><span className="text-green-500 text-5xl">10 Years</span> <br />
                            Consulting Experience</h1>
                    </div>
                    <div className="absolute bottom-4 right-0 grediant-2">
                        <h1 className="text-3xl font-bold"><span className="text-green-500 text-5xl">25K+</span> <br />
                            Satisfied Customers</h1>
                    </div>
                </div>
                <div className="md:w-[55%]">
                    <h1 className="text-5xl font-bold">Meet <span className="text-green-500">Our Company</span> Unless <br /> Miss The Opportunity</h1>
                    <p className="secendary-text">Hey there! So glad you stopped by to Meet Our Company. Dont miss out on this opportunity to learn about what we do and the amazing team that makes it all happen! Our company is all about creating innovative solutions and providing top-notch services to our clients. From start to finish, were dedicated to delivering results that exceed expectations.</p>
                    <button className="btn btn-primary">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;