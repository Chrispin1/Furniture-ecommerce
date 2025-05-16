import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { User } from "lucide-react";

const ClientSay = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
  };

  const clientSays = [
    {
      id: 1,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat ipsa iste aut necessitatibus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat ipsa iste aut necessitatibus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      name: "John Doe",
      position: "CEO",
    },
    {
      id: 2,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat ipsa iste aut necessitatibus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat ipsa iste aut necessitatibus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Jacob White",
      position: "Chairman",
    },
    {
      id: 3,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat ipsa iste aut necessitatibus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat ipsa iste aut necessitatibus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Sasha Reynolds",
      position: "Commisioner",
    },
    {
      id: 4,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat ipsa iste aut necessitatibus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat ipsa iste aut necessitatibus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Lilian Doe",
      position: "Human Resource",
    },
  ];
  return (
    <div>
      <div className="lg:container mx-auto px-20">
        <SectionTitle title="What the client says about us" />
        <div className="slider-container pt-4 w-full h-full ">
          <Slider {...settings}>
            {clientSays.map((say, index) => (
              <div key={index} className=" p-7 ml-3">
                <p className="client_say_description text-2xl text-[#636270] ">
                  {say.description}
                </p>
                <div className="flex items-center pt-4">
                  <h4>
                    <User size="4rem" />
                  </h4>
                  <div className="flex flex-col gap-1 ml-4 justify-start">
                    <h3 className="text-2xl font-semibold text-gray-700">
                      {say.name}
                    </h3>
                    <h3 className="text-md text-gray-500">{say.position}</h3>
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

export default ClientSay;
