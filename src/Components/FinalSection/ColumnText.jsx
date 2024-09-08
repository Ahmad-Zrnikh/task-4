
export default function ColumnText({title , one, two ,three , four ,five}) {
  return (
    <div>
        <h4 className="mb-4 fw-bold">{title}</h4>
        <p className="mb-4 color-main">{one}</p>
        <p className="mb-4 color-main">{two}</p>
        <p className="mb-4 color-main">{three}</p>
        <p className="mb-4 color-main">{four}</p>
        <p className="mb-4 color-main">{five}</p>
    </div>
  )
}
