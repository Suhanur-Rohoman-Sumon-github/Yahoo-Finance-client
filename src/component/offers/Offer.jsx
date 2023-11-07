

const Offer = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
        <div className="md:w-[50%]">
        <img src="https://i.ibb.co/yfNjzSX/dolar.webp" className="w-full h-full" />
        </div>
          <div className="md:w-[50%]">
            <h1 className="text-5xl font-bold"><span className="text-green-500">Benefits</span> We Offer</h1>
            <p className="secendary-text">Unlock the full potential of our product with our amazing features and top-notch.</p>
            <p className="grediant-2 text-2xl">Lending Money For Investment Of Your New Projects</p>
            <p className="grediant-3 text-2xl secendary-text my-4">Mobile Payment Is More Flexible And Easy For All Investors</p>
            <p className="grediant-3 text-2xl secendary-text my-4">All Transaction Is Kept Free For The Member Of Pro Traders</p>
          </div>
        </div>
      </div>
    );
};

export default Offer;