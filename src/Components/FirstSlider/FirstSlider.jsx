import { Button, Carousel, Container } from "react-bootstrap"
import "./FirstSlider.css"

export default function FirstSlider({imagesOfSlider1}) {
  return (
    <div className="position-relative" style={{height: "500px"}}>
        <Carousel  className="w-100  position-absolute" style={{height: "500px"}}>
        {imagesOfSlider1?.map((ele) => {
            return(
                <Carousel.Item>
                <img className="d-block w-100"  src={ele.src} alt="" style={{height: "500px"}} />
                </Carousel.Item>
            )
        })}
        
    </Carousel>
    
        <Container className=" position-absolute  box text-center border-top border-4 py-5" style={{backgroundColor: "Red"}}>
            <h1 className="mb-3">Temporibus autem quisdam</h1>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus accusantium molestiae dicta voluptatem adipisci odio,
                 rerum sapiente dolorum laudantium fugiat itaque veritatis beatae perfere</p>
                 <Button className="bg-main-color py-2 px-4 border-none m-0">Read More</Button>

                 </Container>

    </div>
  )
}
 {/* <Carousel.Item>
      <img className="d-block w-100"  src={firstimg} alt="" />
      </Carousel.Item> */}
      {/* <Carousel.Item>
      <img className="d-block w-100"  src={secondimg}alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100"  src={thirdimg} alt="" />
      </Carousel.Item> */}