import { Container } from "react-bootstrap"
import "./Title.css"

export default function Title({id , sectionOf}) {
  return (
    <div id={id} className="py-3">
        <Container  className="text-center  px-5 py-5">
<h1 className="fw-bold">{sectionOf}</h1>
<div className="bg-main-color mx-auto my-4" style={{width: "80px" , height: "3px"}}></div>
<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, adipisci? Incidunt, sint. Nesciunt modi quidem quas.
     </p>
    
        </Container>
    </div>
  )
}
