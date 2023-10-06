import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="w-full flex gap-0 md:gap-2 bg-[#F3F3F3] items-center p-2 md:p-5">
      <div>
        <button
          className="btn btn-secondary bg-[#D72050] rounded-none text-white px-2 md:px-4 lg:px-8
        "
        >
          Latest
        </button>
      </div>
      <div className="w-[200px] md:w-full">
        <Marquee speed={100} style={{ width: "100%" }}>
          <Link
            className="mr-5 md:mr-10 text-lg text-[#403F3F] font-medium"
            to="/"
          >
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link
            className="mr-5 md:mr-10 text-lg text-[#403F3F] font-medium"
            to="/"
          >
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link
            className="mr-5 md:mr-10 text-lg text-[#403F3F] font-medium"
            to="/"
          >
            I can be a React component, multiple React components, or just some
            text.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
