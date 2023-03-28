import React from 'react';
import Meta from './../../components/Meta';
import BreadCrumb from './../../components/BreadCumb';
import Product from './../../components/Products/Product';
const Decor = () => {
    return (
        <>
            <Meta title={'Decor'}></Meta>
            <div className="fixed-header"></div>
            <div className="decor-container">
                <div className="container-xl">
                    <BreadCrumb title="Decor" element="Showing all 9 results"></BreadCrumb>
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

export default Decor;
