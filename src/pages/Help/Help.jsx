import React from 'react';
import Meta from './../../components/Meta';
import './help.css';
import { VscAccount } from 'react-icons/vsc';
import { BiHeadphone } from 'react-icons/bi';
import { MdStarRate } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Help = () => {
    return (
        <>
            <Meta title={'Help'}></Meta>
            <div className="story-container">
                <div className="fixed-header"></div>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className=" mt-32 d-flex flex-col items-center gap-6">
                                <h4 className="text-center text-xl text-gray-600">24/7 Support</h4>
                                <h1 className="text-center font-semibold text-8xl">Ready to help</h1>
                                <span className="shop_nerb"></span>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-16">
                            <div className="grid grid-cols-3 gap-7">
                                <div className="contact_container">
                                    <div className="d-flex items-center flex-col justify-center py-16">
                                        <div className="text-5xl" style={{ color: '#c19a83' }}>
                                            <VscAccount />
                                        </div>
                                        <h1 className="text-4xl font-semibold mt-4">Account Privacy</h1>
                                        <div className="px-16">
                                            <p className="text-2xl text-gray-600 mt-3 text-center">
                                                Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu
                                                congue gravida. In semper lectus neque, eu interdum nisl pretium sit
                                                amet etiam efficitur.
                                            </p>
                                        </div>
                                        <Link style={{ color: '#c19a83' }} className="mt-4">
                                            PRIVACY POLICY
                                        </Link>
                                    </div>
                                </div>
                                <div className="contact_container">
                                    <div className="d-flex items-center flex-col justify-center py-16">
                                        <div className="text-5xl" style={{ color: '#c19a83' }}>
                                            <BiHeadphone />
                                        </div>
                                        <h1 className="text-4xl font-semibold mt-4">Support Specialist</h1>
                                        <div className="px-16">
                                            <p className="text-2xl text-gray-600 mt-3 text-center">
                                                Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu
                                                congue gravida. In semper lectus neque, eu interdum nisl pretium sit
                                                amet etiam efficitur.
                                            </p>
                                        </div>
                                        <Link style={{ color: '#c19a83' }} className="mt-4">
                                            CONTACT US
                                        </Link>
                                    </div>
                                </div>
                                <div className="contact_container">
                                    <div className="d-flex items-center flex-col justify-center py-16">
                                        <div className="text-5xl" style={{ color: '#c19a83' }}>
                                            <MdStarRate />
                                        </div>
                                        <h1 className="text-4xl font-semibold mt-4">Seller Standards</h1>
                                        <div className="px-16">
                                            <p className="text-2xl text-gray-600 mt-3 text-center">
                                                Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu
                                                congue gravida. In semper lectus neque, eu interdum nisl pretium sit
                                                amet etiam efficitur.
                                            </p>
                                        </div>
                                        <Link style={{ color: '#c19a83' }} className="mt-4">
                                            LEARN MORE
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className=" mt-32 d-flex flex-col items-center gap-6">
                                <h4 className="text-center text-xl text-gray-600">faq</h4>
                                <h1 className="text-center font-semibold text-7xl">Find Answers</h1>
                                <span className="shop_nerb"></span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 d-flex justify-center items-center">
                        <div className="form-controler">
                            <form action="">
                                <div className="mt-4">
                                    <p>Name</p>
                                    <input
                                        placeholder="Enter name..."
                                        className="form-contact px-4 py-3 mt-2"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className="mt-9">
                                    <p>Email</p>
                                    <input
                                        placeholder="Enter email..."
                                        className="form-contact px-4 py-3 mt-2"
                                        type="email"
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <p>Message</p>
                                    <textarea
                                        className="mt-4 px-3"
                                        placeholder="Enter comment..."
                                        name=""
                                        id=""
                                        cols="100"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <div className="mt-6">
                                    <button className="button button-primary">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="google_map d-flex items-center justify-center mt-10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14900.61561387042!2d105.85000177634888!3d20.986466976339045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zNjQgbmVhciBUxrDGoW5nIE1haSwgSG_DoG5nIE1haSwgSGFub2k!5e0!3m2!1sen!2s!4v1679848199071!5m2!1sen!2s"
                            width="100%"
                            height="700"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Help;
