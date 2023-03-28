import React from 'react';
import Meta from './../../components/Meta';
import BreadCrumb from './../../components/BreadCumb';
import Product from './../../components/Products/Product';
const BedRoom = () => {
    return (
        <>
            <Meta title={'Bed room'}></Meta>
            <div className="fixed-header"></div>
            <div className="bedroom-container">
                <div className="container-xl">
                    <BreadCrumb title="Bedroom" element="Showing all 6 results"></BreadCrumb>
                    <div className="row shop-container__product">
                        <Product></Product>
                        <Product></Product>
                    </div>
                </div>
            </div>
            <div className="mb-28 mt-12 d-flex justify-center items-center">
                <div className="p-3">
                    <button className="p-4 bg-transparent product-show">No more products to show</button>
                </div>
            </div>
        </>
    );
};

export default BedRoom;
