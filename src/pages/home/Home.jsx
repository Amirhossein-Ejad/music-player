import './home.css'
import ContentSlider from "../../components/sliders/content_slider/ContentSlider";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

export default function Home() {

    return (

        <>
            <ContentSlider />

            {/* select Categories */}

            <p className="text-white font-bold text-xl mb-4 mt-10">Select Categories</p>

            {/* List Categories */}

            <ul class="flex gap-x-5 my-4 overflow-x-scroll lg:overflow-x-hidden">
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
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            spaceBetween: 10,
                            slidesPerView: 3,
                        },
                        // when window width is >= 640px
                        640: {
                            spaceBetween: 15,
                            slidesPerView: 4,
                        },
                        // when window width is >= 768px
                        1080: {
                            spaceBetween: 30,
                            slidesPerView: 5,
                        },
                    }}
                    slidesPerView={6}
                    spaceBetween={5}
                    freeMode={true}
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="text-white mt-3 mb-20 text-sm"
                >

                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl text-white bg-white' src="https://picsum.photos/100/120?random=10 " alt="picsum.photos" />
                            </div>
                            <div className='text-white'>
                                <p className="font-bold sm:text-sm lg:text-base line-clamp-1" >Golden Days</p>
                                <p className="sm:text-sm lg:text-base line-clamp-1">Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=11" alt="picsum.photos" />
                            </div>
                            <div className='text-white'>
                                <p className="font-bold sm:text-sm lg:text-base line-clamp-1" >Golden Days</p>
                                <p className="sm:text-sm lg:text-base line-clamp-1">Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=12" alt="picsum.photos" />
                            </div>
                            <div className='text-white'>
                                <p className="font-bold sm:text-sm lg:text-base line-clamp-1" >Golden Days</p>
                                <p className="sm:text-sm lg:text-base line-clamp-1">Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=13" alt="picsum.photos" />
                            </div>
                            <div className='text-white'>
                                <p className="font-bold sm:text-sm lg:text-base line-clamp-1" >Golden Days</p>
                                <p className="sm:text-sm lg:text-base line-clamp-1">Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=14" alt="picsum.photos" />
                            </div>
                            <div className='text-white'>
                                <p className="font-bold sm:text-sm lg:text-base line-clamp-1" >Golden Days</p>
                                <p className="sm:text-sm lg:text-base line-clamp-1">Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=15" alt="picsum.photos" />
                            </div>
                            <div className='text-white'>
                                <p className="font-bold sm:text-sm lg:text-base line-clamp-1" >Golden Days</p>
                                <p className="sm:text-sm lg:text-base line-clamp-1">Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=16" alt="picsum.photos" />
                            </div>
                            <div className='text-white'>
                                <p className="font-bold sm:text-sm lg:text-base line-clamp-1" >Golden Days</p>
                                <p className="sm:text-sm lg:text-base line-clamp-1">Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-3 overflow-hidden rounded-xl border border-emerald-400'>
                            <div className=' overflow-hidden '>
                                <img className=' rounded-xl' src="https://picsum.photos/100/120?random=17" alt="picsum.photos" />
                            </div>
                            <div className='text-white'>
                                <p className="font-bold sm:text-sm lg:text-base line-clamp-1" >Golden Days</p>
                                <p className="sm:text-sm lg:text-base line-clamp-1">Felix Carter</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </>

        </>
    )



}