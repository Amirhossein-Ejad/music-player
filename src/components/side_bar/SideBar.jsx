import logoimg from "./../side_bar/sound-icon.png"
import { Link, NavLink } from "react-router-dom";
import "./sideBar.css"
export default function SideBar() {

  return (
    <>
      <div className=" flex flex-[1_1_0] h-screen items-center ">
        <div className="w-full h-[94%] bg-secondary_dark rounded-3xl">
          {/* logo & image sidebar */}
          <Link to={'/'} className=" justify-center flex items-center gap-x-2 pt-3">
            <img className="cursor-pointer w-5 h-5 inline-block" src={logoimg} alt="logoimg" />
            <p className="cursor-pointer text-[#ff7400]">RhythmoTune</p>
          </Link>
          {/* Menu */}
          <div className="flex flex-col mt-12 gap-y-6 items-center text-white ">
            <NavLink to={"/"} className={({ isActive, isPending, isTransitioning }) =>
              [isActive ? "active" : "", isPending ? "" : "", isTransitioning ? "" : ""].join(" flex gap-x-1 justify-start items-center cursor-pointer hover:bg-[#313237] w-[95%] rounded-2xl px-4 py-3")}>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <p >Home</p>
            </NavLink>
            <NavLink to={"/categories"} className={({ isActive, isPending, isTransitioning }) =>
              [isActive ? "active" : "", isPending ? "" : "", isTransitioning ? "" : ""].join(" flex gap-x-1 justify-start items-center cursor-pointer hover:bg-[#313237] w-[95%] rounded-2xl px-4 py-3")}>
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>Categories</p>
            </NavLink>
            <NavLink to={"/artists"} className={({ isActive, isPending, isTransitioning }) =>
              [isActive ? "active" : "", isPending ? "" : "", isTransitioning ? "" : ""].join(" flex gap-x-1 justify-start items-center cursor-pointer hover:bg-[#313237] w-[95%] rounded-2xl px-4 py-3")}>
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <p>Artists</p>
            </NavLink>
            <NavLink to={"/playlists"} className={({ isActive, isPending, isTransitioning }) =>
              [isActive ? "active" : "", isPending ? "" : "", isTransitioning ? "" : ""].join(" flex gap-x-1 justify-start items-center cursor-pointer hover:bg-[#313237] w-[95%] rounded-2xl px-4 py-3")}>
              <svg className="text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M21 6L3 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M21 10L3 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M11 14L3 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M11 18H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M18.875 14.1183C20.5288 15.0732 21.3558 15.5506 21.4772 16.2394C21.5076 16.4118 21.5076 16.5881 21.4772 16.7604C21.3558 17.4492 20.5288 17.9266 18.875 18.8815C17.2212 19.8363 16.3942 20.3137 15.737 20.0745C15.5725 20.0147 15.4199 19.9265 15.2858 19.814C14.75 19.3644 14.75 18.4096 14.75 16.4999C14.75 14.5902 14.75 13.6354 15.2858 13.1858C15.4199 13.0733 15.5725 12.9852 15.737 12.9253C16.3942 12.6861 17.2212 13.1635 18.875 14.1183Z" stroke="currentColor" stroke-width="1.5" />
              </svg>
              <td>Playlists</td>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
