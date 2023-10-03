import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";

const LeftSideNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl text-[#353148] font-semibold mb-8">
          All Category
        </h1>
        <div className="">
          {category.map((item) => (
            <NavLink
              className="w-full block px-8 py-4 text-xl text-[#9F9F9F] hover:bg-[#9F9F9F] hover hover:text-black hover:font-semibold hover:rounded-lg"
              key={item.id}
              to={`/category/${item.id}`}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="card w-full bg-base-100">
          <img src={img1} alt="news" />
          <div className="w-full my-5">
            <h2 className="card-title text-[#403F3F] text-xl text-semibold">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex justify-between my-8">
              <p>Sports</p>
              <div className="flex justify-center items-center gap-2">
                <FaCalendarAlt className="text-base"></FaCalendarAlt>
                {moment().format("LL")}
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100">
          <img src={img2} alt="news" />
          <div className="w-full my-5">
            <h2 className="card-title text-[#403F3F] text-xl text-semibold">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex justify-between my-8">
              <p>Sports</p>
              <div className="flex justify-center items-center gap-2">
                <FaCalendarAlt className="text-base"></FaCalendarAlt>
                {moment().format("LL")}
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100">
          <img src={img3} alt="news" />
          <div className="w-full my-5">
            <h2 className="card-title text-[#403F3F] text-xl text-semibold">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex justify-between my-8">
              <p>Sports</p>
              <div className="flex justify-center items-center gap-2">
                <FaCalendarAlt className="text-base"></FaCalendarAlt>
                {moment().format("LL")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideNav;
