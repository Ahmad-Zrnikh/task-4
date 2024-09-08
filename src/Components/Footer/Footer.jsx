import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div style={{backgroundColor: "#f0ffff"}}>
        <Container className="text-center pb-3">
        <p>&copy; Copyright <span className="fw-bold">Medicio</span> All rights Reserved</p>
        <p>Designed By <span className="color-main">BootstrapMade</span></p>
        </Container>
    </div>
  )
}
