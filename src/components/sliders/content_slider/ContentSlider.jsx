// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './ContentSlider.css'


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
export default function ContentSlider() {

    return (
        <div className='h-[200px] overflow-hidden'>
            <Swiper
                slidesPerView={'auto'}
                loop={true}
                autoplay={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className='flex w-full h-full justify-center items-center relative'>
                        <img className='absolute z-0 object-contain object-center blur-[.4px] opacity-90' src="https://picsum.photos/200/300?random=1" alt="cover music" />
                        {/* content Bottom */}
                        <div className='absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center w-full'>
                            {/* title & description */}
                            <div className='flex justify-between items-center text-start text-white p-2 w-full bg-gradient-to-b from-transparent to-secondary_dark'>
                                <div>
                                    <p className='font-bold'>Title Music</p>
                                    <p className='text-md'>Description Music</p>
                                </div>
                                {/* icon Play */}
                                <div className='flex justify-center items-center rounded-full bg-[#ffffff30] w-min p-2 cursor-pointer'>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex w-full h-full justify-center items-center relative'>
                        <img className='absolute z-0 object-contain object-center blur-[.4px] opacity-90' src="https://picsum.photos/200/300?random=2" alt="cover music" />
                        {/* content Bottom */}
                        <div className='absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center w-full'>
                            {/* title & description */}
                            <div className='flex justify-between items-center text-start text-white p-2 w-full bg-gradient-to-b from-transparent to-secondary_dark'>
                                <div>
                                    <p className='font-bold'>Title Music</p>
                                    <p className='text-md'>Description Music</p>
                                </div>
                                {/* icon Play */}
                                <div className='flex justify-center items-center rounded-full bg-[#ffffff30] w-min p-2 cursor-pointer'>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex w-full h-full justify-center items-center relative'>
                        <img className='absolute z-0 object-contain object-center blur-[.4px] opacity-90' src="https://picsum.photos/200/300?random=3" alt="cover music" />
                        {/* content Bottom */}
                        <div className='absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center w-full'>
                            {/* title & description */}
                            <div className='flex justify-between items-center text-start text-white p-2 w-full bg-gradient-to-b from-transparent to-secondary_dark'>
                                <div>
                                    <p className='font-bold'>Title Music</p>
                                    <p className='text-md'>Description Music</p>
                                </div>
                                {/* icon Play */}
                                <div className='flex justify-center items-center rounded-full bg-[#ffffff30] w-min p-2 cursor-pointer'>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex w-full h-full justify-center items-center relative'>
                        <img className='absolute z-0 object-contain object-center blur-[.4px] opacity-90' src="https://picsum.photos/200/300?random=4" alt="cover music" />
                        {/* content Bottom */}
                        <div className='absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center w-full'>
                            {/* title & description */}
                            <div className='flex justify-between items-center text-start text-white p-2 w-full bg-gradient-to-b from-transparent to-secondary_dark'>
                                <div>
                                    <p className='font-bold'>Title Music</p>
                                    <p className='text-md'>Description Music</p>
                                </div>
                                {/* icon Play */}
                                <div className='flex justify-center items-center rounded-full bg-[#ffffff30] w-min p-2 cursor-pointer'>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex w-full h-full justify-center items-center relative'>
                        <img className='absolute z-0 object-contain object-center blur-[.4px] opacity-90' src="https://picsum.photos/200/300?random=5" alt="cover music" />
                        {/* content Bottom */}
                        <div className='absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center w-full'>
                            {/* title & description */}
                            <div className='flex justify-between items-center text-start text-white p-2 w-full bg-gradient-to-b from-transparent to-secondary_dark'>
                                <div>
                                    <p className='font-bold'>Title Music</p>
                                    <p className='text-md'>Description Music</p>
                                </div>
                                {/* icon Play */}
                                <div className='flex justify-center items-center rounded-full bg-[#ffffff30] w-min p-2 cursor-pointer'>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex w-full h-full justify-center items-center relative'>
                        <img className='absolute z-0 object-contain object-center blur-[.4px] opacity-90' src="https://picsum.photos/200/300?random=6" alt="cover music" />
                        {/* content Bottom */}
                        <div className='absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center w-full'>
                            {/* title & description */}
                            <div className='flex justify-between items-center text-start text-white p-2 w-full bg-gradient-to-b from-transparent to-secondary_dark'>
                                <div>
                                    <p className='font-bold'>Title Music</p>
                                    <p className='text-md'>Description Music</p>
                                </div>
                                {/* icon Play */}
                                <div className='flex justify-center items-center rounded-full bg-[#ffffff30] w-min p-2 cursor-pointer'>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex w-full h-full justify-center items-center relative'>
                        <img className='absolute z-0 object-contain object-center blur-[.4px] opacity-90' src="https://picsum.photos/200/300?random=7" alt="cover music" />
                        {/* content Bottom */}
                        <div className='absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center w-full'>
                            {/* title & description */}
                            <div className='flex justify-between items-center text-start text-white p-2 w-full bg-gradient-to-b from-transparent to-secondary_dark'>
                                <div>
                                    <p className='font-bold'>Title Music</p>
                                    <p className='text-md'>Description Music</p>
                                </div>
                                {/* icon Play */}
                                <div className='flex justify-center items-center rounded-full bg-[#ffffff30] w-min p-2 cursor-pointer'>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex w-full h-full justify-center items-center relative'>
                        <img className='absolute z-0 object-contain object-center blur-[.4px] opacity-90' src="https://picsum.photos/200/300?random=8" alt="cover music" />
                        {/* content Bottom */}
                        <div className='absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center w-full'>
                            {/* title & description */}
                            <div className='flex justify-between items-center text-start text-white p-2 w-full bg-gradient-to-b from-transparent to-secondary_dark'>
                                <div>
                                    <p className='font-bold'>Title Music</p>
                                    <p className='text-md'>Description Music</p>
                                </div>
                                {/* icon Play */}
                                <div className='flex justify-center items-center rounded-full bg-[#ffffff30] w-min p-2 cursor-pointer'>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex w-full h-full justify-center items-center relative'>
                        <img className='absolute z-0 object-contain object-center blur-[.4px] opacity-90' src="https://picsum.photos/200/300?random=9" alt="cover music" />
                        {/* content Bottom */}
                        <div className='absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center w-full'>
                            {/* title & description */}
                            <div className='flex justify-between items-center text-start text-white p-2 w-full bg-gradient-to-b from-transparent to-secondary_dark'>
                                <div>
                                    <p className='font-bold'>Title Music</p>
                                    <p className='text-md'>Description Music</p>
                                </div>
                                {/* icon Play */}
                                <div className='flex justify-center items-center rounded-full bg-[#ffffff30] w-min p-2 cursor-pointer'>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
