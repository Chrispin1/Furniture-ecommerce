import {
  Armchair,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    alert(`You have subscribed to our emails ${email}`);
    setEmail("");
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!newEmail || validateEmail(newEmail)) {
      setError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className=" mx-auto px-8 bg-gray-100 pb-8 ">
        <div className=" lg:container grid grid-cols-4 pt-4 mb-10 pb-10 border-b gap-2 border-gray-400">
          {/* grid 1 */}
          <div className="grid-1">
            <div className="flex items-center gap-2 mb-4">
              <Armchair size={35} color="#029fae" />
              <h3 className="text-2xl font-semibold text-gray-800">Comforty</h3>
            </div>
            <div className="max-w-[400px]">
              <p className="capitalize text-gray-500">
                discover comfort and style with our premium furniture collection
              </p>
            </div>

            <div className="space-y-3 pt-6 text-gray-500 text-md">
              <div className="flex items-center gap-3">
                <Phone />
                <p>+254 720 000 00</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail />
                <p>comfortyfurniture@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin />
                <p className="capitalize">123 Sunrise road sunder estate</p>
              </div>
            </div>
          </div>

          {/* grid 2 */}
          <div className="grid-2">
            <div className="mb-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                Quick Links
              </h1>
            </div>
            <div className="space-y-3.5 text-gray-500">
              <div>
                <span>About</span>
              </div>
              <div>
                <span>Shop</span>
              </div>
              <div>
                <span>Cart</span>
              </div>
              <div>
                <span>Wishlist</span>
              </div>
              <div>
                <span>Contact</span>
              </div>
            </div>
          </div>

          {/* grid 3 */}
          <div className="grid 3">
            <div className="mb-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                Categories
              </h1>
            </div>
            <div className="space-y-3.5 text-gray-500">
              <div>
                <span>Living Room</span>
              </div>
              <div>
                <span>Bedroom</span>
              </div>
              <div>
                <span>Kitchen</span>
              </div>
              <div>
                <span>Office</span>
              </div>
              <div>
                <span>Outdoor</span>
              </div>
            </div>
          </div>

          {/* grid 4 */}
          <div className="grid-4">
            <div className="mb-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                Stay Updated
              </h1>
            </div>
            <div>
              <p className="capitalize text-gray-500 ">
                subscribe to our newsletter for the latest updates and offers
              </p>
            </div>
            <div className="flex pt-4 rounded-md">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your Email..."
                className={`border ${
                  error ? "border-red-500" : "border-gray-500"
                } p-3 rounded-l-md focus:outline-[#029fae]`}
              />
              <button
                onClick={handleSubscribe}
                className="p-2 bg-[#029fae] rounded-r-md text-white"
              >
                Subscribe
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex pt-4 items-center gap-8">
              <Twitter
                size={40}
                className="p-2 rounded-md  transition-colors duration-300 hover:bg-[#029fae]"
              />
              <Facebook
                size={40}
                className="p-2 rounded-md  transition-colors duration-300 hover:bg-[#029fae]"
              />
              <Youtube
                size={40}
                className="p-2 rounded-md  transition-colors duration-300 hover:bg-[#029fae]"
              />
              <Instagram
                size={40}
                className="p-2 rounded-md  transition-colors duration-300 hover:bg-[#029fae]"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Armchair size={35} color="#029fae" />
              <h1 className="text-2xl font-semibold text-gray-800">Comforty</h1>
            </div>
            <div className="text-gray-500">
              <p>© {currentYear} Comforty. All rights reserved</p>
              <div className="flex item-center pt-2 gap-4">
                <a href="#" className="hover:text-[#029fae] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#029fae] transition-colors">
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
