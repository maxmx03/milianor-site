import { Nav } from './nav'

export function Header() {
  return (
    <>
      <div className="flex flex-col justify-between items-center col-span-1 bg-black50">
        <div className="mt-16">
          <h2 className="text-3xl text-white font-bold">PORTFOLIO</h2>
          <p className="text-md text-center text-white font-semibold">
            Working in progress
          </p>
        </div>
        <div className="mb-32">
          <h1 className="text-3xl text-white font-light">MY NAME IS</h1>
          <h2 className="text-5xl text-white font-bold">MAX MILIANO</h2>
          <h2 className="text-3xl text-center text-black50 bg-yellow p-1 ">
            I'M A DEVELOPER
          </h2>
        </div>
      </div>
      <div className="col-span-3">
        <Nav />
        <img src="laptop.jpg" alt="old computer" />
      </div>
    </>
  )
}
