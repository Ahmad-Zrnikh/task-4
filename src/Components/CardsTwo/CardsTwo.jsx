import { FaUserDoctor } from "react-icons/fa6";
import { CiHospital1 } from "react-icons/ci";
import { FaFlask } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import CardTwo from "./CardTwo"
import "./CardsTwo.css"
import { Col, Container, Row } from "react-bootstrap";

export default function CardsTwo() {
  return (
    <div>
        <Container className="py-5">
        <Row>
          <Col>
          <CardTwo num="25" name="Doctors">
          <FaUserDoctor   />
            </CardTwo> 
            </Col>
          <Col>
          <CardTwo num="15" name="Departments">
          <CiHospital1 />
            </CardTwo> 
            </Col>
          <Col>
          <CardTwo num="8" name="Research Labs">
          <FaFlask />
            </CardTwo> 
            </Col>
          <Col>
          <CardTwo num="150" name="Awards">
          <FaAward />
            </CardTwo> 
            </Col>
       
        </Row>
      </Container>
    </div>
  )
}
