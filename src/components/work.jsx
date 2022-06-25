import { Section, CardImage } from '../atoms'

export function Work() {
  return (
    <Section>
      <div class="flex flex-col w-1/2">
        <div className="self-center">
          <h3 className="text-black text-6xl font-bold border-b-yellow border-b-4">
            My Work
          </h3>
          <p className="text-right text-black100 text-2xl font-semibold leading-3">
            awesome projects
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 w-1/2 gap-3">
        <CardImage src="work-1.jpg" alt="computer">
          <a
            href="https://github.com/maxmx03/milianor-vim"
            className="cursor-pointer"
          >
            Milianor-vim
          </a>
        </CardImage>
        <CardImage src="work-2.jpg" alt="palette">
          <a
            href="https://github.com/maxmx03/solarized.nvim"
            className="cursor-pointer"
          >
            Solarized.nvim
          </a>
        </CardImage>
        <CardImage src="work-3.jpg" alt="toothbrush">
          OdontoEasy (private)
        </CardImage>
        <CardImage src="work-2.jpg" alt="palette">
          <a
            href="https://github.com/maxmx03/milianor-theme"
            className="cursor-pointer"
          >
            Milianor-theme
          </a>
        </CardImage>
        <CardImage src="work-4.jpg" alt="palette">
          <a
            href="https://www.udemy.com/course/curso-de-lua-completo-2022/"
            className="cursor-pointer"
          >
            Lua Course
          </a>
        </CardImage>
      </div>
    </Section>
  )
}
