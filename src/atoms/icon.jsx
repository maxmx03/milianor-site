export function Icon(props) {
  const { href, ...rest } = props

  return (
    <a href={href} target="_blank" rel="noopener" className="cursor-pointer">
      <img {...rest} />
    </a>
  )
}
