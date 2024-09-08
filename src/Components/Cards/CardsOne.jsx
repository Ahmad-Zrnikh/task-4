import { Col, Container, Row } from "react-bootstrap";
import CardOne from "./CardOne"
import { FaPills } from "react-icons/fa"
import { FaThermometer } from "react-icons/fa6"
import "./CardsOne.css"
import { FaHeartbeat } from "react-icons/fa";
import { FaRegHourglassHalf } from "react-icons/fa6";


export default function CardsOne() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col > <CardOne title="Lorem Ipsum" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo distinctio illo nostrum cumque"
        ><FaHeartbeat /></CardOne></Col>
          <Col> <CardOne title="Sed ut perspici" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo distinctio illo nostrum cumque"
        ><FaPills /></CardOne></Col>
          <Col  > <CardOne title="magni Dolores" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo distinctio illo nostrum cumque"
        ><FaThermometer /></CardOne></Col>
          <Col > <CardOne title="Nemo Enim" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo distinctio illo nostrum cumque"
        ><FaRegHourglassHalf /></CardOne></Col>
        </Row>
      </Container>
       
       
    </div>
  )
}
