import { Link } from '../atoms'

export function Nav() {
  return (
    <nav className="flex justify-center items-center gap-12 bg-gray50 h-24 text-white">
      <Link>HOME</Link>
      <Link id="about">ABOUT</Link>
      <Link id="works">WORKS</Link>
      <Link id="contact">CONTACT</Link>
    </nav>
  )
}
