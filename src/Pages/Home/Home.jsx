import Banner from "../../componanets/Banner/Banner";
import Brand from "../../componanets/Brand/Brand";
import Categories from "../../componanets/categories/categories";
import ClientSay from "../../componanets/Client_Say/ClientSay";
import Delivery from "../../componanets/Delivery/Delivery";
import Feature from "../../componanets/Feature/Feature";
import Footer from "../../componanets/Footer/Footer";
import Products from "../../componanets/Products/Products";
import Recent from "../../componanets/Recent/Recent";

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

      {/* feature component */}
      <div className="w-full flex items-center justify-center overflow-hidden">
        <Feature />
      </div>

      {/* category component */}
      <div className="w-full flex items-center justify-center overflow-hidden">
        <Categories />
      </div>

      {/* products component */}
      <div className="w-full ">
        <Products />
      </div>

      {/* client say component */}
      <div className="min-h-[589px] bg-[#f0f2f3] w-full flex items-center mb-10 overflow-hidden mt-[40px]">
        <ClientSay />
      </div>

      <div className="w-full flex justify-center items-center mb-[80px] pt-[40px] overflow-hidden">
        <Recent />
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
