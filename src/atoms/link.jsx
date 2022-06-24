export function Link(props) {
  const { children, id } = props

  return (
    <a
      id={id}
      className="hover:border-b-yellow hover:border-b-4 cursor-pointer"
    >
      {children}
    </a>
  )
}
