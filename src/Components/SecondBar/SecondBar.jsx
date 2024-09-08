import { Container, Row } from "react-bootstrap"
import "./SecondBar.css"
import { CiClock2 } from "react-icons/ci";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SecondBar() {
  return (
    <div style={{backgroundColor: "var(--main-color)"}}>
        <Container className="d-flex align-items-center justify-content-center justify-content-md-between py-3">
           <div className="d-flex align-items-center justify-content-between gap-2 d-none d-md-flex  ">
            <CiClock2 className="fs-5"  style={{color: "white"}} />
           <p className="m-0 fs-5" style={{color: "white"}}>Monday - Saturaday, 8AM to 10PM</p>
           </div>
           <div className="d-flex align-items-center justify-content-between gap-2  ">
             <FontAwesomeIcon className="fs-5"  style={{color: "white"}} icon={faMobile} />
           <p className="m-0 fs-5" style={{color: "white"}} >Call us now +1 5589 55488 55</p>
           </div>
        </Container>
    </div>
  )
}
