import { useRef } from "react";
import closeSvg from './close.svg'
export default function SearchBox() {



    const serchBoxMobile = useRef()
    const wrapperSerchBoxMobile = useRef()
    const inputSerchBoxMobile = useRef()
    const inputSerchBox = useRef()

    const showSerchBoxMobile = () => {

        wrapperSerchBoxMobile.current.classList.toggle('translate-y-[-100%]');
        wrapperSerchBoxMobile.current.classList.toggle('translate-y-[0]');
        serchBoxMobile.current.classList.toggle('-translate-y-24');
        serchBoxMobile.current.classList.toggle('translate-y-0');
        console.log('show showserchBoxMobile');

    }
    const closeSerchBoxMobile = () => {
        wrapperSerchBoxMobile.current.classList.toggle('translate-y-[-100%]');
        wrapperSerchBoxMobile.current.classList.toggle('translate-y-[0]');
        serchBoxMobile.current.classList.toggle('-translate-y-24');
        serchBoxMobile.current.classList.toggle('translate-y-0');
        inputSerchBoxMobile.current.value = null
        inputSerchBox.current.value = null

        console.log('inputSerchBoxMobile Clear');
        console.log('inputSerchBox Clear');

    }

    const searchHandling = () => {
        let valueInputSearch = inputSerchBoxMobile.current.value
        let valueInputSerchBox = inputSerchBox.current.value ? inputSerchBox.current.value : null
        console.log('Start Search for :', valueInputSearch);
        console.log('Start Search for :', valueInputSerchBox);

    }

    const focucHandler = () => {
        inputSerchBoxMobile.current.focus()

    }
    return (
        <>
            <div className="hidden md:flex justify-between items-center p-5 rounded-3xl h-10 bg-gray-700 opacity-80">
                <input ref={inputSerchBox} className="outline-none border-none bg-transparent text-[#afb0b2]" placeholder="search for song"></input>
                <svg onClick={searchHandling} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ color: "#afb0b2" }} class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            {/* Mobile */}
            <div className="brightness-200 flex justify-start items-center lg:opacity-80 md:hidden ">
                <svg onClick={showSerchBoxMobile} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ color: "#afb0b2" }} class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            {/* wpapper */}
            <div ref={wrapperSerchBoxMobile} onClick={closeSerchBoxMobile} className="w-full h-screen absolute inset-0 bg-black opacity-85 transition-transform translate-y-[-100%] z-10"></div>
            <div onClick={focucHandler} ref={serchBoxMobile} className="flex justify-center items-center w-90% h-20 mx-auto absolute inset-0 top-0 text-white bg-gray-700 -translate-y-24 transition-transform z-20" >
                <input ref={inputSerchBoxMobile} className="outline-none border-none bg-transparent" placeholder="search for song"></input>
                <svg onClick={searchHandling} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ color: "#afb0b2" }} class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <div onClick={closeSerchBoxMobile}>
                    <img className="w-7 h-7 felx justify-center items-center absolute top-3 right-3 bg-slate-800 p-1 rounded-md" src={closeSvg} alt="closeSvg" />
                </div>
            </div >
        </>
    )
}