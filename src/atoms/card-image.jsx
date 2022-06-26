export function CardImage({ children, src, alt }) {
  return (
    <div className="relative group">
      <img src={src} alt={alt} className="h-full w-full" />
      <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition duration-700 bg-gray group-hover:opacity-100">
        <p className="text-white text-xl">{children}</p>
      </div>
    </div>
  )
}
