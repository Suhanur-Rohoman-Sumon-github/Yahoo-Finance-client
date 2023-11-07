import {  advisers } from "../../data/data";


const Mentor = () => {
    return (
        <div className="my-20">
            <div className='text-center pt-5 mx'>
                <h1 className="primary-text text-center mt-5">Meet Our  <span className="text-green-500">Advisers</span> </h1>
                <p className="secendary-text  my-5">ey everyone, meet our amazing advisers! Theyare here to help and guide us through anything.</p>
                <div className="md:grid grid-cols-4 gap-4">
                    {
                        advisers.map((adviser,index)=> <div key={index} className="card hover:text-green-500 relative card-compact   shadow-xl">
                        <figure><img src={adviser.img} alt="Shoes" /></figure>
                        <div className="absolute bottom-4 left-4 right-4 grediant-2 text-center">
                          <h2 className="text-xl">{adviser.name}</h2>
                          <p className="text-gray-400">{adviser.title}</p>
                         
                        </div>
                      </div> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Mentor;