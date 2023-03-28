import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const BreadCrumb = (props) => {
    const { currentColor, setSortOption } = useStateContext();

    const { title, element } = props;
    return (
        <div className="breadcrumb py-4">
            <div className="container-xl">
                <div className="row">
                    <div className="col-12 d-flex flex-col">
                        <p style={{ color: currentColor }} className="mb-0 ">
                            <Link to="/" className="text-gray-500">
                                Home &nbsp;
                            </Link>
                            / {title}
                        </p>
                        <div className="mt-4">
                            <h1 style={{ color: currentColor }} className="text-8xl font-normal">
                                {title}
                            </h1>
                        </div>
                    </div>
                    <div className="d-flex justify-between mt-24">
                        <p style={{ color: currentColor }} className="text-gray-500 text-2xl">
                            {element}
                        </p>
                        <div className="">
                            <form action="">
                                <select
                                    onChange={(e) => setSortOption(e.target.value)}
                                    name="shop-order"
                                    id="shop-oder"
                                >
                                    <option value="default" selected="selected">
                                        Default sorting
                                    </option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="rating">Sort by latest</option>
                                    <option value="low">Sort by price: low to high</option>
                                    <option value="high">Sort by price: high to low</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;
