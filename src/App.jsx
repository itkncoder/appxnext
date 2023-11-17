import Navbar from "./components/navbar/navbar"
import Wrapper from "./layout/wrapper"
import logo from "./assets/logo.png"
import Footer from "./components/footer/footer"

import arashov from "./assets/arashov.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';

import { Pagination } from 'swiper/modules';

const App = () => {
    return (
        <div className="bg-[#161616] app min-h-screen">

            <Navbar/>

            <div>
                <Wrapper>
                    <div>
                        <div className="mt-[100px] p-[10px] lg:p-0">
                            <h1 className="font-[700] text-6xl lg:text-7xl text-white">We develop <i className="fa-solid rotate-45 ml-5 fa-star text-transparent font-extrabold bg-clip-text bg-gradient-to-r text-[50px] from-[#A599FC] to-[#5E46FF]"></i></h1>
                            <h1 className="font-[700] text-6xl lg:text-7xl text-white mt-[20px]"><span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-[#A599FC] to-[#5E46FF]">amazing</span> websites</h1>
                            <h1 className="font-[700] text-6xl lg:text-7xl text-white mt-[20px]">for your business<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A599FC] to-[#5E46FF]">.</span></h1>
                        </div>
                        <div className="p-[15px] lg:p-0">
                            <p className="text-[#BBBBC5] text-[18px] lg:text-[22px] max-w-[760px] mt-[40px]">Discover our seamless workflow as we transform Figma designs into stunning Webflow websites. Explore the synergy between design and development for a pixel-perfect online experience.</p>
                        </div>
                        <div className="mt-[50px] flex justify-start flex-col lg:flex-row items-center gap-[45px]">
                            <div>
                                <button className="btn btn-ghost border-[#5D45FD] hover:bg-[#4d42c5] btn-primary">View work <i className="fa-solid fa-chevron-right"></i></button>
                            </div>
                            <div className="flex items-center">
                                <div className="avatar-group -space-x-4">
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://proprofi.online/upload/003/u315/f/1/f1bc3c3d.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://i.ytimg.com/vi/Zy0gxAqm46M/maxresdefault.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <p className="-mb-1 text-gray text-xl">29+</p>
                                    <p className="text-gray text-lg">Satisfied clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[100px]">
                            <p className="text-center font-[700] text-xl text-white">Trusted by 30+ businesses</p>
                            <div className="flex justify-between gap-[5px] lg:gap-[35px] items-center flex-col lg:flex-row">
                                <a href="/" className="mt-[25px] shadow-2xl">
                                    <div className="hover:scale-105 transition-all cursor-pointer border-2 rounded-xl border-[#282631] py-[8px] px-[20px] w-fit">
                                        <img src={logo} alt="logo" className="h-[105px] w-[200px] object-cover" />
                                    </div>
                                </a>
                                <a href="/" className="mt-[25px] shadow-2xl">
                                    <div className="hover:scale-105 transition-all cursor-pointer border-2 rounded-xl border-[#282631] py-[8px] px-[20px] w-fit">
                                        <img src={logo} alt="logo" className="h-[105px] w-[200px] object-cover" />
                                    </div>
                                </a>
                                <a href="/" className="mt-[25px] shadow-2xl">
                                    <div className="hover:scale-105 transition-all cursor-pointer border-2 rounded-xl border-[#282631] py-[8px] px-[20px] w-fit">
                                        <img src={logo} alt="logo" className="h-[105px] w-[200px] object-cover" />
                                    </div>
                                </a>
                                <a href="/" className="mt-[25px] shadow-2xl">
                                    <div className="hover:scale-105 transition-all cursor-pointer border-2 rounded-xl border-[#282631] py-[8px] px-[20px] w-fit">
                                        <img src={logo} alt="logo" className="h-[105px] w-[200px] object-cover" />
                                    </div>
                                </a>
                                <a href="/" className="mt-[25px] shadow-2xl">
                                    <div className="hover:scale-105 transition-all cursor-pointer border-2 rounded-xl border-[#282631] py-[8px] px-[20px] w-fit">
                                        <img src={logo} alt="logo" className="h-[105px] w-[200px] object-cover" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[100px] lg:p-0 p-[15px]">
                        <div>
                            <p className="tracking-widest text-[#998DE2]">SERVICE</p>
                            <h2 className="text-4xl text-white font-[700] mt-[10px]">Exceeding Expectations <i class="fa-solid rotate-45 ml-5 fa-star text-transparent font-extrabold bg-clip-text bg-gradient-to-r text-[28px] from-[#A599FC] to-[#5E46FF]"></i></h2>
                            <p className="text-[18px] mt-[8px] max-w-2xl">We're not just another agency; we're your path to exceptional web projects.</p>
                        </div>
                        <div className="mt-[50px] flex justify-between items-center flex-wrap gap-[10px] lg:gap-[0px]">
                            <div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-fit">
                                <img src={logo} alt="logo" className="h-[100px] w-[100px] rounded-xl object-cover py-[10px] px-[10px] bg-[#34333B]" />
                                <h1 className="text-xl text-white font-[700] mt-[20px]">Expertise in Figma-to-Webflow</h1>
                                <p className="max-w-[370px] text-[18px] mt-[10px]">We have a proven track record and expertise in seamlessly turning Figma designs into functional Webflow websites.</p>
                                <div className="mt-[20px] border-2 border-[#4A494E] hover:text-black cursor-pointer rounded-lg hover:bg-white hover:border-0 transition-all flex justify-center items-center h-[60px] w-[60px]">
                                    <i class="fa-solid text-lg fa-chevron-right"></i>
                                </div>
                            </div>
                            <div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-fit">
                                <img src={logo} alt="logo" className="h-[100px] w-[100px] rounded-xl object-cover py-[10px] px-[10px] bg-[#34333B]" />
                                <h1 className="text-xl text-white font-[700] mt-[20px]">Expertise in Figma-to-Webflow</h1>
                                <p className="max-w-[370px] text-[18px] mt-[10px]">We have a proven track record and expertise in seamlessly turning Figma designs into functional Webflow websites.</p>
                                <div className="mt-[20px] border-2 border-[#4A494E] hover:text-black cursor-pointer rounded-lg hover:bg-white hover:border-0 transition-all flex justify-center items-center h-[60px] w-[60px]">
                                    <i class="fa-solid text-lg fa-chevron-right"></i>
                                </div>
                            </div>
                            <div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-fit">
                                <img src={logo} alt="logo" className="h-[100px] w-[100px] rounded-xl object-cover py-[10px] px-[10px] bg-[#34333B]" />
                                <h1 className="text-xl text-white font-[700] mt-[20px]">Expertise in Figma-to-Webflow</h1>
                                <p className="max-w-[370px] text-[18px] mt-[10px]">We have a proven track record and expertise in seamlessly turning Figma designs into functional Webflow websites.</p>
                                <div className="mt-[20px] border-2 border-[#4A494E] hover:text-black cursor-pointer rounded-lg hover:bg-white hover:border-0 transition-all flex justify-center items-center h-[60px] w-[60px]">
                                    <i class="fa-solid text-lg fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[30px] flex justify-between items-center flex-wrap gap-[10px] lg:gap-[0px]">
                            <div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-fit">
                                <img src={logo} alt="logo" className="h-[100px] w-[100px] rounded-xl object-cover py-[10px] px-[10px] bg-[#34333B]" />
                                <h1 className="text-xl text-white font-[700] mt-[20px]">Expertise in Figma-to-Webflow</h1>
                                <p className="max-w-[370px] text-[18px] mt-[10px]">We have a proven track record and expertise in seamlessly turning Figma designs into functional Webflow websites.</p>
                                <div className="mt-[20px] border-2 border-[#4A494E] hover:text-black cursor-pointer rounded-lg hover:bg-white hover:border-0 transition-all flex justify-center items-center h-[60px] w-[60px]">
                                    <i class="fa-solid text-lg fa-chevron-right"></i>
                                </div>
                            </div>
                            <div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-fit">
                                <img src={logo} alt="logo" className="h-[100px] w-[100px] rounded-xl object-cover py-[10px] px-[10px] bg-[#34333B]" />
                                <h1 className="text-xl text-white font-[700] mt-[20px]">Expertise in Figma-to-Webflow</h1>
                                <p className="max-w-[370px] text-[18px] mt-[10px]">We have a proven track record and expertise in seamlessly turning Figma designs into functional Webflow websites.</p>
                                <div className="mt-[20px] border-2 border-[#4A494E] hover:text-black cursor-pointer rounded-lg hover:bg-white hover:border-0 transition-all flex justify-center items-center h-[60px] w-[60px]">
                                    <i class="fa-solid text-lg fa-chevron-right"></i>
                                </div>
                            </div>
                            <div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-fit">
                                <img src={logo} alt="logo" className="h-[100px] w-[100px] rounded-xl object-cover py-[10px] px-[10px] bg-[#34333B]" />
                                <h1 className="text-xl text-white font-[700] mt-[20px]">Expertise in Figma-to-Webflow</h1>
                                <p className="max-w-[370px] text-[18px] mt-[10px]">We have a proven track record and expertise in seamlessly turning Figma designs into functional Webflow websites.</p>
                                <div className="mt-[20px] border-2 border-[#4A494E] hover:text-black cursor-pointer rounded-lg hover:bg-white hover:border-0 transition-all flex justify-center items-center h-[60px] w-[60px]">
                                    <i class="fa-solid text-lg fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[100px]">
                            <div>
                                <p className="tracking-widest text-[#998DE2]">PORTFOLIO</p>
                                <h2 className="text-4xl text-white font-[700] mt-[10px]">Our Latest Work <i class="fa-solid rotate-45 ml-5 fa-star text-transparent font-extrabold bg-clip-text bg-gradient-to-r text-[28px] from-[#A599FC] to-[#5E46FF]"></i></h2>
                                <p className="text-[18px] mt-[8px] max-w-2xl">Discover our freshest creations that showcase the power of design innovation and digital excellence. Explore our latest work and witness the impact we bring to every project</p>
                            </div>
                            <div className="mt-[50px] flex justify-between items-center flex-wrap">
                                <a className="shadow-2xl" href="/">
                                    <div data-tip="TechYes" className="tooltip py-[10px] hover:-translate-y-1 transition-all rounded-2xl cursor-pointer w-fit">
                                        <img src={"https://kncoder.vercel.app/assets/techyes-9c695dc2.png"} alt="logo" className="h-[400px] w-[400px] rounded-2xl object-cover" />
                                    </div>
                                </a>
                                <a className="shadow-2xl" href="/">
                                    <div data-tip="Movigo" className="tooltip py-[10px] hover:-translate-y-1 transition-all rounded-2xl cursor-pointer w-fit">
                                        <img src={"https://kncoder.vercel.app/assets/movigo-52fc2fd2.png"} alt="logo" className="h-[400px] w-[400px] rounded-2xl object-cover" />
                                    </div>
                                </a>
                                <a className="shadow-2xl" href="/">
                                    <div data-tip="Arashov" className="tooltip py-[10px] hover:-translate-y-1 transition-all rounded-2xl cursor-pointer w-fit">
                                        <img src={arashov} alt="logo" className="h-[400px] w-[400px] rounded-2xl object-cover" />
                                    </div>
                                </a>
                            </div>
                            <div className="mt-[30px] flex justify-between items-center flex-wrap">
                                <a className="shadow-2xl" href="/">
                                    <div data-tip="ForceExchange" className="tooltip py-[10px] hover:-translate-y-1 transition-all rounded-2xl cursor-pointer w-fit">
                                        <img src={"https://kncoder.vercel.app/assets/forceexchange-35ed1d68.png"} alt="logo" className="h-[400px] w-[400px] rounded-2xl object-cover" />
                                    </div>
                                </a>
                                <a className="shadow-2xl" href="/">
                                    <div data-tip="Promgarelka" className="tooltip py-[10px] hover:-translate-y-1 transition-all rounded-2xl cursor-pointer w-fit">
                                        <img src={"https://kncoder.vercel.app/assets/promgarelka-a09a4cd0.png"} alt="logo" className="h-[400px] w-[400px] rounded-2xl object-cover" />
                                    </div>
                                </a>
                                <a className="shadow-2xl" href="/">
                                    <div data-tip="Avalon" className="tooltip py-[10px] hover:-translate-y-1 transition-all rounded-2xl cursor-pointer w-fit">
                                        <img src={"https://kncoder.vercel.app/assets/avolon-e69f0f8b.png"} alt="logo" className="h-[400px] w-[400px] rounded-2xl object-cover" />
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Pricing */}

                        {/* <div className="mt-[100px]">
                            <div>
                                <p className="tracking-widest text-[#998DE2]">PRICING</p>
                                <h2 className="text-4xl text-white font-[700] mt-[10px]">One fixed price to get <br /> your project done <i class="fa-solid rotate-45 ml-5 fa-star text-transparent font-extrabold bg-clip-text bg-gradient-to-r text-[28px] from-[#A599FC] to-[#5E46FF]"></i></h2>
                                <p className="text-[18px] mt-[8px] max-w-2xl">Your custom on-demand team for only a single payment</p>
                            </div>
                            <div className="mt-[50px] flex justify-between items-center flex-wrap">
                                <div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-fit">
                                    <p className="text-2xl">Basic</p>
                                    <h1 className="text-4xl text-white font-[700] mt-[12px]">$200</h1>
                                    <p className="max-w-[370px] text-[18px] mt-[10px]">Fully responsive 1 page website developed in Webflow. Unlimited Sections.</p>
                                    
                                    <div className="mt-[25px] ml-1 flex flex-col items-start gap-2">
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i class="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i class="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i class="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i class="fa-solid fa-xmark ml-[4px] bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-[7px]"></i> Functional website</p>
                                    </div>

                                    <button className="btn w-full mt-[35px] btn-ghost border-[#5D45FD] hover:bg-[#4d42c5] btn-primary">View work <i class="fa-solid fa-chevron-right"></i></button>
                                </div>
                                <div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-fit">
                                    <p className="text-2xl">Standart</p>
                                    <h1 className="text-4xl text-white font-[700] mt-[12px]">$400</h1>
                                    <p className="max-w-[370px] text-[18px] mt-[10px]">Fully responsive 3 page website developed in Webflow. Unlimited Sections.</p>
                                    
                                    <div className="mt-[25px] ml-1 flex flex-col items-start gap-2">
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i class="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i class="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i class="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i class="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                    </div>

                                    <button className="btn w-full mt-[35px] btn-ghost border-[#5D45FD] hover:bg-[#4d42c5] btn-primary">View work <i class="fa-solid fa-chevron-right"></i></button>
                                </div>
                                <div className="border-2 shadow-2xl border-[#4A494E] hover:-translate-y-1 transition-all rounded-2xl py-[35px] px-[20px] w-fit">
                                    <p className="text-2xl">Premium</p>
                                    <h1 className="text-4xl text-white font-[700] mt-[12px]">$800</h1>
                                    <p className="max-w-[370px] text-[18px] mt-[10px]">Fully responsive 10 page website developed in Webflow. Unlimited Sections.</p>
                                    
                                    <div className="mt-[25px] ml-1 flex flex-col items-start gap-2">
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i class="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i class="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i class="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                        <p className="text-[#B7B5C0] flex items-center gap-1"><i class="fa-solid fa-circle-check bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#A599FC] to-[#5E46FF] mr-1"></i> Functional website</p>
                                    </div>

                                    <button className="btn w-full mt-[35px] btn-ghost border-[#5D45FD] hover:bg-[#4d42c5] btn-primary">View work <i class="fa-solid fa-chevron-right"></i></button>
                                </div>
                            </div>
                        </div> */}

                        <div className="mt-[100px]">
                            <div>
                                <p className="tracking-widest text-[#998DE2]">TESTIMONIALS</p>
                                <h2 className="text-4xl text-white font-[700] mt-[10px]">Our clients says <i class="fa-solid rotate-45 ml-5 fa-star text-transparent font-extrabold bg-clip-text bg-gradient-to-r text-[28px] from-[#A599FC] to-[#5E46FF]"></i></h2>
                                <p className="text-[18px] mt-[8px] max-w-2xl">Don't take our word for it. Hear it from our happy clients</p>
                            </div>
                            <div className="mt-[60px]">

                                <Swiper
                                    pagination={true} modules={[Pagination]}
                                    style={{
                                        "--swiper-pagination-color": "#fff",
                                        "--swiper-pagination-bullet-inactive-color": "#858585",
                                        "--swiper-pagination-bullet-inactive-opacity": "1",
                                        "--swiper-pagination-bullet-size": "16px",
                                        "--swiper-pagination-bullet-horizontal-gap": "6px"
                                    }}
                                >

                                    <SwiperSlide>
                                        <div className="w-full flex justify-center">
                                            <div className="border-2 shadow-2xl border-[#4A494E] transition-all rounded-2xl py-[65px] px-[10px] lg:px-[50px] w-fit">
                                                <p className="lg:max-w-2xl lg:text-lg text-center">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatem perferendis tenetur culpa rem labore? Explicabo nam iste soluta quos magnam, accusantium a incidunt quo, nesciunt officiis suscipit sunt! Quaerat rem dolor mollitia voluptas eaque soluta amet, ad, saepe reiciendis enim accusamus nostrum ex numquam officia est! Sequi laborum facere omnis quaerat autem dolore officia perspiciatis quasi quos eos, repudiandae consequuntur explicabo assumenda commodi provident fugit
                                                </p>
                                                <div className="mt-[35px] flex justify-center flex-col items-center">
                                                    <div className="avatar">
                                                        <div className="w-16 rounded-full">
                                                            <img src="https://cdn.forbes.ru/files/c/232x232/profile/39-pavel-durov-182-05_2019.jpg__1555317023__31719.webp" />
                                                        </div>
                                                    </div>
                                                    <p className="text-white font-[700] text-lg mt-[10px]">Pavel Durov</p>
                                                    <p className="text-lg">Founder of Telegram</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="w-full flex justify-center">
                                            <div className="border-2 shadow-2xl border-[#4A494E] transition-all rounded-2xl py-[65px] px-[10px] lg:px-[50px] w-fit">
                                                <p className="lg:max-w-2xl lg:text-lg text-center">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatem perferendis tenetur culpa rem labore? Explicabo nam iste soluta quos magnam, accusantium a incidunt quo, nesciunt officiis suscipit sunt! Quaerat rem dolor mollitia voluptas eaque soluta amet, ad, saepe reiciendis enim accusamus nostrum ex numquam officia est! Sequi laborum facere omnis quaerat autem dolore officia perspiciatis quasi quos eos, repudiandae consequuntur explicabo assumenda commodi provident fugit
                                                </p>
                                                <div className="mt-[35px] flex justify-center flex-col items-center">
                                                    <div className="avatar">
                                                        <div className="w-16 rounded-full">
                                                            <img src="https://cdn.forbes.ru/files/c/232x232/profile/39-pavel-durov-182-05_2019.jpg__1555317023__31719.webp" />
                                                        </div>
                                                    </div>
                                                    <p className="text-white font-[700] text-lg mt-[10px]">Pavel Durov</p>
                                                    <p className="text-lg">Founder of Telegram</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="w-full flex justify-center">
                                            <div className="border-2 shadow-2xl border-[#4A494E] transition-all rounded-2xl py-[65px] px-[10px] lg:px-[50px] w-fit">
                                                <p className="lg:max-w-2xl lg:text-lg text-center">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatem perferendis tenetur culpa rem labore? Explicabo nam iste soluta quos magnam, accusantium a incidunt quo, nesciunt officiis suscipit sunt! Quaerat rem dolor mollitia voluptas eaque soluta amet, ad, saepe reiciendis enim accusamus nostrum ex numquam officia est! Sequi laborum facere omnis quaerat autem dolore officia perspiciatis quasi quos eos, repudiandae consequuntur explicabo assumenda commodi provident fugit
                                                </p>
                                                <div className="mt-[35px] flex justify-center flex-col items-center">
                                                    <div className="avatar">
                                                        <div className="w-16 rounded-full">
                                                            <img src="https://cdn.forbes.ru/files/c/232x232/profile/39-pavel-durov-182-05_2019.jpg__1555317023__31719.webp" />
                                                        </div>
                                                    </div>
                                                    <p className="text-white font-[700] text-lg mt-[10px]">Pavel Durov</p>
                                                    <p className="text-lg">Founder of Telegram</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                
                                </Swiper>
                            </div>
                        </div>
                    </div>                    
                </Wrapper>
            </div>

            <Footer/>

        </div>
    )
}

export default App