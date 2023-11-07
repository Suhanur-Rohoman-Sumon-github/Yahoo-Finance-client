import { useState } from "react";
import { stockdatas } from "../../data/data";
import ShereChart from "../../component/shere/ShereChart";


const Shere = () => {
    const [datas, setDatas] = useState()
    return (

        <div className="flex  w-full py-40 ">

            <div className=" md:w-[20%]">

                <div className="">
                    {
                        stockdatas.map((category, index) => <p onClick={() => setDatas(category.name)} className="text-left md:ml-8  cursor-pointer text-base  font-bold" key={index}>{category.name}</p>)
                    }
                </div>

            </div>
            <div className="divider divider-horizontal"></div>
            <div className="  md:w-[80%]">
                <ShereChart symbol={datas ? datas : "IBM"} />
            </div>
        </div>

    );
};

export default Shere;