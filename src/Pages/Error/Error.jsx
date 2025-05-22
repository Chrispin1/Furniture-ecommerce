import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center pt-[200px]">
      <h1 className="text-5xl font-semibold">Hmmm...Page not Found</h1>
      <button className="rounded-full bg-[#029fae] px-5 py-3">
        <Link to="/">Go to Homepage</Link>
      </button>
    </div>
  );
};

export default Error;
