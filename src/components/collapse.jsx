function Collapse(props) {
  const { data, collapseTitle } = props

  let collapseContent = null

  if (typeof data === 'string') {
    collapseContent = <p>{data}</p>
  } else if (Array.isArray(data)) {
    collapseContent = (
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <div className="collapse">
      <div className="collapse__title">
        <h3>{collapseTitle}</h3>
      </div>
      <div className="collapse__content">{collapseContent}</div>
    </div>
  )
}

export default Collapse
