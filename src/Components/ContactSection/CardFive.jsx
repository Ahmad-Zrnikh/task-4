import { Col, Row } from "react-bootstrap";
import "./CardFive.css"
import { PiMapPinLight } from "react-icons/pi";
export default function CardFive({title , text ,children}) {
  return (
    <div className="h-100">
    <div className="text-center shadow py-4 px-3 mb-5">
        <div className=" d-flex justify-content-center align-items-center mx-auto rounded-circle border-2 mb-3 dotted" style={{width: "80px" , height: "80px" ,borderColor: "var(--main-color)" }}>
        <div className="color-main text-center d-flex justify-content-center align-items-center" style={{fontSize: "33px"}}>{children}</div></div>
<h3 className="fw-bold">{title}</h3>
<p>{text}</p>
    </div>
    </div>
  )
}
