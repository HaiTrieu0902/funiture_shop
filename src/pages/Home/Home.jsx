import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import './home.css';
import { HiShoppingCart } from 'react-icons/hi';
import { IoEyeSharp } from 'react-icons/io5';
import { FaCaravan, FaRegCreditCard } from 'react-icons/fa';
import { RiSecurePaymentFill, RiLuggageCartFill } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Marquee from 'react-fast-marquee';
import { siderbar, Brands, Carts, Featuredproducts } from './../../data/data';
import { Link } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import bg01 from './../../data/product/bg-01.jpg';
import lamp from './../../data/product/lamp-001.png';
import Meta from './../../components/Meta';

const Home = () => {
    const [selectedColor, setSelectedColor] = useState('black');

    const handleClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <>
            <Meta title={'Home'}></Meta>
            <div className="home-container">
                <div className="fixed-header"></div>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12 relative">
                            <Swiper
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                pagination={true}
                                modules={[Autoplay, Pagination]}
                            >
                                {siderbar.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="home-sidebar">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="absolute home-sale-container">
                                            <div className="home-sale-list">
                                                <h5>{item.title}</h5>
                                                <h1 className="mt-1">{item.sale}</h1>
                                                <h3 className="mt-3">{item.tag}</h3>
                                                <button className="mt-4 button button-primary">SHOP NOW</button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="row harmet-container">
                        <div className="marquee-inner-wrapper ">
                            <div className="py-5">
                                <Marquee>
                                    {Brands.map((brand) => (
                                        <div key={brand.id} className="marquee-img">
                                            <img src={brand.img} alt="brand" />
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </div>

                    <div className="row shop-category mt-40">
                        <div className="col-12 d-flex flex-col items-center gap-15">
                            <h4 className="text-center">Shop by category</h4>
                            <h1 className="text-center">Shop by category</h1>
                            <span className="shop_nerb"></span>
                        </div>
                        <div className="row gap-10 mt-5">
                            {Carts.map((item, index) => (
                                <div key={index} className="category-items col-3-1">
                                    <Link to={item.to}>
                                        <div className="d-flex items-center flex-col">
                                            <img src={item.image} alt="" />
                                            <div className="category-desc pb-2 d-flex flex-col items-center">
                                                <h4 className="uppercase">{item.name}</h4>
                                                <p className="uppercase">{item.quality}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="row shop-category mt-60">
                        <div className="col-12 d-flex flex-col items-center gap-15">
                            <h4 className="text-center">Shop by category</h4>
                            <h1 className="text-center">Featured products</h1>
                            <span className="shop_nerb"></span>
                        </div>
                        <div className="col-12 mt-14">
                            <div className="grid gap-10 grid-cols-3">
                                {Featuredproducts.map((item, index) => (
                                    <div key={index} className="featured-contain">
                                        <div className="featured-menu relative overflow-hidden">
                                            <div className="absolute top-10 left-10">
                                                <button className="px-4 py-2 bg-slate-200 text-gray-500 rounded-full">
                                                    Sale!
                                                </button>
                                            </div>
                                            <div className="featured-abs absolute top-10 -right-16">
                                                <div className="d-flex flex-col gap-3 ">
                                                    <TooltipComponent
                                                        className="px-3 py-3 bg-white rounded-full"
                                                        TooltipComponent
                                                        content="Select Options"
                                                        position="LeftCenter"
                                                    >
                                                        <Link className="text-2xl">
                                                            <HiShoppingCart></HiShoppingCart>
                                                        </Link>
                                                    </TooltipComponent>
                                                    <TooltipComponent
                                                        className="px-3 py-3 bg-white rounded-full"
                                                        TooltipComponent
                                                        content="Quick View"
                                                        position="LeftCenter"
                                                    >
                                                        <Link className="text-2xl">
                                                            <IoEyeSharp></IoEyeSharp>
                                                        </Link>
                                                    </TooltipComponent>
                                                </div>
                                            </div>
                                            <Link>
                                                {selectedColor === 'black' && <img src={item.imageblack} alt="" />}
                                                {selectedColor === 'broze' && <img src={item.imagebronze} alt="" />}
                                                {selectedColor === 'gold' && <img src={item.imagegold} alt="" />}
                                            </Link>
                                            <div className="featured-desc d-flex flex-col items-center mb-14 -mt-4">
                                                <div className="featured-desc_heading justify-center d-flex flex-col items-center">
                                                    <h3 className="text-4xl font-medium">{item.name}</h3>
                                                    <p className="mt-2 text-xl font-medium">
                                                        {selectedColor === 'black' && item.priceblack}
                                                        {selectedColor === 'broze' && item.pricebronze}
                                                        {selectedColor === 'gold' && item.pricegold}
                                                    </p>
                                                </div>
                                                <div className="featured-colors d-flex gap-1 mt-4">
                                                    <TooltipComponent
                                                        className="p-1 bg-white rounded-full d-flex items-center justify-center "
                                                        TooltipComponent
                                                        content="Black"
                                                        position="BottomCenter"
                                                    >
                                                        <button
                                                            onClick={() => handleClick('black')}
                                                            style={{ backgroundColor: item.colorblack }}
                                                            className="h-8 w-8 rounded-full"
                                                        ></button>
                                                    </TooltipComponent>
                                                    <TooltipComponent
                                                        className="p-1 bg-white rounded-full d-flex items-center justify-center "
                                                        TooltipComponent
                                                        content="Bronze"
                                                        position="BottomCenter"
                                                    >
                                                        <button
                                                            onClick={() => handleClick('broze')}
                                                            style={{ backgroundColor: item.colorbroze }}
                                                            className="h-8 w-8 rounded-full"
                                                        ></button>
                                                    </TooltipComponent>
                                                    <TooltipComponent
                                                        className="p-1 bg-white rounded-full d-flex items-center justify-center "
                                                        TooltipComponent
                                                        content="Gold"
                                                        position="BottomCenter"
                                                    >
                                                        <button
                                                            onClick={() => handleClick('gold')}
                                                            style={{ backgroundColor: item.colorgold }}
                                                            className="h-8 w-8 rounded-full"
                                                        ></button>
                                                    </TooltipComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <div className="d-flex gap-10">
                                <div className="col-lg-8 relative">
                                    <div className="mr-3">
                                        <img src={bg01} alt="" />
                                    </div>
                                    <div className="absolute top-2/4 text-white opacity-95 left-9 d-flex items-center justify-center flex-col">
                                        <h5>New arrivals</h5>
                                        <h1>New arrivals Brand new, modern lamps collection</h1>
                                        <h4 className="mt-2">Ideal for offices, bedrooms and all in between.</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="d-flex items-center justify-center flex-col">
                                        <div className="mt-6">
                                            <img src={lamp} alt="" />
                                        </div>
                                        <div className="d-flex flex-col justify-center items-center">
                                            <h3 className="text-4xl font-medium">Light Lamp</h3>
                                            <div className="d-flex gap-4 mt-4 items-center">
                                                <p className=" text-xl text-gray-400 font-medium">$320 - $420</p>

                                                <div className="d-flex items-center justify-center button_2 button-primary">
                                                    <Link className="text-white ">SELECT OPTIONS</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-14">
                            <div className="grid gap-10 grid-cols-3">
                                <div className="category-items home-rate h-96 d-flex items-center flex-col justify-center">
                                    <div className="d-flex items-center flex-col justify-center w-10/12">
                                        <ReactStars count={5} size={24} value={4} activeColor="#f0ad4e" />
                                        <h4 className="text-3xl mt-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec ullamcorper mattis.
                                        </h4>
                                        <p className="text-lg font-semibold mt-2">MARIA OLIVER</p>
                                    </div>
                                </div>
                                <div className="category-items home-rate h-96 d-flex items-center flex-col justify-center">
                                    <div className="d-flex items-center flex-col justify-center w-10/12">
                                        <ReactStars count={5} size={24} value={4} activeColor="#f0ad4e" />
                                        <h4 className="text-3xl mt-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec ullamcorper mattis.
                                        </h4>
                                        <p className="text-lg font-semibold mt-2">MARIA OLIVER</p>
                                    </div>
                                </div>
                                <div className="category-items home-rate h-96 d-flex items-center flex-col justify-center">
                                    <div className="d-flex items-center flex-col justify-center w-10/12">
                                        <ReactStars count={5} size={24} value={4} activeColor="#f0ad4e" />
                                        <h4 className="text-3xl mt-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec ullamcorper mattis.
                                        </h4>
                                        <p className="text-lg font-semibold mt-2">MARIA OLIVER</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row shop-category mt-60">
                        <div className="col-12 d-flex flex-col items-center gap-15">
                            <h4 className="text-center">Best products</h4>
                            <h1 className="text-center">Why choose us</h1>
                            <span className="shop_nerb"></span>
                        </div>
                        <div className="col-12 mt-16 mb-16">
                            <div className="grid gap-10 grid-cols-4">
                                <div className="home-choose d-flex items-center">
                                    <div className="d-flex items-center flex-col">
                                        <div className="choose-icon ">
                                            <FaCaravan className="text-7xl " style={{ color: '#c19a83' }} />
                                        </div>
                                        <h3 className="font-semibold mt-4 text-3xl">Fast Delivery</h3>
                                        <p className="items-center text-center mt-4 text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec.
                                        </p>
                                    </div>
                                </div>
                                <div className="home-choose d-flex items-center">
                                    <div className="d-flex items-center flex-col">
                                        <div className="choose-icon ">
                                            <RiLuggageCartFill className="text-7xl " style={{ color: '#c19a83' }} />
                                        </div>
                                        <h3 className="font-semibold mt-4 text-3xl">Free Shipping</h3>
                                        <p className="items-center text-center mt-4 text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec.
                                        </p>
                                    </div>
                                </div>
                                <div className="home-choose d-flex items-center">
                                    <div className="d-flex items-center flex-col">
                                        <div className="choose-icon ">
                                            <RiSecurePaymentFill className="text-7xl " style={{ color: '#c19a83' }} />
                                        </div>
                                        <h3 className="font-semibold mt-4 text-3xl">Secure Checkout</h3>
                                        <p className="items-center text-center mt-4 text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec.
                                        </p>
                                    </div>
                                </div>
                                <div className="home-choose d-flex items-center">
                                    <div className="d-flex items-center flex-col">
                                        <div className="choose-icon ">
                                            <FaRegCreditCard className="text-6xl " style={{ color: '#c19a83' }} />
                                        </div>
                                        <h3 className="font-semibold mt-4 text-3xl">Easy Returns</h3>
                                        <p className="items-center text-center mt-4 text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
