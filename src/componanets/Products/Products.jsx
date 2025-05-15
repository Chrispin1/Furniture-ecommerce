import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Products = () => {
  const [active, setActive] = useState({
    id: 0,
    product: "all",
  });

  const productTitle = [
    {
      id: 0,
      title: "all",
      product: "all",
    },
    {
      id: 1,
      title: "newest",
      product: "newest",
    },
    {
      id: 2,
      title: "trending",
      product: "trending",
    },
    {
      id: 3,
      title: "best seller",
      product: "best seller",
    },
  ];

  const products = [
    {
      title: "library stool",
      status: "new",
      price: "$ 250",
      image: "/src/assets/products/product_1.png",
      currentPrice: "$ 200",
      product: "newest",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_2.png",
      product: "newest",
    },
    {
      title: "library stool",
      status: "new",
      price: "$ 250",
      image: "/src/assets/products/product_3.png",
      currentPrice: "$ 200",
      product: "newest",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_4.png",
      product: "newest",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_5.png",
      product: "trending",
    },
    {
      title: "library stool",
      status: "new",
      price: "$ 250",
      image: "/src/assets/products/product_6.png",
      currentPrice: "$ 200",
      product: "trending",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_7.png",
      product: "trending",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_8.png",
      product: "trending",
    },
    {
      title: "library stool",
      status: "new",
      price: "$ 250",
      image: "/src/assets/products/product_1.png",
      currentPrice: "$ 200",
      product: "best seller",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_2.png",
      product: "best seller",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_3.png",
      product: "best seller",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_4.png",
      product: "best seller",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_6.png",
      product: "featured",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_7.png",
      product: "featured",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_8.png",
      product: "featured",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_1.png",
      product: "featured",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_2.png",
      product: "all",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_3.png",
      product: "all",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_4.png",
      product: "all",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_5.png",
      product: "all",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_6.png",
      product: "all",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_7.png",
      product: "all",
    },
    {
      title: "library stool chair",
      status: "sales",
      price: "$ 250",
      image: "/src/assets/products/product_8.png",
      product: "all",
    },
  ];

  const productFilter =
    active.product === "all"
      ? products
      : products.filter((product) => product.product === active.product);

  return (
    <div>
      <div className="mt-10 mx-auto">
        <div className="flex items-center justify-center">
          <SectionTitle title="Our Product" />
        </div>
        <div className="mb-6 flex items-center justify-center gap-6">
          {productTitle.map((title, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  setActive({ id: title.id, product: title.product })
                }
                className={`capitalize text-xl font-semibold ${
                  title.id === active.id ? "text-[#black]" : "text-gray-400"
                }`}
              >
                {title.title}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-6">
          {productFilter.map((product, index) => (
            <div key={index} className="shadow-xl p-4 rounded-lg mx-auto">
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full max-h-[312px]"
                />
                {product.status && (
                  <div className="absolute top-4 left-4 bg-[#029fae] rounded-full px-2 py-0.2 text-white cursor-pointer">
                    <button className="cursor-pointer capitalize">
                      {product.status}
                    </button>
                  </div>
                )}
              </div>
              <div className="description">
                <div className="flex justify-between items-center pt-1 pb-2">
                  <span className=" text-md capitalize font-semibold text-gray-700">
                    {product.title}
                  </span>
                  <div className="bg-[#029fae] p-1 rounded-md">
                    <ShoppingCart size="22px" />
                  </div>
                </div>
                <span className="text-base text-gray-500">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
