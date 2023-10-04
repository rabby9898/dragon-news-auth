import { useLoaderData } from "react-router-dom";
import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Header from "../../Components/Shared/Header/Header";
import LeftSideNav from "../../Components/Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import RightSideNav from "../../Components/Shared/RightSideNav/RightSideNav";
import NewsCard from "../../Components/NewsCard/NewsCard";

const Home = () => {
  const news = useLoaderData();
  return (
    <div className="font-poppins">
      <div className="px-32">
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 py-20 gap-5  px-32">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
          <div>
            {news.map((card) => (
              <NewsCard key={card._id} card={card}></NewsCard>
            ))}
          </div>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
