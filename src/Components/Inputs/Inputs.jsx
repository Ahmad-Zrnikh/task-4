import { Button, Col, Container, Row } from "react-bootstrap"
import "./Inputs.css"
import Title from "../Title/Title"

export default function Inputs() {
  return (
    <div style={{backgroundColor: "#f0ffff"}}>
         <Title id="makeAppointment" sectionOf="MAKE AN APPOINTMENT"/>
         <Container className="pb-5 text-center text-md-start">
            
            <Row className="">
                <Col className="p-0"><div className="d-xl-flex justify-content-start "><input  className="border-1 p-2 my-2 color-main" type="text" placeholder="Your Name" style={{width:"335px" ,borderColor: "var(--main-color)" , height: "40px"}}></input></div></Col>
                <Col className="p-0"><div className="d-xl-flex justify-content-center"><input className="border-1 p-2 my-2 color-main" type="text" placeholder="Your Email" style={{width:"335px" ,borderColor: "var(--main-color)" , height: "40px"}}></input></div></Col>
                <Col className="p-0"><div className="d-xl-flex justify-content-end"><input className="border-1 p-2 my-2 color-main" type="text" placeholder="Your Phone" style={{width:"335px" ,borderColor: "var(--main-color)" , height: "40px"}}></input></div></Col>
            </Row>
            <Row className="">
                <Col className="p-0"><div className="d-xl-flex justify-content-start"><input className="border-1 p-2 my-2" type="date" placeholder="Your Name" style={{width:"335px" ,borderColor: "var(--main-color)" , height: "40px"}}></input></div></Col>
                <Col className="p-0"><div className="d-xl-flex justify-content-center"><select className="border-1 p-2 my-2"  style={{width:"335px" ,borderColor: "var(--main-color)" , height: "40px"}}>
                    <option>Select Department</option></select></div></Col>
                <Col className="p-0"><div className="d-xl-flex justify-content-end"><select className="border-1 p-2 my-2" type="text" placeholder="Your Phone" style={{width:"335px" ,borderColor: "var(--main-color)" , height: "40px"}}>
                <option>Select Doctor</option>
                    </select></div></Col>
            </Row>
            <Row><textarea className=" border-1 p-2 my-3" placeholder="Message (Optional)" style={{height: "120px"}}></textarea></Row>
            <Row>        <div className="text-center ">
         <Button className="bg-main-color py-2 px-4 border-none m-0">Make an Appointment</Button>
        </div>
</Row>
         </Container>

    </div>
  )
}
