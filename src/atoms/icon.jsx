export function Icon(props) {
  const { href, ...rest } = props

  if (!href) {
    return <img {...rest} height={40} width={40} />
  }

  return (
    <a href={href} target="_blank" rel="noopener" className="cursor-pointer">
      <img {...rest} height={40} width={40} />
    </a>
  )
}
