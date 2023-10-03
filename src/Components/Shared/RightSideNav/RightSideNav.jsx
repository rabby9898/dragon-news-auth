import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone2.png";

const RightSideNav = () => {
  return (
    <div className="">
      <div className="pb-8">
        <h4 className="text-xl text-[#403F3F] font-medium mb-8">Login With</h4>
        <div>
          <button className="w-full flex justify-center items-center bg-transparent text-black border border-black hover:text-[#446FD5] hover:border-[#446FD5] rounded-md py-2 gap-2 mb-3">
            <FaFacebookF /> Login With Google
          </button>
          <button className="w-full flex justify-center items-center bg-transparent text-black border border-black rounded-md py-2 gap-2 hover:text-[#446FD5] hover:border-[#446FD5]">
            <FaTwitter /> Login With Twitter
          </button>
        </div>
      </div>

      <div>
        <h4 className="text-xl text-[#403F3F] font-medium mt-10 mb-8">
          Find Us On
        </h4>
        <div>
          <a
            className="flex justify-start px-8 items-center gap-2 border rounded-t-lg py-4 "
            href="#"
          >
            <FaFacebookF className="bg-[#F3F3F3] rounded-full text-xl text-[#3B599C]" />
            <span>Facebook</span>
          </a>
          <a
            className="flex justify-start px-8 items-center gap-2 border-x py-4 "
            href="#"
          >
            <FaTwitter className="bg-[#F3F3F3] rounded-full text-xl text-[#58A7DE]" />
            <span>Twitter</span>
          </a>
          <a
            className="flex justify-start px-8 items-center gap-2 border rounded-b-lg py-4 "
            href="#"
          >
            <FaInstagram className="bg-[#F3F3F3] rounded-full text-xl text-[#D82D7E]" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="p-4 bg-[#F3F3F3] my-8">
        <h4 className="text-xl text-[#403F3F] font-medium mt-10 mb-8">
          Q Zone
        </h4>
        <div>
          <div>
            <img className="w-full" src={qZone1} alt="" />
            <img className="w-full" src={qZone2} alt="" />
            <img className="w-full" src={qZone3} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div
          className="hero h-[700px]"
          style={{
            backgroundImage: "url(https://i.ibb.co/fn7rZtz/bg.png",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-white font-bold">
                Create an Amazing Newspaper
              </h1>
              <p className=" text-xl font-normal my-10">
                Discover thousands of options, easy to customize layouts,
                one-click to import demo and much more.
              </p>
              <button className=" btn btn-secondary bg-[#D72050] rounded-none text-white px-8">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
