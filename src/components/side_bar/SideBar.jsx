import logoimg from "./../side_bar/sound-icon.png"
import { Link } from "react-router-dom";
import "./sideBar.css"
import MenuNavLinks from "../menu_NavLinks/MenuNavLinks";

export default function SideBar() {

  return (
    <>
      <div className="hidden lg:flex flex-[1_1_0] h-fit items-start mt-5  ">
        <div className="w-full bg-secondary_dark h-[600px] rounded-3xl">
          {/* logo & image sidebar */}
          <Link to={'/'} className=" justify-center flex items-center gap-x-2 pt-3">
            <img className="cursor-pointer w-5 h-5 inline-block" src={logoimg} alt="logoimg" />
            <p className="cursor-pointer text-[#ff7400]">RhythmoTune</p>
          </Link>
          {/* Menu */}
          <div className="flex flex-col mt-12 gap-y-6 items-center text-white ">
            <MenuNavLinks />
          </div>
        </div>
      </div>
    </>
  );
}
