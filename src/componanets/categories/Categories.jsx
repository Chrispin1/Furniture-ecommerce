import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      title: "Wing Chair",
      products: "3,584 Products",
      image: "/src/assets/categories/categories_1.png",
    },
    {
      title: "Wooden Chair",
      products: "157 Products",
      image: "/src/assets/categories/categories_2.png",
    },
    {
      title: "Desk Chair",
      products: "154 Products",
      image: "/src/assets/categories/categories_3.png",
    },
    {
      title: "Park Bench",
      products: "170 Products",
      image: "/src/assets/categories/categories_4.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="lg:container px-20">
        <SectionTitle title="Shop by Categories" />
        <div className="slider-container mb-4">
          <Slider {...settings}>
            {categories.map((category, index) => (
              <div className="px-4" key={index}>
                <div className="bg-white rounded-lg shadow lg hover:scale-105 mb-4 transition-scale duration-300 p-4 w-full h-full">
                  <div>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-96 w-full object-contain"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-1 pb-4">
                    <h3>{category.title}</h3>
                    <div className="bg-[#029fae] flex justify-center items-center p-1 rounded-full">
                      <ArrowRight />
                    </div>
                  </div>
                  <div className="">
                    <p className="text-gray-500 text-sm">{category.products}</p>
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

export default Categories;
