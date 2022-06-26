export function Link(props) {
  const { children, ...rest } = props

  return (
    <a
      {...rest}
      className="hover:border-b-yellow hover:border-b-4 cursor-pointer"
    >
      {children}
    </a>
  )
}
