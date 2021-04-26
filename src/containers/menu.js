import {Navbar,Nav} from 'react-bootstrap'
function Menu() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Proyecto cloud</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Clientes</Nav.Link>
            <Nav.Link href="#link">Articulos</Nav.Link>
            <Nav.Link href="#link">Envios</Nav.Link>
            <Nav.Link href="#link">Cerrar sesion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default Menu;