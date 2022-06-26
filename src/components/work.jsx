import { Section, CardImage } from '../atoms'

export function Work() {
  return (
    <Section id="work">
      <div class="flex flex-col w-full mb-20">
        <div className="self-center">
          <h3 className="text-black text-6xl font-bold border-b-yellow border-b-4">
            My Work
          </h3>
          <p className="text-right text-black100 text-2xl font-semibold leading-3">
            awesome projects
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:w-2/3 gap-3">
        <CardImage src="computer.jpg" alt="computer">
          <a
            href="https://github.com/maxmx03/milianor-vim"
            className="cursor-pointer"
          >
            Milianor-vim
          </a>
        </CardImage>
        <CardImage src="palette.jpg" alt="palette">
          <a
            href="https://github.com/maxmx03/solarized.nvim"
            className="cursor-pointer"
          >
            Solarized.nvim
          </a>
        </CardImage>
        <CardImage src="toothbrush.jpg" alt="toothbrush">
          OdontoEasy (private)
        </CardImage>
        <CardImage src="palette.jpg" alt="palette">
          <a
            href="https://github.com/maxmx03/milianor-theme"
            className="cursor-pointer"
          >
            Milianor-theme
          </a>
        </CardImage>
        <CardImage src="moon.jpg" alt="moon">
          <a
            href="https://www.udemy.com/course/curso-de-lua-completo-2022/"
            className="cursor-pointer"
          >
            Lua Course
          </a>
        </CardImage>
      </div>
      <div className="mt-20">
        <a
          href="https://github.com/maxmx03"
          className="flex justify-center items-center block bg-black hover:bg-black100 text-xl text-white font-semibold h-16 w-56 rounded-full"
        >
          GITHUB
        </a>
      </div>
    </Section>
  )
}
