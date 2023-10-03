import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Header from "../../Components/Shared/Header/Header";
import LeftSideNav from "../../Components/Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import RightSideNav from "../../Components/Shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div className="font-poppins border px-32">
      <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 my-20">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">All News Here..</div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
