import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LuShoppingCart, LuUser2 } from "react-icons/lu";
import { BsFillBagCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

let Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-black main p-0 ">
                <Container >
                    <Navbar.Brand href="#home" className='white  m-0'>
                        <img src={require('./shoplogo.png')} alt="" width={60} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto white">
                            <Nav.Link href="#features" className='text-white'>
                                <Link to='/' className='text-white'>Home</Link>
                            </Nav.Link>
                            <NavDropdown title="Shop" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Shop Grid</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Shop List
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Shop Product</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Blog" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Blog One</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Blog Two
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Blog Three</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#features" className='text-white'>About</Nav.Link>
                            <Nav.Link href="#features" className='text-white'>Contact</Nav.Link>
                        </Nav>
                        <Nav className=' '>
                            <Link to="cart" className='text-white position-relative'> <LuShoppingCart className='fs-5'></LuShoppingCart>
                                <span class="position-absolute top-0  start-100 translate-middle badge rounded-circle bg-danger">
                                    1
                                    {/* <span class="visually-hidden">unread messages</span> */}
                                </span>
                            </Link>
                            <Nav.Link href="#deets" className='text-white p-0 mx-4'> <BsFillBagCheckFill className='fs-5'></BsFillBagCheckFill> </Nav.Link>
                            <Nav.Link href="#deets" className='text-white p-0'> <LuUser2 className='fs-5'></LuUser2> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default Header;