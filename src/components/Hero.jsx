import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
          <div className="mt-12 lg:mt-0">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              Made for <br />
              <span className="text-red-900">all bodies</span>
              <br />
            </h1>
            <h1 className="text-5xl md:text-3xl xl:text-3xl font-regular tracking-tight mb-12">
              Size-inclusive fashion <br />
              is a human right
            </h1>
            <Link
              to="/product"
              className="inline-block px-7 py-3 mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
            >
              Explore
            </Link>
          </div>
          <div className="mb-12 lg:mb-0">
            <img
              src="https://res.cloudinary.com/dcrd7eosb/image/upload/v1673324079/shop/home-alt_bpqull.jpg"
              className="w-full rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
