import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";
import React from "react";

const Delivery = () => {
  return (
    <div className="lg:container shadow-lg p-7 rounded-lg mt-20 bg-white ">
      <div className="grid grid-cols-4 mx-auto justify-items-center">
        <div className="delivery_wrapper">
          <div className="flex items-center gap-4">
            <p>
              <Percent size="2rem" />
            </p>
            <div>
              <h4 className=" text-[#272343] text-base font-medium mb-2">
                Discounts
              </h4>
              <h5 className="capitalize text-sm text-[#9a9caa] font-normal">
                Every week new sales
              </h5>
            </div>
          </div>
        </div>

        <div className="delivery_wrapper">
          <div className="flex items-center gap-4">
            <p>
              <Truck size="3rem" />
            </p>
            <div>
              <h4 className=" text-[#272343] text-base font-medium mb-2">
                Free Delivery
              </h4>
              <h5 className="capitalize text-sm text-[#9a9caa] font-normal">
                100% Free on All Orders
              </h5>
            </div>
          </div>
        </div>

        <div className="delivery_wrapper">
          <div className="flex items-center gap-4">
            <p>
              <Clock3 size="3rem" />
            </p>
            <div>
              <h4 className=" text-[#272343] text-base font-medium mb-2">
                Great Support 247
              </h4>
              <h5 className="capitalize text-sm text-[#9a9caa] font-normal">
                We Care About Your Experience
              </h5>
            </div>
          </div>
        </div>

        <div className="delivery_wrapper">
          <div className="flex items-center gap-4">
            <p>
              <ShieldCheck size="3rem" />
            </p>
            <div>
              <h4 className=" text-[#272343] text-base font-medium mb-2">
                Secure Payment
              </h4>
              <h5 className="capitalize text-sm text-[#9a9caa] font-normal">
                100% Secure Payment
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
