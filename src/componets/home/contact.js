import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";

function Contact() {
    return (
        <div className='mt-20'>
            <div className="bg-bgImage3 img-fluid bg-no-repeat bg-fixed">
                <div className='bg-cover' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))' }}>
                    <h1 className='text-white text-3xl p-5'>Contact us</h1>
                </div>
            </div>
            <Container>
                <Row className='pt-4 text-gray-500'>
                    <Col lg={8} md={12} className='pe-5'>
                        <h1 className='text-sm'>Contact us about anything related to our company or services.<br />We'll do our best to get back to you as soon as possible.</h1>
                        <form className='py-4'>
                            <Row>
                                <Col lg={3} md={3} sm={3}>
                                    <label className='fw-bold text-sm pb-3'>Your Name *</label><br />
                                    <label className='fw-bold text-sm pb-3'>Phone Number</label><br />
                                    <label className='fw-bold text-sm pb-3'>Email *</label><br />
                                    <label className='fw-bold text-sm pb-3'>Your Company</label><br />
                                    <label className='fw-bold text-sm pb-3'>Subject *</label><br />
                                    <label className='fw-bold text-sm pb-3'>Your Question</label>
                                </Col>
                                <Col lg={9} md={9} sm={9}>
                                    <input type="text" className='w-96 p-1 text-sm border mb-2 border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100' />
                                    <input type="text" className='w-96 p-1 text-sm border mb-2 border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100' />
                                    <input type="text" className='w-96 p-1 text-sm border mb-2 border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100' />
                                    <input type="text" className='w-96 p-1 text-sm border mb-2 border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100' />
                                    <input type="text" className='w-96 p-1 text-sm border mb-2 border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100' />
                                    <textarea type="text" className='w-96 p-1 text-sm border mb-2 border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100' /><br />
                                    <button className='text-white p-1 px-4 bg-teal-400 rounded w-fit'>Submit</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col lg={4} md={12}>
                        <h1 className='text-sm'>Golalita Trading</h1>
                        <div className='d-flex text-sm py-2'>
                            <i className="fa-solid fa-location-dot pe-2 pt-1"></i>
                            <p>Tornado Tower, 22nd Floor <br />West Bay P.O Box: 34004 <br />Doha Qatar</p>
                        </div>
                        <div className='d-flex text-sm pb-3'>
                            <i className="fa-solid fa-envelope pe-2 pt-1"></i>
                            <p>support@golalita.com</p>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465542.7720138579!2d51.10971919795958!3d25.270876220927114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sin!4v1735796303849!5m2!1sen!2sin" width="300" height="270" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Contact;