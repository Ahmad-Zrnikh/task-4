import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import "./NavBar.css"

export default function NavBar({logo}) {
  return (
    <div>
         <Navbar expand="xl" className="bg-body-tertiary">
      <Container className="py-2">
        <Navbar.Brand href="#"><img src={logo} alt="logo" style={{height: "35px"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll" className="flex-grow-0 ">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex justify-content-between  "
            navbarScroll
          >
            <Nav.Link href="#" disabled>
              HOME
            </Nav.Link>
            <Nav.Link href="#about" >ABOUT</Nav.Link>
            <Nav.Link href="#services">SERVICES</Nav.Link>
            <Nav.Link href="#departments">DEPARTMENTS</Nav.Link>
            <Nav.Link href="#doctors">DOCTORS</Nav.Link>
            <NavDropdown title="DROPDOWN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">CONTACT</Nav.Link>

            
          </Nav>          
         
        </Navbar.Collapse>
        <div className="text-center ">
         <Button className="bg-main-color py-2 px-4 border-none m-0"><a href="#makeAppointment" className="text-decoration-none" style={{color: "white"}}>Make an Appointment</a></Button>
        </div>
      </Container>
    </Navbar>
    </div>
  )
}
