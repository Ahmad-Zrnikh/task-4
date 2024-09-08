import { Col, Container, Row } from "react-bootstrap"
import "./Features.css"
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { FaStaffSnake } from "react-icons/fa6";
import { FaLungs } from "react-icons/fa"
import Feature from "./Feature"

export default function Features() {
  return (
    <div>
        <Container className="py-5">
            <Row className="d-flex justify-content-between">
                <Col xs={12} xl={6}>
                <img src="img/img/features.jpg" alt="" className="w-100 h-100"/>
                </Col>
                <Col xs={12} xl={6}>
                <h3 className="fw-bold"> Consectetur quae id cumque consequatur quae similique
                </h3>
                <div className="bg-main-color  my-4" style={{width: "80px" , height: "3px"}}></div>
<p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem reiciendis
   aspernatur reprehenderit explicabo cum distinctio a optio, tenetur inventore, sunt nesciunt nostrum
    ut nemo exercitationem? Itaque voluptatum facilis repellat.</p>
    <Feature title="lorem ipsum" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad aut dolores autem eos minus illo praesentium aliquam
    "><FaHandHoldingMedical /></Feature>
    <Feature title="Nemo Enim" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad aut dolores autem eos minus illo praesentium aliquam
    "><FaSuitcaseMedical /></Feature>
    <Feature title="Dine Pad" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad aut dolores autem eos minus illo praesentium aliquam
    "><FaStaffSnake /></Feature>
    <Feature title="Tride clov" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad aut dolores autem eos minus illo praesentium aliquam
    "><FaLungs /></Feature>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
