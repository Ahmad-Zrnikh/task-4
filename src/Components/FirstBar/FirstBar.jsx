import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PiArrowSquareOutThin } from "react-icons/pi";
import { HiArrowDownTray } from "react-icons/hi2";
import "./FirstBar.css"
import { faChevronLeft, faChevronRight, faDisplay, faMobile, faTablet } from "@fortawesome/free-solid-svg-icons"
import { Col, Container, Row } from "react-bootstrap";

export default function FirstBar() {
  return (
    <div>
    <Container fluid >
        <Row className="d-flex ">
        <Col   xs={8} md={10} className="d-flex justify-content-between align-items-center  " style={{backgroundColor : "rgb(0, 0, 148)"}}>
            <div className="d-flex align-items-center justify-content-between gap-3 d-none d-lg-flex">
            <p className="m-0 fs-5 pointer" style={{color: "white"}}>BOOTSTRAP<span style={{color: "rgb(141, 141, 255)"}}>MADE</span></p>
            <FontAwesomeIcon className="m-0 fs-5 pointer" style={{color: "white"}} icon={faDisplay} />
            <FontAwesomeIcon className="m-0 fs-5 pointer" style={{color: "var(--main-color)"}} icon={faTablet} />
            <FontAwesomeIcon className="m-0 fs-5 pointer" style={{color: "var(--main-color)"}} icon={faMobile} />
            </div>
            <div className="d-flex align-items-center justify-content-between gap-3">
            <FontAwesomeIcon className="fs-5 pointer" style={{color: "var(--main-color)"}} icon={faChevronLeft} />
            <p className="m-0 fs-4 fw-bold pointer" style={{color: "white"}}>Medicio</p>
            <FontAwesomeIcon className="fs-5 pointer" style={{color: "var(--main-color)"}} icon={faChevronRight} />
            </div>
            <PiArrowSquareOutThin className="fs-2 m-0 pointer" style={{color: "var(--main-color)"}} />
        </Col>
        <Col xs={4} md={2} className="d-flex justify-content-center align-items-center p-1  gap-1" style={{backgroundColor: "rgb(141, 141, 255)"}}>
        <HiArrowDownTray className="fs-4 m-0 d-none d-xl-block pointer" style={{color: "white"}} />
        <p className="m-0 fs-6 fw-bold pointer" style={{color: "white"}}>FREE DOWNLOAD</p>
        </Col></Row>
    </Container>
    </div>
  )
}
