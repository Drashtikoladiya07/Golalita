import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import g from '../../assets/logo/g.png';
import qrcode from '../../assets/img/qrcode.jpeg';
import payment from '../../assets/img/payment.png';
import mslogo from '../../assets/img/Microsoft-Logo.jpg';
import security1 from '../../assets/img/security-3.png';
import security2 from '../../assets/img/security-4.png';


function Footer() {
    return (
        <div>
            <div className='bg-teal-400'>
                <Container className='py-3 mt-5'>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <div className='d-flex text-white'>
                                <i class="fa-solid fa-truck pe-3 text-2xl"></i>
                                <h1 className='pt-1 text-base'>GREAT DEALS ACROSS QATAR</h1>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className='d-flex text-white'>
                                <i class="fa-regular fa-star pe-3 text-2xl"></i>
                                <h1 className='pt-1 text-base'>REWARDS PROGRAM</h1>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className='d-flex text-white'>
                                <i class="fa-solid fa-shield-halved pe-3 text-2xl"></i>
                                <h1 className='pt-1 text-base'>ENJOY SHOPPING</h1>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className='d-flex text-white'>
                                <i class="fa-solid fa-rotate-right pe-3 text-2xl"></i>
                                <h1 className='pt-1 text-base'>REUSE EARNED POINTS</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <footer className='bg-black'>
                <h1 className='text-center text-xl text-white py-4'>Need help? Call our award-winning support team 24/7 at +974 3044 4432</h1>
                <div>
                    <Container>
                        <Row className='py-4'>
                            <Col lg={3} md={6} sm={12}>
                                <img src={g} alt="" className='w-12' />
                                <p className='text-gray-400 py-3 text-sm'>Different packages of loyalty program, let your employees enjoy different services through either virtual cards or real cards.</p>
                                <div>
                                    <a href="https://www.facebook.com/profile.php?id=100083027697442"><i class="fa-brands fa-facebook text-white p-2 bg-teal-500 hover:bg-slate-800 me-2 rounded-5"></i></a>
                                    <a href="https://twitter.com/@2030company"><i class="fa-brands fa-twitter text-white p-2 bg-teal-500 hover:bg-slate-800 me-2 rounded-5"></i></a>
                                    <a href="https://www.linkedin.com/in/ali-al-yafie-83b297b2"><i className="fa-brands fa-linkedin-in text-white p-2 bg-teal-500 hover:bg-slate-800 me-2 rounded-5"></i></a>
                                    <a href="https://www.youtube.com/@golalitarewards"><i class="fa-brands fa-youtube text-white p-2 bg-teal-500 hover:bg-slate-800 me-2 rounded-5"></i></a>
                                    <a href="https://www.instagram.com/golalita_dm/"><i class="fa-brands fa-instagram text-white p-2 bg-teal-500 hover:bg-slate-800 me-2 rounded-5"></i></a>
                                </div>
                            </Col>
                            <Col lg={2} md={6} sm={12}>
                                <h1 className='text-white py-3 text-base'>Home</h1>
                                <a href="/web/static/src/Golalita.pdf" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>About Us</a><br />
                                <a  className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Contact Us</a><br />
                                <a  className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Privacy Policy</a>
                            </Col>
                            <Col lg={2} md={6} sm={12}>
                                <h1 className='text-white py-3 text-base'>International - Booking Hotels - VIP Services</h1>
                                <a href="https://www.fourseasons.com/geneva/" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Four Seasons Geneva</a><br />
                                <a href="https://www.vipponholidays.com" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Vippon Holidays Turkey</a><br />
                                <a href="https://www.goldenglobeint.com" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Golden Globe Int.</a><br />
                                <a href="https://genovicboutiques.com/" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Genovic Boutiques</a><br />
                                <a href="https://ktsgroup.info/" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>KTS France</a><br />
                                <a href="https://ktsgroup.info/" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Makkah Hotels</a>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <h1 className='text-white py-3 text-base'>International - Booking Hotels - VIP Services</h1>
                                <a href="https://www.peninsula.com/en/default" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>The Peninsula Hotels</a><br />
                                <a href="https://www.bulgarihotels.com/en_US/paris" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Bvlgari Hotel Paris</a><br />
                                <a href="https://www.conservatoriumhotel.com/" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Consevatorium Hotel</a><br />
                                <a href="https://www.hotelcaferoyal.com/" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Hotel Café Royal</a><br />
                                <a href="https://www.emerald-maldives.com/" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Emerald Maldives Resort & Spa</a><br />
                                <a href="https://zoyawellbeing.com/" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>ZOYA Health & Wellbeing Resort</a>
                            </Col>
                            <Col lg={2} md={6} sm={12}>
                                <h1 className='text-white py-3 text-base'>International - Booking Hotels - VIP Services</h1>
                                <a href="https://www.harithavillas.com" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Haritha Villas & Spa</a><br />
                                <a href="https://www.hyatt.com/en-US/hotel/turkey/park-hyatt-istanbul-macka-palas/istph" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Park Hyatt Istanbul</a><br />
                                <a href="https://laurenbergercollection.com" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Lauren Berger Collection</a><br />
                                <a href="https://www.viceroybali.com/en/" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Viceroy Bali</a><br />
                                <a href="https://secretbay.dm" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>Secret Bay</a><br />
                                <a href="https://www.myprivatevillas.com" className='text-gray-400 text-sm leading-7 hover:underline hover:text-white underline-offset-4'>My Private Villas</a>
                            </Col>
                            <Col lg={5}></Col>
                            <Col lg={7} md={12} className='d-flex py-4 pb-5'>
                                <Row>
                                    <Col lg={2} md={2} sm={12} className='py-3'><img src={qrcode} alt="" className='w-14' /></Col>
                                    <Col lg={6} md={6} sm={12} className='py-3'><img src={mslogo} alt="" className='mt-4 px-4' /></Col>
                                    <Col lg={2} md={2} sm={12} className='py-3'><img src={security1} alt=""/></Col>
                                    <Col lg={2} md={2} sm={12} className='py-3'><img src={security2} alt=""/></Col>
                                </Row>
                            </Col>
                            <Col lg={9} md={12}>
                                <h1 className='text-gray-400 text-sm py-3'>Copyright © Golalita Trading</h1>
                            </Col>
                            <Col lg={3} md={12}>
                                <img src={payment} alt="" className='py-3'/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </div>
    );
};

export default Footer;