import SearchBox from "../search_box/SearchBox";
import profileIMG from './../header/profile.jpg';
import accountSvg from './account.svg';
import menuSvg from './menu.svg';
import { useRef } from "react";
import MenuNavLinks from "../menu_NavLinks/MenuNavLinks";
import closeSvg from './close.svg'

export default function Header() {

  const accountMenu = useRef()
  const wrapperBlur = useRef()
  const wrapperBlurPagesMenu = useRef()
  const pagesMenu = useRef()


  const showAccoungSetting = () => {
    accountMenu.current.classList.remove('-translate-x-[100%]')
    wrapperBlur.current.classList.remove('-translate-x-[100%]')
    wrapperBlur.current.classList.add('translate-x-[0]')
    accountMenu.current.classList.add('translate-x-[0]')
  }

  const closeAccoungSetting = () => {
    accountMenu.current.classList.add('-translate-x-[100%]')
    wrapperBlur.current.classList.add('-translate-x-[100%]')
    wrapperBlur.current.classList.remove('translate-x-[0]')
    accountMenu.current.classList.remove('translate-x-[0]')
  }

  const showPagesMenu = () => {

    wrapperBlurPagesMenu.current.classList.add('translate-x-[0]')
    pagesMenu.current.classList.add('translate-x-[0]')
    wrapperBlurPagesMenu.current.classList.remove('translate-x-[100%]')
    pagesMenu.current.classList.remove('translate-x-[100%]')
  }

  const closePagesMenu = () => {
    wrapperBlurPagesMenu.current.classList.remove('translate-x-[0]')
    pagesMenu.current.classList.remove('translate-x-[0]')
    wrapperBlurPagesMenu.current.classList.add('translate-x-[100%]')
    pagesMenu.current.classList.add('translate-x-[100%]')
  }



  return (
    <div className="flex justify-start gap-x-4 items-center border-b border-b-emerald-700 w-full h-10 lg:justify-between lg:border-none">
      <SearchBox />

      {/* profile & setting */}
      <div className="hidden lg:flex justify-evenly items-center gap-x-3">
        {/* profile */}
        <div className="flex justify-between items-center gap-x-2 cursor-pointer" >
          <img className="overflow-hidden w-10 h-10 object-cover object-center rounded-full" src={profileIMG} alt="profileIMG" />
          <div className="flex flex-col items-start">
            <p className="text-white">Molly Hunter</p>
            <p className="bg-gray-700 rounded-lg px-2 text-xs text-slate-100">Premium</p>
          </div>
        </div>
        {/*like & setting */}
        <div className="flex justify-between items-center gap-x-3">
          <div className="flex justify-center items-center rounded-full text-white bg-gray-700 bg-opacity-80 w-10 h-10 object-cover object-center overflow-hidden cursor-pointer">
            <svg className="cursor-pointer w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>
          <div className="flex justify-center items-center rounded-full text-white bg-gray-700 bg-opacity-80 w-10 h-10 object-cover object-center overflow-hidden cursor-pointer">
            <svg className="cursor-pointer w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
        </div>
      </div>
      {/* Mobile */}
      {/* Account Icon Mobile */}
      <div onClick={showAccoungSetting} className="flex justify-center items-center rounded-full w-8 h-8 object-cover object-center overflow-hidden cursor-pointer lg:hidden">
        <img className="cursor-pointer w-5 h-5" src={accountSvg} alt="accountSvg" />
      </div>
      {/* Menu icon Mobile */}
      <div onClick={showPagesMenu} className="flex justify-center items-center rounded-full w-8 h-8 object-cover object-center overflow-hidden cursor-pointer lg:hidden">
        <img className="cursor-pointer w-5 h-5" src={menuSvg} alt="accountSvg" />
      </div>
      {/* Menu Account  */}
      {/* wrapper blur */}
      <div ref={wrapperBlur} onClick={closeAccoungSetting} className="w-full h-screen bg-black opacity-70 absolute top-0 left-0 bottom-0 transition-transform -translate-x-[100%] z-10 lg:hidden"></div>
      <div ref={accountMenu} onClick={showAccoungSetting} className="w-[50%] h-screen bg-secondary_ligth absolute top-0 left-0 bottom-0 -translate-x-[100%] z-20 lg:hidden"></div>


      <div onClick={closePagesMenu} ref={wrapperBlurPagesMenu} className="w-full h-screen bg-black opacity-70 absolute top-0 right-0 bottom-0 transition-transform translate-x-[100%] z-10 lg:hidden"></div>
      <div ref={pagesMenu} className="w-[50%] h-screen bg-secondary_ligth absolute top-0 right-0 bottom-0 translate-x-[100%] z-20 lg:hidden">
        <div onClick={closePagesMenu} className="mb-16">
          <img className="w-7 h-7 felx justify-center items-center absolute top-3 right-3 p-1 rounded-md" src={closeSvg} alt="closeSvg" />
        </div>
        <div className="flex flex-col mt-12 gap-y-6 items-center text-white ">
          <MenuNavLinks onclosePagesMenu={closePagesMenu} />
        </div>
      </div>

    </div>


  );
}
