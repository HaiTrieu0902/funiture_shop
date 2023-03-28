import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { HiShoppingCart } from 'react-icons/hi';
import { IoEyeSharp } from 'react-icons/io5';
import { ProductTest } from './../../data/data';
const Product = () => {
    const [selectedColor, setSelectedColor] = useState('black');
    //const [sortOption, setSortOption] = useState("default");
    const handleClick = (color) => {
        setSelectedColor(color);
    };
    return (
        <>
            <div className="col-12 mt-14">
                <div className="grid gap-10 grid-cols-3">
                    {ProductTest.map((item, index) => (
                        <div key={index} className="featured-contain">
                            <div className="featured-menu relative overflow-hidden">
                                <div className="absolute top-10 left-10">
                                    <button className="px-4 py-2 bg-slate-200 text-gray-500 rounded-full">Sale!</button>
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
                                <Link to="/detail" className="img-change">
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
        </>
    );
};

export default Product;
