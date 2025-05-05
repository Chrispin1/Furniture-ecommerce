import {
  Armchair,
  Check,
  Heart,
  Info,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      {/* Navbar top */}
      <div className="navbar_top  w-full bg-[#272343] ">
        <div className="lg:container h-[45px] flex items-center justify-between px-4 mx-auto">
          <p className="text-sm font-normal text-white gap-2 capitalize items-center flex">
            <Check /> Free on all orders above $50
          </p>
          <div className="navbar_top_right flex items-center gap-6">
            <select
              defaultValue="Server location"
              className=" bg-none h-[30px] w-[90px] outline-none text-white text-sm font-normal capitalize border border-white/20 px-1.5 rounded-md"
            >
              <option>eng</option>
              <option>German</option>
            </select>
            <button>
              <Link className="text-white font-normal text-sm capitalize">
                Faqs
              </Link>
            </button>
            <button>
              <Link className="flex items-center gap-2 text-white text-sm font-normal">
                <Info />
                Need Help
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* navbar middle */}

      <div className="navbar_middle flex mx-auto items-center justify-center bg-[#f0f2f3] shadow-md w-full h-[84px]">
        <div className="lg:container px-4 grid grid-cols-3 items-center">
          <div className="logo_wrapper">
            <Link
              to="/"
              className="font-medium capitalize flex items-center gap-2 text-black text-3xl "
            >
              <Armchair size="2rem" color="#029fae" />
              Comforty
            </Link>
          </div>

          {/* search box */}

          <div className="search_box">
            <form action="#" className="max-w-[443px] relative h-[44px]">
              <input
                type="text"
                placeholder="Search here..."
                className="rounded-lg pl-4 max-w-[443px] bg-white outline-none h-full w-full"
              />
              <button className="absolute right-4 cursor-pointer translate-y-1/2">
                <Search size="22px" color="#272343" />
              </button>
            </form>
          </div>

          {/* navbar_middle_right */}
          <div className="navbar_middle_right flex items-center gap-3">
            <button className="btn capitalize">
              <ShoppingCart /> cart{" "}
              <div className="badge badge-sm bg-[#029fae]">2</div>
            </button>
            <button className="btn capitalize">
              <Heart />
            </button>

            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                <User />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Account</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* navbar bottom */}
      <div className="navbar_bottom flex items-center justify-center pt-2 h-[75px] bg-white shadow-sm px-4">
        <div className="flex items-center justify-between lg:container">
          <div className="navbar_bottom_left flex items-center gap-9">
            <div className="dropdown dropdown-start">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 flex items-center gap-3"
              >
                <Menu /> All Categories
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>

            <nav className="flex items-center gap-8">
              <NavLink to="/" className="text-sm font-medium text-[#029fae]">
                Home
              </NavLink>
              <NavLink to="/" className="text-[#636270] text-sm font-medium ">
                Shop
              </NavLink>
              <NavLink to="/" className="text-[#636270] text-sm font-medium ">
                Product
              </NavLink>
              <NavLink to="/" className="text-[#636270] text-sm font-medium ">
                Pages
              </NavLink>
              <NavLink to="/" className="text-[#636270] text-sm font-medium ">
                About
              </NavLink>
            </nav>
          </div>

          <div className="navbar_bottom_right">
            <div>
              <p className="text-[#636270]">
                Contact:
                <span className="text-[#272343]"> +254 720 000 00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
