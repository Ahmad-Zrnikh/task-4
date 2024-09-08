import "./CardTwo.css"
export default function CardTwo({num , name , children}) {
  return (
    <div className="d-flex align-items-center shadow justify-content-start gap-4 p-5 my-3" style={{width: "260px"}}>
      <div className="color-main d-flex justify-content-center align-items-center" style={{fontSize: "50px"}}>{children} </div>
        <div  style={{height: "67px"}}>
<h2 className="fw-bold">{num}</h2>
<p className=" color-main">{name}</p>
        </div>
    </div>
  )
}
