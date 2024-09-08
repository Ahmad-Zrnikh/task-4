import "./Feature.css"

export default function Feature({title , text ,children}) {
  return (
    <div className="d-flex justify-content-between gap-4">
<div className="shadow d-flex justify-content-center align-items-center" style={{width: "190px" , height: "70px"}}>
   <div className="color-main d-flex justify-content-center align-items-center" style={{fontSize: "39px"}}>{children}</div> 
</div>
<div><h3>{title}</h3>
<p>{text}</p>
</div>
    </div>
  )
}
