import { Col, Container, Row } from "react-bootstrap";
import { PiMapPinLight } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import CardFive from "./CardFive";
import Input from "./Input";
export default function ContactSection() {
  return (
    <div>
        <Container className="py-5">
            <Row>
    <Col xs={12} lg={6} className="h-100">   
    <Row >
        <CardFive title="Address" text="A 108 Adam Street, New York, NY 535022"><PiMapPinLight /></CardFive>
    </Row>
    <Row>
<Col xs={12} lg={6}>
<CardFive title="Call Us" text="+1 5589 55488 55"><FiPhone /></CardFive>
</Col>
<Col xs={12} lg={6}>
<CardFive title="Email Us" text="info@example.com"><IoIosMail /></CardFive>
</Col>
    </Row>
    </Col>

    <Col lg={6}>
    <Input/>
    </Col>
            </Row>
        </Container>
    </div>
  )
}
