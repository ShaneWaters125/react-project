import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <>
    <h1 className='title'>Film Ratings</h1>
      <>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/" id="homenav">Home</Nav.Link>
              <Nav.Link href="/test">Test</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      <Outlet />
      </>
    </>
  )
};

export default Layout;