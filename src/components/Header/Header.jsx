import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';
import { FaSearch } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import Logo from '../../data/logo-regular.png';

const Header = () => {
    return (
        <header style={{ zIndex: '999' }} className="header-container-main fixed">
            <div className="header-main-deskop py-5">
                <div className="header-wrapper container-xl">
                    <div className="row align-items-center">
                        <div className="header-logo col-xl-4 col-lg-3">
                            <div className="header-logo-img">
                                <Link to="/">
                                    <img src={Logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-section col-xl-4 col-lg-5">
                            <div className="d-flex align-items-center gap-15">
                                <NavLink className="menu-items text-black fs-4" to="/shop">
                                    SHOP ALL
                                </NavLink>
                                <NavLink className="menu-items text-black fs-4" to="/decor">
                                    DECOR
                                </NavLink>
                                <NavLink className="menu-items text-black fs-4" to="/office">
                                    OFFICE
                                </NavLink>
                                <NavLink className="menu-items text-black fs-4" to="/living-room">
                                    LIVING ROOM
                                </NavLink>
                                <NavLink className="menu-items text-black fs-4" to="/bedroom">
                                    BEDROOM
                                </NavLink>
                                <button>
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                        <div className="header-navbar col-xl-4 col-lg-4">
                            <div className="d-flex justify-content-end align-items-center gap-10">
                                <NavLink className="menu-items text-black " to="/story">
                                    STORY
                                </NavLink>
                                <NavLink className="menu-items text-black" to="/contact">
                                    CONTACT
                                </NavLink>
                                <NavLink className="menu-items text-black" to="/tracker">
                                    TRACK ORDER
                                </NavLink>
                                <NavLink className="menu-items text-black" to="/help">
                                    HELP
                                </NavLink>
                                <NavLink className="menu-items text-black" to="/login">
                                    LOG IN
                                </NavLink>
                                <button className="header-cart">
                                    <div className="header-quality">
                                        <div>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <HiShoppingCart className="fs-1 active" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-main-moblie"></div>
        </header>
    );
};

export default Header;
