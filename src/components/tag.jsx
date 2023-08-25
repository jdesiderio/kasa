function Tag(props) {
  const data = props.data

  return (
    <div className="info__section-left--tags">
      {data.map((tag, index) => (
        <div key={index} className="tag">
          <p>{tag}</p>
        </div>
      ))}
    </div>
  )
}

export default Tag
