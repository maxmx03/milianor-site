import { Header, About, Work } from '../components'

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 w-full h-full">
      <Header />
      <About />
      <Work />
    </div>
  )
}
