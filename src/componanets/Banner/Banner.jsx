import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Banner = () => {
  const products = [
    {
      id: 1,
      title: "Best furnitutre collection for your interior",
      subtitle: "Welcome to chairs",
      image: "/src/assets/Banner/banner_image.png",
    },
    {
      id: 2,
      title: "Best furnitutre collection for your interior",
      subtitle: "Welcome to chairs",
      image: "/src/assets/Banner/banner_image.png",
    },
    {
      id: 3,
      title: "Best furnitutre collection for your interior",
      subtitle: "Welcome to chairs",
      image: "/src/assets/Banner/banner_image.png",
    },
    {
      id: 4,
      title: "Best furnitutre collection for your interior",
      subtitle: "Welcome to chairs",
      image: "/src/assets/Banner/banner_image.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div className=" lg:container">
      <div className="slider-container">
        <Slider {...settings}>
          {products.map((products) => (
            <div key={products.id} className="banner_slide ">
              {/* banner text */}
              <div className="banner_text ml-10">
                <p className="text-sm uppercase text-[#272343] font-normal">
                  {products.subtitle}
                </p>

                <h3 className="text-6xl pt-2 text-[#272343] leading-16 max-w-[631px] w-full font-bold">
                  {products.title}
                </h3>

                <button className="flex items-center hover:bg-[#2f5558] transition duration-300 max-w-[171px] justify-center w-full gap-3 mt-4 text-white rounded-lg cursor-pointer py-3 px-2 bg-[#029fae]">
                  Shop Now <MoveRight />
                </button>
              </div>

              {/* banner_image */}
              <div className="banner_image w-full h-full flex items-center justify-end ">
                <img src={products.image} alt={products.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
