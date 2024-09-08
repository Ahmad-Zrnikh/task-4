import { FaHandHoldingMedical } from "react-icons/fa"
import "./Service.css"

export default function Service({title, children}) {
  return (
    <div className="text-center" style={{width: "350px"}}>
        <div className="shadow d-flex justify-content-center align-items-center mx-auto rounded-circle mb-3 " style={{width: "90px" , height: "90px"}}>
   <div className="color-main d-flex justify-content-center align-items-center" style={{fontSize: "39px"}}>{children}</div></div>
   <h2 className="fw-bold">{title}</h2>
<div className="bg-main-color mx-auto my-4" style={{width: "80px" , height: "3px"}}></div>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Consequuntur autem odit optio repellendus possimus, recusandae ea veritatis, dignissimos  </p>
    </div>
  )
}
