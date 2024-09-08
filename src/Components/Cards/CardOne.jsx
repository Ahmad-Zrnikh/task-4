import "./CardOne.css"

export default function CardOne({title ,text , children}) {
  return (
    <div>
      <div className="ps-3 pe-2 py-4 shadow m-2  " style={{width: "240px"}}>
      <p className="fs-1 color-main">{children}</p>
      <h3 className="mt-2 mb-3">{title}</h3>
      <p>{text} </p>
      </div>
    </div>
  )
}
