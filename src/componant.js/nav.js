import {Navbar,Nav} from 'react-bootstrap';

function Navb() {
    return (
      <div>
       <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
  <Navbar.Brand href="#home"><img className="logo" src="./images/logo.png" alt =""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Acceuil</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Films</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Favoris
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
       
      </div>
    );
  }

  export default Navb;