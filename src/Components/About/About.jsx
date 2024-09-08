import { Col, Container, Row } from "react-bootstrap"
import "./About.css"
import { IoMdPlayCircle } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
export default function About() {
  return (
    <div>
        <Container className="py-5">
            <Row  className="py-3 d-flex justify-content-between">
                <Col xs={12} xl={6}>
                <div className="position-relative h-100">
                    <img src="img/img/about.jpg" alt="" className="w-100 h-100"/>
                    <IoMdPlayCircle className="position-absolute top-50 start-50 translate-middle color-main pointer"
                     style={{fontSize: "95px"}}/>
                </div>
                </Col>
                <Col xs={12} xl={6}>
                <h3 className="fw-bold"> Consectetur quae id cumque consequatur quae similique? Sit doloremque.</h3>
                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quos deserunt asperiores minima natus alias quo adipisci possimus distinctio, </p>
                <p><IoCheckmarkDone className="color-main fs-4" /> Lorem ipsum, dolor sit amet consectetur adipisicing elit Magnam.</p>
                <p><IoCheckmarkDone className="color-main fs-4" /> nesciunt maxime eum dolore quidem odio amet similique. </p>
                <p><IoCheckmarkDone className="color-main fs-4" /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aliquam quas 
                sapiente aliquid deserunt corporis praesentium asperiores delectus magnam, perferendis quo at ipsam sequi natus velit,
                 eius veritatis aperiam quam.</p>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum tempora praesentium rem unde rerum alias porro, error excepturi
                     dolore? Facere laborum at debitis quo! Expedita quo nisi officia minima quia.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
