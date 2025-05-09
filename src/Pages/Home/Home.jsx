import Banner from "../../componanets/Banner/Banner";
import Brand from "../../componanets/Brand/Brand";
import Delivery from "../../componanets/Delivery/Delivery";

const Home = () => {
  return (
    <div>
      {/* banner component */}
      <div className="banner_component min-h-[850px] w-full flex items-center bg-[#f0f2f3] justify-center px-20 overflow-hidden">
        <Banner />
      </div>

      {/* Delivey component */}
      <div className="delivery_component  w-full  px-20 mb-10">
        <Delivery />
      </div>

      {/* brand component */}
      <div className="brand flex items-center h-[171px] justify-center w-full mt-8 mb-8">
        <Brand />
      </div>
    </div>
  );
};

export default Home;
