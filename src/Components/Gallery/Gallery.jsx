import { Carousel, Container } from "react-bootstrap"
import "./Gallery.css"

export default function Gallery() {
  return (
    <div>
    <Container className="py-5">
        <Carousel className="text-center " style={{paddingBottom: "70px"}} >
      <Carousel.Item>
        <img className="border border-5" src="img/img/gallery/gallery-1.jpg" style={{width: "400px"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="border border-5" src="img/img/gallery/gallery-2.jpg" style={{width: "400px"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="border border-5" src="img/img/gallery/gallery-3.jpg" style={{width: "400px"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="border border-5" src="img/img/gallery/gallery-4.jpg" style={{width: "400px"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="border border-5" src="img/img/gallery/gallery-5.jpg" style={{width: "400px"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="border border-5" src="img/img/gallery/gallery-6.jpg" style={{width: "400px"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="border border-5" src="img/img/gallery/gallery-7.jpg" style={{width: "400px"}} />
      </Carousel.Item>

    </Carousel>
        </Container>

    </div>
  )
}
