import { Button, Col, Row } from "react-bootstrap";

export default function Input() {
  return (
    <div className="p-5 shadow d-flex flex-column justify-content-between " style={{height: "500px"}}>
       
       <Row className="">
           <Col className="p-0"><div className="d-xl-flex justify-content-start "><input  className="border-1 p-4 my-2 color-main " type="text" placeholder="Your Name" style={{width:"95%" ,borderColor: "var(--main-color)" , height: "40px"}}></input></div></Col>
           <Col className="p-0"><div className="d-xl-flex justify-content-end"><input className="border-1 p-4 my-2 color-main " type="text" placeholder="Your Email" style={{width:"95%" ,borderColor: "var(--main-color)" , height: "40px"}}></input></div></Col>
       </Row>
       <Row className="">
       <input className="border-1 p-4 my-2 color-main w-100" type="text" placeholder="Subject" style={{borderColor: "var(--main-color)" , height: "40px"}}></input>
       </Row>
       <Row><textarea className=" border-1 p-4 my-3" placeholder="Message" style={{height: "170px"}}></textarea></Row>
       <Row>        <div className="text-center ">
    <Button className="bg-main-color py-3 px-5 border-none m-0">Send Message</Button>
   </div>
</Row>

</div>

  )
}
