import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
  const [newsCard, setNewsCards] = useState([]);
  const { id } = useParams();
  const news = useLoaderData();

  useEffect(() => {
    const selectNews = news?.find((aNews) => aNews._id == id);
    setNewsCards(selectNews);
  }, [id, news]);

  const { title, image_url, details } = newsCard;
  return (
    <div className=" px-32">
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-3 gap-20 my-10">
        <div className="col-span-2 p-10 border border-gray-200 rounded-lg w-full h-max">
          <img className="w-full" src={image_url} alt="" />
          <h1 className="text-3xl font-semibold text-black my-5">{title}</h1>
          <p className="text-base text-[#706F6F] text-justify my-5">
            {details}
          </p>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
