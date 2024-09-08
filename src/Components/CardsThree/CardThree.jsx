import "./CardThree.css"
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export default function CardThree({src ,name ,text}) {
  return (
    <div className="p-3 pb-5  position-relative" style={{backgroundColor: "rgb(240, 255, 255)" ,width: "400px" , marginBottom: "180px"}}>
        <p className="fst-italic"> <FaQuoteLeft className="color-main fs-5" /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porroaliquam soluta repellendus
             rem ipsa facilis dolorem. Optio ipsumdolor minus, repudiandae sed illum tenetur laboriosam
              ipsam cumque dolorum possimus perspiciatis. <FaQuoteRight className="color-main fs-5"/></p>
              <div className="position-absolute text-start">
                <img className="rounded-circle" src={src} alt="" style={{width: "100px"}} />
                <h3 className="my-1">{name}</h3>
                <p className="color-main">{text}</p>
              </div>
    </div>
  )
}
