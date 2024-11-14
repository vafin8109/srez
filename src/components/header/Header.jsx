import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Music store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Главная</Nav.Link>
        <Nav.Link href="/catalog">Каталог</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Поиск"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Найти</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
