import { Card, Col, Container, Row } from "react-bootstrap"
import "./Doctors.css"
import DoctorCard from "./DoctorCard"
import Title from "../Title/Title"

export default function Doctors() {
  return (
    <div style={{backgroundColor: "#f0ffff"}}>
        <Title id="doctors" sectionOf="Doctors"/>

        <Container className="py-5">
            <Row>
             <Col>
               <DoctorCard src="img/img/doctors/doctors-1.jpg" name="Walter white" text="Chief Medical Officer" />
             </Col>
             <Col>
               <DoctorCard src="img/img/doctors/doctors-2.jpg" name="Sarah Jhonson" text="Anesthesiologist" />
             </Col>
             <Col>
               <DoctorCard src="img/img/doctors/doctors-3.jpg" name="William Anderson" text="Cardiology" />
             </Col>
             <Col>
               <DoctorCard src="img/img/doctors/doctors-4.jpg" name="Amanda Jepson" text="Neurosurgeon" />
             </Col>
            </Row>
        </Container>
    </div>
  )
}
