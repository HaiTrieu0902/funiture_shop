import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../../components/Meta';
import './tracker.css';
const Tracker = () => {
    return (
        <>
            <Meta title={'Tracker Order'}></Meta>
            <div className="tracker-order_container">
                <div className="fixed-header"></div>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-12">
                            <div>
                                <h1 className="text-4xl font-semibold">My account</h1>
                            </div>
                            <div className="d-flex items-center justify-center mt-28 mb-28">
                                <div className="form-tracker">
                                    <form action="" className="p-8">
                                        <div className="mb-5">
                                            <h2 className="text-center text-4xl font-semibold">Login</h2>
                                        </div>
                                        <div>
                                            <input
                                                className="login-tracker"
                                                type="text"
                                                placeholder="User name or email..."
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                className="login-tracker"
                                                type="password"
                                                placeholder="Password..."
                                                required
                                            />
                                        </div>
                                        <div className="d-flex gap-2 items-center mt-8">
                                            <input className="p-4 form-checked_tracker" type="checkbox" />
                                            <span className="ml-3 font-medium"> Remember me</span>
                                        </div>
                                        <div className="mt-4">
                                            <button style={{ height: '50px' }} className="button button-primary w-full">
                                                LOGIN
                                            </button>
                                        </div>
                                        <div className="d-flex items-center justify-center mt-4">
                                            <Link style={{ color: '#c19a83' }} className="text-center">
                                                Lost your password?
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tracker;
