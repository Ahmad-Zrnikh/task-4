import { Button, Container } from "react-bootstrap"
import "./Section.css"

export default function () {
  return (
    <div className="bg-main-color p-5">
        <Container  className="text-center bg-main-color px-5 py-5">
<h1 className="fw-bold" style={{color: "white"}}>In An emrgency? Need help now</h1>
<p style={{color: "white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, adipisci? Incidunt, sint. Nesciunt modi quidem quas.
     Eius, obcaecati. Aperiam quam qui reprehenderit consequuntur error quasi at quo, doloremque vel doloribus.</p>
    <Button variant="outline-light" className="px-5 py-2 gray">Make an Appointment</Button>
        </Container>
    </div>
  )
}
