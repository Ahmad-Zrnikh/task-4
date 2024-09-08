import { Col, Container, Row } from "react-bootstrap"
import "./Services.css"
import Service from "./Service"
import { FaHeartbeat, FaPills, FaThermometer } from "react-icons/fa"
import { FaHospitalUser } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";
import { FaRegHourglassHalf } from "react-icons/fa6"

export default function Services() {
  return (
    <div>
        <Container className="py-5">
            <Row className="mb-5 ">
                <Col  >
                <Service title="Nesciunt Mete" ><FaHeartbeat /></Service>
                </Col>
                <Col  >
                <Service title="Eosle Commodi" ><FaPills /></Service>
                </Col>
                <Col >
                <Service title="Ledo Markt" ><FaHospitalUser /></Service>
                </Col>
            </Row>
            <Row>
                <Col>
                <Service title="Asperiores Commodit" ><FaRegHourglassHalf /></Service>
                </Col>
                <Col>
                <Service title="Velit Doloremque" ><FaHeartbeat /></Service>
                </Col>
                <Col>
                <Service title="Dolori Architecto" ><FaNotesMedical /></Service>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
