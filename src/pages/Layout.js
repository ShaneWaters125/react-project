import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <>
    <h1 className='title'>Catpedia, The best place to get cat pictures!</h1>
      <>
      <Navbar bg="dark" variant="dark">
          <Container>
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/GenerateCats">Generate Cats</Nav.Link>
              <Nav.Link href="/MoreCats">More Cats</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      <Outlet />
      </>
    </>
  )
};

export default Layout;