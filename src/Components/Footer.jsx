import React from 'react'
import moment from "moment-timezone";
import { RiShieldCrossLine } from 'react-icons/ri';
import { ImFacebook } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';
import '../assets/styles/Footer.css'

const Footer = () => {
    const currentYear = moment().get("year");
    return (
        <div className="container-fluid bg-blue margin-top-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer">
                            <div className="footer-content">
                                <div className="footer-sections">
                                    <div className="footer-section">
                                        <h4>HealthChat</h4>
                                        <ul>
                                            <li>
                                                <a href="#/">About</a>
                                            </li>
                                            <li>
                                                <a href="#/">Our Team</a>
                                            </li>
                                            <li>
                                                <a href="#/">Careers</a>
                                            </li>
                                            <li>
                                                <a href="#/">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="#/">Blog</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-section">
                                        <h4>For Patients</h4>
                                        <ul>
                                            <li>
                                                <a href="#/">Search for doctors</a>
                                            </li>
                                            <li>
                                                <a href="#/">Search for clinics</a>
                                            </li>
                                            <li>
                                                <a href="#/">Search for hospitals</a>
                                            </li>
                                            <li>
                                                <a href="#/">Book full body Checkups</a>
                                            </li>
                                            <li>
                                                <a href="#/">Book Diagnostic Tests</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-section">
                                        <h4>Socials</h4>
                                        <ul>
                                            <li>
                                                <a href="#/"> <ImFacebook /> Facebook</a>
                                            </li>
                                            <li>
                                                <a href="#/"><FiGithub /> Github</a>
                                            </li>
                                            <li>
                                                <a href="#/"><AiOutlineYoutube /> Youtube</a>
                                            </li>
                                            <li>
                                                <a href="#/"><BsTwitter /> Twitter</a>
                                            </li>
                                            <li>
                                                <a href="#/"><SiTiktok />TikTok</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-section">
                                        <h4>More</h4>
                                        <ul>
                                            <li>
                                                <a href="#/">Help & support</a>
                                            </li>
                                            <li>
                                                <a href="#/">Developers</a>
                                            </li>
                                            <li>
                                                <a href="#/">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href="#/">Terms & Conditions</a>
                                            </li>
                                            <li>
                                                <a href="#/">Healthcare Directory</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-copy-right">
                                    <div className="footer-logo">
                                        <a href="#/">
                                            <RiShieldCrossLine />
                                        </a>
                                    </div>
                                    <div className="footer-copy-right-text">
                                        <p>
                                            Copyright &copy; {currentYear}, HealthCare. All rights reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer