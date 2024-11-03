import backwardSvg from './backward.svg'
import forwardSvg from './forward.svg'
import pauseSvg from './pause.svg'
import audioTest from './audioTest.mp3'
import heartPng from './heart.png'
import volumePng from './volume.png'
import randomPng from './random.png'
import repeatPng from './repeat.png'


export default function Footer() {
    return (
        <>
            <div className='fixed left-0 right-0 bottom-0 w-full'>
                <div className="flex items-center justify-between px-10 sm:gap-x-10  lg:gap-x-20 w-full h-16 bg-secondary_ligth absolute left-0 right-0 bottom-0">
                    {/* icon & title music */}
                    <div>
                        <div className="flex gap-x-4 items-center p-2">
                            <div className="h-10 w-10 overflow-hidden rounded-full">
                                <img src="https://picsum.photos/40/40?random=30" alt="cover music" />
                            </div>
                            <div className="flex flex-col min-w-min text-white">
                                <p className=" font-bold line-clamp-1 sm:text-sm lg:text-base">Title Music</p>
                                <p className=" line-clamp-1 sm:text-sm lg:text-base">Artist music</p>
                            </div>
                        </div>
                    </div>
                    {/* Controler */}
                    <div className="flex sm:gap-x-1 lg:gap-x-3  ">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center   hover:bg-gray-600 p-2 cursor-pointer">
                            <img className="" src={backwardSvg} alt="backwardSvg" />
                        </div>
                        <div className="w-10 h-10 flex justify-center items-center rounded-full overflow-hidden  hover:bg-gray-600 p-2 cursor-pointer">
                            <img className='w-4' src={pauseSvg} alt="forwardSvg" />
                        </div>
                        <div className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center hover:bg-gray-600 p-2 cursor-pointer">
                            <img src={forwardSvg} alt="forwardSvg" />
                        </div>
                    </div>
                    {/* player*/}
                    <div className='hidden md:flex justify-center items-center w-[40%] '>
                        <audio src={audioTest} ></audio>
                        <input type="range" className="accent-white  w-full" />
                    </div>
                    {/* like & random & volume */}
                    <div className='hidden md:flex justify-center items-center md:gap-x-4 lg:gap-x-6'>
                        <div className='flex justify-center items-center p-2 rounded-full hover:bg-gray-600 cursor-pointer'>
                            <img className=' w-6 h-6 ' src={heartPng} alt='heartPng'></img>
                        </div>
                        <div className='flex justify-center items-center p-2 rounded-full hover:bg-gray-600 cursor-pointer'>
                            <img className=' w-6 h-6 ' src={randomPng} alt='randomPng'></img
                            ></div>
                        <div className='flex justify-center items-center p-2 rounded-full hover:bg-gray-600 cursor-pointer'>
                            <img className=' w-6 h-6 ' src={repeatPng} alt='repeatPng'></img>
                        </div>
                        <div className='flex justify-center items-center p-2 rounded-full hover:bg-gray-600 cursor-pointer'>
                            <img className=' w-6 h-6 ' src={volumePng} alt='volumePng'></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}