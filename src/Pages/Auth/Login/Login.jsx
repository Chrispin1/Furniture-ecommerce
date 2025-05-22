import { Link, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const submitHandle = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="lg:container mx-auto ">
        <div className="w-full flex items-center justify-center pt-10 ">
          <div className="min-w-[500px] py-10 px-10 border border-gray-400 rounded-lg bg-gray-50">
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="text-3xl font-semibold text-gray-800">Register</h1>
              <div className="w-full pt-8">
                <form onSubmit={submitHandle} className="w-full flex flex-col">
                  <label htmlFor="name" className="px-2 text-md font-medium">
                    Name
                  </label>
                  <input
                    type="name"
                    placeholder="Your Name..."
                    className="border border-gray-400 w-full rounded-full px-3 py-3 focus:outline-[#029fae]"
                  />
                  <label
                    htmlFor="email"
                    className="px-2 text-md font-medium pt-4"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email..."
                    className="border border-gray-400 w-full rounded-full px-3 py-3 focus:outline-[#029fae]"
                  />
                  <label
                    htmlFor="password"
                    className="px-2 text-md font-medium pt-4"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create password..."
                    className="border border-gray-400 w-full rounded-full px-3 py-3 focus:outline-[#029fae]"
                  />
                  <div className="flex items-center pt-4 ">
                    <button className="bg-[#029fae] text-center text-white w-full py-2 rounded-full cursor-pointer">
                      Login
                    </button>
                  </div>
                </form>

                <p className="text-md pt-4 text-gray-500 mb-6">
                  Don't have an account?{" "}
                  <Link to="/auth/login">
                    <span className="text-[#029fae]">Register</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
