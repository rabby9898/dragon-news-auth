import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div>
      <div className="text-center my-10">
        <img className="flex justify-center mx-auto" src={logo} alt="" />
        <p className="text-lg text-[#706F6F] my-4">
          Journalism Without Fear or Favour
        </p>
        <h4 className="text-xl text-[#403F3F] font-medium">
          {moment().format("LLLL")}
        </h4>
      </div>
    </div>
  );
};

export default Header;
