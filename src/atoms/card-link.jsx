export function CardLink(props) {
  const { children, href } = props

  return (
    <a href={href} target="_blank" rel="noopener" className="cursor-pointer">
      {children}
    </a>
  )
}
