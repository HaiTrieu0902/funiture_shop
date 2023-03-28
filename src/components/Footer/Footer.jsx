import React from 'react';
import Logo from '../../data/logo-regular.png';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import './footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-main-deskop py-5">
                    <div className="footer-wrapper container-xl">
                        <div className="row">
                            <div className="footer-logo col-xl-6">
                                <div className="footer-logo-img">
                                    <Link to="/">
                                        <img src={Logo} alt="" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-5">
                                <div className="footer-menu mt-4">
                                    <div className="footer-menu-contain d-flex justify-content-between gap-15">
                                        <div className="footer-menu-list d-flex flex-column">
                                            <h4>LINKS</h4>
                                            <div className="d-flex flex-column gap-2">
                                                <NavLink className="footer-menu-item text-black fs-4" to="/story">
                                                    Story
                                                </NavLink>
                                                <NavLink className="text-black fs-4" to="/contact">
                                                    Contact
                                                </NavLink>
                                                <NavLink className="text-black fs-4" to="/tracker">
                                                    Track Order
                                                </NavLink>
                                                <NavLink className="text-black fs-4" to="/help">
                                                    Help
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="footer-menu-list d-flex flex-column">
                                            <h4>CATEGORIES</h4>
                                            <div className="d-flex flex-column gap-2">
                                                <NavLink className="footer-menu-item text-black fs-4" to="/bedroom">
                                                    Bedroom <span>(11)</span>
                                                </NavLink>
                                                <NavLink className="text-black fs-4" to="/decor">
                                                    Decor <span>(2)</span>
                                                </NavLink>
                                                <NavLink className="text-black fs-4" to="/living-room">
                                                    Living Room <span>(6)</span>
                                                </NavLink>
                                                <NavLink className="text-black fs-4" to="/office">
                                                    Office <span>(9)</span>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="footer-menu-list d-flex flex-column">
                                            <h4>LINKS</h4>
                                            <div className="d-flex flex-column gap-2">
                                                <div>
                                                    <form action="">
                                                        <input type="email" placeholder="Your email..." required />
                                                        <button className="button button-primary mt-4">
                                                            Subscribe
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-1"></div>
                        </div>
                    </div>

                    <div className="footer-main-link">
                        <div className="footer-wrapper container-xl pt-5">
                            <div className="d-flex justify-content-between">
                                <div className="footer-copyright">
                                    <p> Copyright © 2023 Furniture Shop | Powered by Hai Trieu</p>
                                </div>
                                <div className="d-flex gap-15 footer-social">
                                    <a href="https://www.facebook.com/trieuql123">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.instagram.com/?hl=fr">
                                        <AiFillInstagram />
                                    </a>
                                    <a href="https://github.com/HaiTrieu0902">
                                        <AiFillGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-main-mobile"></div>
            </div>
        </footer>
    );
};

export default Footer;
