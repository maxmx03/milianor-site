export function Section(props) {
  const { children } = props

  return (
    <div className="flex flex-col gap-7 justify-items-center items-center col-span-4 bg-gray100 p-24">
      {children}
    </div>
  )
}
