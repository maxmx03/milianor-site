export function Section(props) {
  const { children, className } = props

  return (
    <div
      className={`flex flex-col gap-7 justify-items-center items-center col-span-4 p-24 w-full ${className}`}
    >
      {children}
    </div>
  )
}
