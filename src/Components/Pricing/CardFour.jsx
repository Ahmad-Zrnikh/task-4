import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function CardFour() {
  return (
    <div>
        <Container className="py-5">
            <Row>
                <Col>
                <Card className="text-center border-none shadow mb-4" style={{width: "250px"}}>
      <Card.Header className="p-4 fs-5 border-none">Free</Card.Header>
      <Card.Body>
        <Card.Title className="fs-3 fw-bold mb-4"><sup>$</sup>0 <span className="fs-5 color-main fw-normal">/ month</span></Card.Title>
        <Card.Text>
          <p>Aida dere</p>
          <p>amet consectetur adipis</p>
          <p>Illo error dolor dolorum ea</p>
          <p className="color-main"><del>Pharetra massa</del></p>
          <p className="color-main"><del>massa ultricies mi</del></p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted p-4 border-none">
        <Button className="bg-main-color py-2 px-5 border-none m-0">Buy Now</Button>
</Card.Footer>
    </Card>
</Col>


<Col>
    <Card className="text-center border-none shadow mb-4 " style={{width: "250px"}}>
      <Card.Header className="p-4 fs-5 border-none bg-main-color" style={{color: "white"}}>Business</Card.Header>
      <Card.Body>
        <Card.Title className="fs-3 fw-bold mb-4"><sup>$</sup>19 <span className="fs-5 color-main fw-normal">/ month</span></Card.Title>
        <Card.Text>
          <p>Aida dere</p>
          <p>amet consectetur adipis</p>
          <p>Illo error dolor dolorum ea</p>
          <p>Pharetra massa</p>
          <p className="color-main"><del>massa ultricies mi</del></p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted p-4 border-none">
        <Button className="bg-main-color py-2 px-5 border-none m-0">Buy Now</Button>
</Card.Footer>
    </Card>
</Col>


<Col>
    <Card className="text-center border-none shadow mb-4" style={{width: "250px"}}>
      <Card.Header className="p-4 fs-5 border-none">Developer</Card.Header>
      <Card.Body>
        <Card.Title className="fs-3 fw-bold mb-4"><sup>$</sup>29 <span className="fs-5 color-main fw-normal">/ month</span></Card.Title>
        <Card.Text>
          <p>Aida dere</p>
          <p>amet consectetur adipis</p>
          <p>Illo error dolor dolorum ea</p>
          <p >Pharetra massa</p>
          <p >massa ultricies mi</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted p-4 border-none">
        <Button className="bg-main-color py-2 px-5 border-none m-0">Buy Now</Button>
</Card.Footer>
    </Card>
</Col>


<Col>
    <Card className="text-center border-none shadow mb-4 psition-relative overflow-hidden" style={{width: "250px"}}>
      <Card.Header className="p-4 fs-5 border-none">Ultimate</Card.Header>
      <Card.Body>
        <Card.Title className="fs-3 fw-bold mb-4"><sup>$</sup>49 <span className="fs-5 color-main fw-normal">/ month</span></Card.Title>
        <Card.Text>
          <p>Aida dere</p>
          <p>amet consectetur adipis</p>
          <p>Illo error dolor dolorum ea</p>
          <p >Pharetra massa</p>
          <p >massa ultricies mi</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted p-4 border-none">
        <Button className="bg-main-color py-2 px-5 border-none m-0">Buy Now</Button>
</Card.Footer>
<div className="position-absolute bg-main-color  px-5 py-1" style={{color: "white" , top: "17px" , right: "-48px" , transform: "rotate(45deg)"}}>Advanced</div>
    </Card>
</Col>
            </Row>
    </Container>
    </div>
  )
}
