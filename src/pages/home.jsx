import { Header, About, Work, Footer } from '../components'

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 w-full h-full bg-gray100 xl:bg-white50">
      <Header />
      <About />
      <Work />
      <Footer />
    </div>
  )
}
