import { Accordion, Container } from "react-bootstrap";
import OneAccordion from "./OneAccordion";
import Title from "../Title/Title";

export default function () {
  return (
    <div style={{backgroundColor: "#f0ffff"}}>
        <Title id="questions" sectionOf="Frequently Asked Questions" />
        <Container className="py-5">
            <OneAccordion text="ipsum dolor sit amet consectetur adipisicing elit ?"/>
            <OneAccordion text="qui velit culpa voluptatum non autem. Nihil ab ?"/>
            <OneAccordion text="Fugiat, , culpa, explicabo perferendis omnis in ?"/>
            <OneAccordion text="nulla vel tempore at voluptatibus corrupti eius labore ?"/>
            <OneAccordion text="qui velit culpa voluptatum non autem. Nihil ab ?"/>
            <OneAccordion text="ipsum dolor sit amet consectetur adipisicing elit ?"/>
        </Container>
    </div>
  )
}
