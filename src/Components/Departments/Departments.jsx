import { Col, Container, Row } from "react-bootstrap"
import "./Departments.css"
import { useEffect, useRef, useState } from "react";

export default function Departments() {
const firstbtn = useRef(null);
const secondbtn = useRef(null);
const thirdbtn = useRef(null);
const fourthbtn = useRef(null);
const fifthbtn = useRef(null);
const [first, setfirst] = useState(true);
const [second, setsecond] = useState(false);
const [third, setthird] = useState(false);
const [fourth, setfourth] = useState(false);
const [fifth, setfifth] = useState(false);


const moveOne = () => {
    setsecond(false);
    setthird(false);
    setfourth(false);
    setfifth(false);
setfirst(true);
 firstbtn.current.classList.add("active");
 secondbtn.current.classList.remove("active");
 thirdbtn.current.classList.remove("active");
 fourthbtn.current.classList.remove("active");
 fifthbtn.current.classList.remove("active");

}
const moveTwo = () => {
setfirst(false);
setthird(false);
setfourth(false);
setfifth(false);
setsecond(true);
secondbtn.current.classList.add("active");
firstbtn.current.classList.remove("active");
thirdbtn.current.classList.remove("active");
fourthbtn.current.classList.remove("active");
fifthbtn.current.classList.remove("active");

}
const movethree = () => {
setfirst(false);
setsecond(false);
setfourth(false);
setfifth(false);
setthird(true);
 thirdbtn.current.classList.add("active");
 firstbtn.current.classList.remove("active");
 secondbtn.current.classList.remove("active");
 fourthbtn.current.classList.remove("active");
 fifthbtn.current.classList.remove("active");

}
const moveFour = () => {
setfirst(false);
setsecond(false);
setthird(false);
setfifth(false);
setfourth(true);
 fourthbtn.current.classList.add("active");
 firstbtn.current.classList.remove("active");
 secondbtn.current.classList.remove("active");
 thirdbtn.current.classList.remove("active");
 fifthbtn.current.classList.remove("active");

}
const moveFive = () => {
// update();
setfirst(false);
setsecond(false);
setthird(false);
setfourth(false);
setfifth(true);
 firstbtn.current.classList.remove("active");
 secondbtn.current.classList.remove("active");
 thirdbtn.current.classList.remove("active");
 fourthbtn.current.classList.remove("active");
 fifthbtn.current.classList.add("active");

}

  return (
    <div>
        <Container className="py-5">
            <Row>
                <Col xs={12} md={6} lg={3} className="d-flex flex-column my-3 p-0">
                <button ref={firstbtn} onClick={moveOne} className="text-start p-3 fs-5 fw-bold
                 bg-transparent border-0 border-end border-3 active ">Cardiology</button>

                <button ref={secondbtn} onClick={moveTwo} className="text-start p-3 fs-5 fw-bold
                 bg-transparent border-0 border-end border-3">Neurology</button>

                <button ref={thirdbtn} onClick={movethree} className="text-start p-3 fs-5 fw-bold
                 bg-transparent border-0 border-end border-3">Hepatopolgy</button>

                <button ref={fourthbtn} onClick={moveFour} className="text-start p-3 fs-5 fw-bold
                 bg-transparent border-0 border-end border-3">Pediatrics</button>

                <button ref={fifthbtn} onClick={moveFive} className="text-start p-3 fs-5 fw-bold
                 bg-transparent border-0 border-end border-3">Ophthalmologists</button>
                </Col >
                <Col xs={12} md={6} lg={5} className="my-3">
                {first && <h3 className="">Cardiology</h3>}
                {second && <h3 className="">Neurology</h3>}
                {third && <h3 className="">Hepatopolgy</h3>}
                {fourth && <h3 className="">Pediatrics</h3>}
                {fifth && <h3 className="">Ophthalmologists</h3>}
                <p className="fst-italic color-main mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus</p>
                <p className="color-main mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quis eaque vero excepturi vitae, quibusdam hic
                     architecto reprehenderit optio dolorem, maxime similique aut? Asperiores numquam porro quo. Adipisci, ad saepe.</p>
                </Col>
                <Col xs={12}  lg={4}>
                {first && <img src="img/img/departments-1.jpg" alt="" className="w-100" />}
                {second && <img src="img/img/departments-2.jpg" alt="" className="w-100" />}
                {third && <img src="img/img/departments-3.jpg" alt="" className="w-100" />}
                {fourth && <img src="img/img/departments-4.jpg" alt="" className="w-100" />}
                {fifth && <img src="img/img/departments-5.jpg" alt="" className="w-100" />}</Col>
                
            </Row>
        </Container>
    </div>
  )
}
