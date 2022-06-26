import { Link } from '../atoms'

export function Nav() {
  return (
    <nav className="flex justify-center items-center gap-12 bg-gray50 h-24 text-white">
      <Link href="#about">ABOUT</Link>
      <Link href="#work">WORKS</Link>
      <Link href="#contact">CONTACT</Link>
    </nav>
  )
}
