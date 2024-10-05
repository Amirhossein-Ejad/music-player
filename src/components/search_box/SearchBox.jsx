import { useRef } from "react";
export default function SearchBox() {

    const refInput = useRef()

    const focusInput = () => {
        refInput.current.focus()

    }
    return (
        <div onClick={focusInput} className="flex justify-between items-center p-5 rounded-md h-10 bg-gray-700 opacity-80">
            <input ref={refInput} className="outline-none border-none bg-transparent text-[#afb0b2]" placeholder="search for song"></input>
            <svg onClick={focusInput} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ color: "#afb0b2" }} class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>


        </div>
    )
}