import { services } from "../../data/data";


const Servises = () => {
    return (
        <div className="my-20 mx">
            <h1 className="primary-text text-center "><span className="text-green-500">Services</span> We Offer</h1>
            <p className="secendary-text text-center">We offer the best services around - from installations to repairs, maintenance, and more!</p>
            <div className="md:grid grid-cols-3 gap-4 my-20 hover:gap-6">
                {
                    services.map((servise, index) => <div key={index} className="card card-compact w-full cards  ">
                    <figure><img src={servise.img} alt="Shoes" className="bg-green-900 p-10 rounded-full bg-opacity-80"/></figure>
                    <div className="card-body text-center">
                      <h2 className="text-2xl my-2 font-bold">{servise.title}</h2>
                      <p className="secendary-text">{servise.discription}</p>
                      
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Servises;