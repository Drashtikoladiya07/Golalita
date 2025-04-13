import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

function NavbarCustom() {
    const [active, setActive] = useState('Home');

    const selected = (id) => {
        setActive(id);
    };

    const data = {

        navItem: [
            { id: 'Home', title: 'Home' },
            { id: 'Merchants', title: 'Merchants' },
            { id: 'Product', title: 'Product' },
            { id: 'Contact', title: 'Contact Us' },
            { id: 'Register', title: 'Register Your Store' },
        ],
    };
    return (
        <Navbar expand="lg" bg="light" variant="light" className="py-3 fixed-top shadow-sm">
            <Container fluid className='px-5'>
                <Navbar.Brand href="#">
                    <img src={logo} alt="logo" className="img-fluid w-80" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-uppercase">
                        <Nav.Link className='d-flex'>{data.navItem.map((item) => (
                            <li className="nav-item text-uppercase" key={item.id}>
                                <Link
                                    to={item.id === 'Home' ? '/' : `/${item.id.toLowerCase()}`}
                                    className='px-3'
                                    onClick={() => selected(item.id)}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}</Nav.Link>
                        <Nav.Link href="#" className="px-3 font-bold">
                            <i className="fa-solid fa-plus"></i>
                        </Nav.Link>
                    </Nav>
                    <div className="d-flex ms-3">
                        <Nav.Link href="#" className="pe-4">
                            <i className="fa-solid fa-magnifying-glass text-2xl"></i>
                        </Nav.Link>
                        <Nav.Link href={'Merchants'}>
                            <i className="fa-solid fa-user text-2xl"></i>
                        </Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarCustom;
