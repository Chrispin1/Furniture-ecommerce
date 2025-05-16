import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Recent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const features = [
    {
      title: "library stool ",
      status: "New",
      price: "$250",
      image: "/src/assets/features/product_1.png",
      currentPrice: "$200",
    },
    {
      title: "library stool chair",
      status: "Sales",
      price: "$250",
      image: "/src/assets/features/product_2.png",
    },
    {
      title: "library stool chair",
      status: "Unknown",
      price: "$250",
      image: "/src/assets/features/product_3.png",
    },
    {
      title: "library stool chair",
      status: "New",
      price: "$250",
      image: "/src/assets/features/product_4.png",
      currentPrice: "$200",
    },
  ];
  return (
    <div>
      <div className="lg:container mx-auto">
        <SectionTitle title="Recently Added items" />
        <div className="slider-container mx-20">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="px-3">
                <div className="feature_image bg-white rounded-lg shadow-md">
                  <div className="flex justify-center items-center pt-5">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="object-contain w-[80%] h-[80%]"
                    />
                  </div>
                  {feature.status && (
                    <div className="px-11 py-5">
                      <button
                        className="px-3 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: "#007580" }}
                      >
                        {feature.status}
                      </button>
                    </div>
                  )}
                  <div className="feature_content mb-10 px-11">
                    <div className="flex justify-between items-center">
                      <h4 className="capitalize text-base font-medium text-gray-800">
                        {feature.title}
                      </h4>
                      <span
                        className="rounded-full h-[44px] w-[44px] flex items-center justify-center"
                        style={{ backgroundColor: "#029fae" }}
                      >
                        <ShoppingCart size="1.5rem" color="#fff" />
                      </span>
                    </div>
                    {/* Price information display */}
                    <div className="mt-2 pb-4">
                      {feature.currentPrice ? (
                        <div className="flex items-center">
                          <span
                            className="font-bold"
                            style={{ color: "#029fae" }}
                          >
                            {feature.currentPrice}
                          </span>
                          <span className="ml-2 text-sm line-through text-gray-500">
                            {feature.price}
                          </span>
                        </div>
                      ) : (
                        <span className="font-bold text-gray-800">
                          {feature.price}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Recent;
