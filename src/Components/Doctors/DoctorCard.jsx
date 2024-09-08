import { Card } from "react-bootstrap";

export default function DoctorCard({name , text , src}) {
  return (
    <div className="mb-4 ">
    <Card className="shadow border-none" style={{ width: '16rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title className="fs-5 fw-bold">{name}</Card.Title>
        <Card.Text className="color-main">{text}</Card.Text>
      </Card.Body>
    </Card>

    </div>
  )
}
