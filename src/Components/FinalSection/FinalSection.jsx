import { faFacebook, faInstagram, faLinkedin, faTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import Icon from "./Icon";
import ColumnText from "./ColumnText";

export default function FinalSection() {
  return (
    <div style={{backgroundColor: "#f0ffff"}}>
        <Container className="py-3 pt-5">
            <Row>
                <Col  xl={4}>
                <h2 className="fw-bold mb-5">Medico</h2>
                <p className="color-main">A108 Adam Street</p>
                <p className="color-main mb-4">New York, NY 535022</p>
                <p className="color-main"><span className="fw-bold fs-5" style={{color: "black"}}>Phone: </span>+1 5589 55488 55</p>
                <p className="color-main mb-5"><span className="fw-bold fs-5" style={{color: "black"}}>Email: </span>info@examole.com</p>
                <div className="d-flex justify-content-between mb-5" style={{width: "250px"}}>
   <Icon> <FontAwesomeIcon icon={faXTwitter}  className="color-main fs-5"/></Icon>
   <Icon> <FontAwesomeIcon icon={faFacebook} className="color-main fs-5"/></Icon>
   <Icon> <FontAwesomeIcon icon={faInstagram} className="color-main fs-5"/></Icon>
   <Icon> <FontAwesomeIcon icon={faLinkedin} className="color-main fs-5"/></Icon>
</div>
                </Col>
                <Col xl={2}>
                <ColumnText title="Useful Links" one="Home" two="About us" three="Services" four="Terms of service" five="Privacy Policy"/>
                </Col>
                <Col xl={2}>
                <ColumnText title="Our Services" one="Web Design" two="Web Development" three="Product Management" four="Marketing" five="Graphic Design"/>
                </Col>
                <Col xl={2}>
                <ColumnText title="Hic solutasetp" one="Molestiae accusamus iure" two="Excepturi dignissimos" three="Suscipit distinctio" four="Dilecta" five="Sit quas consectetur"/>
                </Col>
                <Col xl={2}>
                <ColumnText title="Nobis illum" one="Ipsam" two="Laudantium dolorum" three="Dinera" four="Trodelas" five="Flexo"/>
                </Col>
            </Row>
            <hr style={{opacity: "0.1"}}/>
        </Container>
    </div>
  )
}
