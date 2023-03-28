import React, { useState } from 'react';
import './product.css';
import Meta from './../../components/Meta';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsSearchHeart } from 'react-icons/bs';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import detailImgs from './../../data/product/product-09-a.jpg';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Link } from 'react-router-dom';

import bg04 from './../../data/product/bg-04.jpg';
import bg02 from './../../data/product/bg-02.jpg';
import 'react-medium-image-zoom/dist/styles.css';

const DetailProduct = () => {
    const [quality, setQuality] = useState(1);
    console.log(quality);
    return (
        <>
            <Meta title={'Product'}></Meta>
            <div className="fixed-header"></div>
            <div className="detail-container">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="detail-image_container relative">
                                <div className="absolute top-10 left-10">
                                    <button className="px-4 py-2 bg-slate-200 text-gray-500 rounded-full">Sale!</button>
                                </div>
                                <div className="absolute top-10 right-10">
                                    <button className="px-4 py-2 bg-slate-200 text-gray-500 rounded-full">
                                        <BsSearchHeart />
                                    </button>
                                </div>

                                <img src={detailImgs} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ml-14">
                                <div className="d-flex justify-between items-center">
                                    <p className="text-gray-600 text-14">Home / Office / Product Name 10</p>
                                    <div className="d-flex gap-2">
                                        <button>
                                            <IoIosArrowDropleftCircle className="text-5xl" />
                                        </button>
                                        <button>
                                            <IoIosArrowDroprightCircle className="text-5xl" />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-2xl mt-3">Bedroom, Decor, Office</p>
                                <h4 className="mt-6 text-4xl">Product Name 10</h4>
                                <div className="d-flex mt-4 items-center">
                                    <h1 className="font-semibold text-4xl" style={{ color: '#c19a83' }}>
                                        $85.00 – $99.00
                                    </h1>
                                    <span className="text-gray-600 text-2xl mt-1 d-block ml-1 "> & Free Shipping</span>
                                </div>
                                <div>
                                    <p className="text-gray-600 text-2xl mt-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum erat
                                        leo, id pulvinar lorem maximus sit amet. Quisque mauris sem, sagittis sed
                                        blandit eu, varius a tortor. Quisque aliquam ligula sed quam pulvinar, vitae
                                        ullamcorper metus imperdiet. Vivamus id justo dui.
                                    </p>
                                    <p className="text-gray-600 text-2xl mt-2">
                                        Donec faucibus gravida vulputate. Sed quis porttitor libero. Aenean posuere
                                        imperdiet elit, in aliquet lorem vulputate sed. Integer et lacinia tellus.
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
                                            style={{ backgroundColor: '#000000' }}
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
                                            style={{ backgroundColor: '#c19a83' }}
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
                                            style={{ backgroundColor: '#c19a65' }}
                                            className="h-8 w-8 rounded-full"
                                        ></button>
                                    </TooltipComponent>
                                </div>
                                <div className="mt-11 detail_border ">
                                    <div className="mt-4 mb-4 d-flex items-center">
                                        <div className="d-flex items-center text-gray-700">
                                            <button
                                                onClick={() => setQuality((prev) => prev - 1)}
                                                className="h-12 w-12  d-flex items-center justify-center text-4xl  detail_boder detail_quanlity "
                                            >
                                                -
                                            </button>
                                            <div className="h-12 d-flex items-center justify-center w-12 detail_boder">
                                                {quality}
                                            </div>
                                            <button
                                                onClick={() => setQuality((prev) => prev + 1)}
                                                className="h-12 d-flex items-center justify-center w-12 text-3xl py-2 detail_boder detail_quanlity"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="ml-40">
                                            <Link>
                                                <button className="px-5 py-3 bg-slate-700 text-white hover:bg-amber-800">
                                                    ADD TO CART
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-600 text-2xl mt-3">SKU: N/A</p>
                                    <p className="text-gray-600 text-2xl mt-3">Categories: Bedroom, Decor, Office</p>
                                    <p className="text-gray-600 text-2xl mt-4 font-medium">
                                        Free shipping on orders over $50!
                                    </p>
                                    <ul className="text-gray-600 text-2xl ml-4">
                                        <li className="mt-3 d-flex items-center gap-2">
                                            <AiFillCheckCircle></AiFillCheckCircle> No-Risk Money Back Guarantee!
                                        </li>
                                        <li className=" d-flex items-center gap-2 mt-2">
                                            <AiFillCheckCircle></AiFillCheckCircle> No Hassle Refunds
                                        </li>
                                        <li className="d-flex items-center gap-2 mt-2">
                                            <AiFillCheckCircle></AiFillCheckCircle> Secure Payments
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row detail-container_escription mt-5">
                        <div className="p-10">
                            <h1 style={{ color: '#c19a83' }} className="text-2xl font-semibold">
                                Description
                            </h1>
                            <div className="d-flex justify-between ">
                                <div className="col-lg-6">
                                    <div className="mt-10 ml-7">
                                        <h1 className="text-4xl font-semibold">A few words about the</h1>
                                        <h1 className="text-4xl font-semibold">product</h1>
                                    </div>
                                    <span className="border_product-details mb-36"></span>
                                    <div className="-mx-10 product-details_background">
                                        <div className="mx-16 py-28">
                                            <div className="w-3/4">
                                                <h1 className="text-4xl font-semibold">Features</h1>
                                                <p className="text-gray-700 mt-4">
                                                    Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec
                                                    iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam
                                                    et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit.
                                                    Etiam ultricies justo ac feugiat dignissim. Suspendisse in ultrices
                                                    massa.
                                                </p>
                                            </div>
                                            <div className="mt-3">
                                                <ul
                                                    style={{ color: '#c19a83' }}
                                                    className="text-gray-600 text-2xl ml-4"
                                                >
                                                    <li className="mt-3 d-flex items-center gap-2">
                                                        <AiFillCheckCircle></AiFillCheckCircle> No-Risk Money Back
                                                        Guarantee!
                                                    </li>
                                                    <li className=" d-flex items-center gap-2 mt-2">
                                                        <AiFillCheckCircle></AiFillCheckCircle> No Hassle Refunds
                                                    </li>
                                                    <li className="d-flex items-center gap-2 mt-2">
                                                        <AiFillCheckCircle></AiFillCheckCircle> Secure Payments
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-80">
                                        <img src={bg02} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h3>Aenean pretium, sem vitae gravida tincidunt, justo diam tempus mauris.</h3>
                                    <h3 className="mt-3 text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum erat
                                        leo, id pulvinar lorem maximus sit amet. Quisque mauris sem, sagittis sed
                                        blandit eu, varius a tortor. Quisque aliquam ligula sed quam pulvinar, vitae
                                        ullamcorper metus imperdiet.
                                    </h3>
                                    <div className="mt-16">
                                        <img src={bg04} alt="" />
                                    </div>
                                    <div>
                                        <div className="ml-40 mt-40">
                                            <div className="mt-6">
                                                <h1 className="text-4xl font-semibold">Care</h1>
                                                <h1 className="text-4xl font-semibold">Instructions</h1>
                                            </div>
                                            <span className="border_product-details "></span>
                                            <div>
                                                <div className="mt-3">
                                                    <ul className="text-gray-600 text-2xl ml-4">
                                                        <li className="mt-3 d-flex items-center gap-2">
                                                            <AiFillCheckCircle></AiFillCheckCircle> No-Risk Money Back
                                                            Guarantee!
                                                        </li>
                                                        <li className=" d-flex items-center gap-2 mt-2">
                                                            <AiFillCheckCircle></AiFillCheckCircle> No Hassle Refunds
                                                        </li>
                                                        <li className="d-flex items-center gap-2 mt-2">
                                                            <AiFillCheckCircle></AiFillCheckCircle> Secure Payments
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="mt-4">
                                                    <span className=" font-semibold">NOTE:</span>
                                                    <span className="ml-3" style={{ color: '#c19a83' }}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
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

export default DetailProduct;
