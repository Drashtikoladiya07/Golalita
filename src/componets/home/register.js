import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";

function Register() {
    return (
        <div className='mt-28'>
            <h1 className='text-center text-3xl'>Registration Form</h1>
            <Container className='px-0'>
                <Row className='text-gray-500 pt-4'>
                    <Col lg={6} md={12}>
                        <Row>
                            <Col lg={4} md={4} sm={12}><label className='fw-bold text-sm pb-4 pt-1'>Store Name *</label></Col>
                            <Col lg={8} md={8} sm={12}><input type="text" className='w-full p-1 text-sm border mb-3 border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100' /></Col>
                            <Col lg={4} md={4} sm={12}><label className='fw-bold text-sm pb-4'>Store Phone Number *</label></Col>
                            <Col lg={8} md={8} sm={12}><input type="text" className='w-full p-1 text-sm border mb-4 border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100' /></Col>
                            <Col lg={4} md={4} sm={12}><label className='fw-bold text-sm pb-3'>Floor/Suite</label></Col>
                            <Col lg={8} md={8} sm={12}><input type="text" className='w-full p-1 text-sm border mb-3 border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100' /></Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12}>
                        <Row>
                            <Col lg={3} md={4} sm={12}><label className='fw-bold text-sm pb-4 pt-1'>Store Email *</label></Col>
                            <Col lg={9} md={8} sm={12}><input type="text" className='w-full p-1 text-sm border mb-2 border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100' /></Col>
                            <Col lg={3} md={4} sm={12}><label className='fw-bold text-sm pb-4'>Store Address</label></Col>
                            <Col lg={9} md={8} sm={12}><textarea type="text" className='w-full p-1 text-sm border mb-2 border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100' /></Col>
                            <Col lg={3} md={4} sm={12}><label className='fw-bold text-sm pb-3'>City</label></Col>
                            <Col lg={9} md={8} sm={12}><input type="text" className='w-full p-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100' /></Col>
                        </Row>
                    </Col>
                    <button className='text-white offset-lg-2 offset-md-3 mt-3 p-1 px-4 bg-teal-400 rounded w-fit'>Submit</button>
                </Row>
            </Container>
        </div>
    );
};

export default Register;