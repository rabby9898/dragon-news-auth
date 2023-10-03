import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex gap-2 bg-[#F3F3F3] justify-center items-center p-5">
      <div>
        <button
          className="btn btn-secondary bg-[#D72050] rounded-none text-white
        "
        >
          Latest
        </button>
      </div>
      <div className="">
        <Marquee speed={100}>
          <Link className="mr-10 text-lg text-[#403F3F] font-medium" to="/">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link className="mr-10 text-lg text-[#403F3F] font-medium" to="/">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link className="mr-10 text-lg text-[#403F3F] font-medium" to="/">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
