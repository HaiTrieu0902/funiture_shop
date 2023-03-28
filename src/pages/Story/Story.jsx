import React from 'react';
import './story.css';
import bg01 from './../../data/product/bg-02.jpg';
import ab01 from './../../data/product/about-01.jpg';
import Meta from './../../components/Meta';
const Story = () => {
    return (
        <>
            <Meta title={'Story'}></Meta>
            <div className="story-container">
                <div className="fixed-header"></div>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className=" mt-32 d-flex flex-col items-center gap-6">
                                <h4 className="text-center text-xl text-gray-600">About us</h4>
                                <h1 className="text-center font-semibold text-8xl">Our story</h1>
                                <span className="shop_nerb"></span>
                                <div className="mt-16">
                                    <img src={ab01} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-12 d-flex p-44">
                                <div className="col-lg-6 ">
                                    <div>
                                        <h4 className="text-gray-500">About us</h4>
                                        <h1 className="font-bold text-7xl mt-4">Our team is what</h1>
                                        <h1 className="font-bold text-7xl ">we value the most</h1>
                                    </div>
                                </div>
                                <div className="col-lg-6 ">
                                    <div>
                                        <h1 className="font-medium text-4xl">
                                            With great people, modern and cool products emerge.
                                        </h1>
                                        <p className="text-gray-600 mt-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget
                                            enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet.
                                            Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit
                                            amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu
                                            fringilla id, dignissim in urna. Nulla varius dolor ac eros posuere, nec
                                            interdum justo condimentum. Phasellus lacinia sit amet tellus at pulvinar.
                                            Maecenas faucibus porta quam.
                                        </p>
                                        <p className="text-gray-600 mt-4">
                                            Ut in lorem ullamcorper velit facilisis pellentesque. In tincidunt metus
                                            eget arcu congue, ac aliquam velit ultricies. Aliquam posuere eu arcu et
                                            elementum. Donec pulvinar eget orci et pellentesque. Aenean at ultricies
                                            quam. Nunc feugiat sapien quis pharetra tincidunt. Etiam a viverra nulla.
                                            Pellentesque consectetur libero est, sed ullamcorper diam convallis ac.
                                            Praesent a convallis ante. Suspendisse potenti. Sed sed cursus erat, et
                                            auctor metus.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className=" mt-32 d-flex flex-col items-center gap-15">
                                    <h4 className="text-center text-xl text-gray-600">Our story</h4>
                                    <h1 className="text-center font-semibold text-8xl">How it all started</h1>
                                    <span className="shop_nerb"></span>
                                    <div className="w-1/2">
                                        <p className="text-center text-gray-600">
                                            Proin nec ante eu sem luctus bibendum. Sed ut fringilla dolor. Morbi
                                            suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce
                                            egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit.
                                            Vestibulum finibus felis non massa commodo molestie at id justo. Quisque
                                            sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed libero
                                            lacinia dignissim id bibendum metus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 d-flex mt-32">
                                <div className="col-lg-6">
                                    <h4>About the founder</h4>
                                    <span className="shop_nerb"></span>
                                    <div className="pr-60">
                                        <p className="text-gray-600 text-2xl mt-4">
                                            Proin nec ante eu sem luctus bibendum. Sed ut fringilla dolor. Morbi
                                            suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce
                                            egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit.
                                            Vestibulum finibus felis non massa commodo molestie at id justo. Quisque
                                            sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed libero
                                            lacinia dignissim id bibendum metus.
                                        </p>
                                        <p className="text-gray-600 text-2xl mt-4">
                                            Proin nec ante eu sem luctus bibendum. Sed ut fringilla dolor. Morbi
                                            suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce
                                            egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-24">
                                    <div>
                                        <img src={bg01} alt="" />
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

export default Story;
