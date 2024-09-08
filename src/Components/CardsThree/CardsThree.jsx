import { Carousel, Container } from "react-bootstrap"

import "./CardsThree.css"
import CardThree from "./CardThree"

export default function CardsThree() {
  return (
    <div>
        <Container className="text-center py-5 d-flex justify-content-center">
        <Carousel className="d-flex justify-content-center">
      <Carousel.Item>
        <CardThree src="img/img/testimonials/testimonials-1.jpg" name="Matt Brandon" text="Freelancer"/>
      </Carousel.Item>

      <Carousel.Item>
      <CardThree src="img/img/testimonials/testimonials-2.jpg" name="Jena Karles" text="Store Owner"/>
      </Carousel.Item>

      <Carousel.Item>
      <CardThree src="img/img/testimonials/testimonials-3.jpg" name="Jeny Karlis" text="Store Owner"/>
      </Carousel.Item>

      <Carousel.Item>
      <CardThree src="img/img/testimonials/testimonials-4.jpg" name="Matt Brandon" text="Freelancer"/>
      </Carousel.Item>

      <Carousel.Item>
      <CardThree src="img/img/testimonials/testimonials-5.jpg" name="John Larson" text="Enterpreneur"/>
      </Carousel.Item>
    </Carousel>
        </Container>
    </div>
  )
}
