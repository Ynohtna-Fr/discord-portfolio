
export default function ServerCategory ( props ) {
  return (
    <details className="category" open={true}>
      <summary>{ props.name }</summary>
      { props.children }
    </details>
  )
}
