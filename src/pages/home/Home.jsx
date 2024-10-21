import './home.css'
import ContentSlider from "../../components/sliders/content_slider/ContentSlider";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

export default function Home() {

    useEffect(() => {
        console.log('component did mount (HOME)');

    })
    return (

        <>
            <ContentSlider />



            {/* select Categories */}

            <p className="text-white font-bold text-xl mt-10">Select Categories</p>


            {/* List Categories */}

            <ul class="flex gap-x-5 mt-4">
                <li class="text-white px-5 py-1 border border-white rounded-2xl hover:bg-teal-600 hover:border-none transition-all cursor-pointer">All</li>
                <li class="text-white px-5 py-1 border border-white rounded-2xl hover:bg-teal-600 hover:border-none transition-all cursor-pointer">Relax</li>
                <li class="text-white px-5 py-1 border border-white rounded-2xl hover:bg-teal-600 hover:border-none transition-all cursor-pointer">Sad</li>
                <li class="text-white px-5 py-1 border border-white rounded-2xl hover:bg-teal-600 hover:border-none transition-all cursor-pointer">Party</li>
                <li class="text-white px-5 py-1 border border-white rounded-2xl hover:bg-teal-600 hover:border-none transition-all cursor-pointer">Romance</li>
                <li class="text-white px-5 py-1 border border-white rounded-2xl hover:bg-teal-600 hover:border-none transition-all cursor-pointer">Energetic</li>
                <li class="text-white px-5 py-1 border border-white rounded-2xl hover:bg-teal-600 hover:border-none transition-all cursor-pointer">Relaxing</li>
                <li class="text-white px-5 py-1 border border-white rounded-2xl hover:bg-teal-600 hover:border-none transition-all cursor-pointer">Jazz</li>
                <li class="text-white px-5 py-1 border border-white rounded-2xl hover:bg-teal-600 hover:border-none transition-all cursor-pointer">Alternative
                </li>
            </ul>


            {/* Slider Categories */}
            <>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={5}
                    freeMode={true}
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="text-white mt-3 text-sm"
                >
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=10" alt="" />
                            </div>
                            <div className='text-white'>
                                <p className='font-bold'>Golden Days</p>
                                <p>Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=11" alt="" />
                            </div>
                            <div className='text-white'>
                                <p className='font-bold'>Golden Days</p>
                                <p>Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=12" alt="" />
                            </div>
                            <div className='text-white'>
                                <p className='font-bold'>Golden Days</p>
                                <p>Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=13" alt="" />
                            </div>
                            <div className='text-white'>
                                <p className='font-bold'>Golden Days</p>
                                <p>Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=14" alt="" />
                            </div>
                            <div className='text-white'>
                                <p className='font-bold'>Golden Days</p>
                                <p>Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=15" alt="" />
                            </div>
                            <div className='text-white'>
                                <p className='font-bold'>Golden Days</p>
                                <p>Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=16" alt="" />
                            </div>
                            <div className='text-white'>
                                <p className='font-bold'>Golden Days</p>
                                <p>Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=17" alt="" />
                            </div>
                            <div className='text-white'>
                                <p className='font-bold'>Golden Days</p>
                                <p>Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </>

        </>
    )



}