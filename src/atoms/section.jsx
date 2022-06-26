export function Section(props) {
  const { children, className, ...rest } = props

  return (
    <div
      {...rest}
      className={`flex flex-col gap-7 justify-items-center items-center col-span-4 p-24 w-full ${className}`}
    >
      {children}
    </div>
  )
}
