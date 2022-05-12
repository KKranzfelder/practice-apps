

const Entry = ({word}) => {
  return (
    <div className="entry">
      <h3>{word.word}</h3>
      <p>{word.definition}</p>
      <span>{word.createdAt}</span>
    </div>
  )
}