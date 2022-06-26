import { Section, CardImage, CardLink } from '../atoms'

export function Work() {
  return (
    <Section id="work">
      <div className="flex flex-col w-full mb-20">
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
        <CardImage src="computer.webp" alt="computer">
          <CardLink href="https://github.com/maxmx03/milianor-vim">
            Milianor-vim
          </CardLink>
        </CardImage>
        <CardImage src="palette.webp" alt="palette">
          <CardLink href="https://github.com/maxmx03/solarized.nvim">
            Solarized.nvim
          </CardLink>
        </CardImage>
        <CardImage src="toothbrush.webp" alt="toothbrush">
          OdontoEasy (private)
        </CardImage>
        <CardImage src="palette.webp" alt="palette">
          <CardLink href="https://github.com/maxmx03/milianor-theme">
            Milianor-theme
          </CardLink>
        </CardImage>
        <CardImage src="moon.webp" alt="moon">
          <CardLink href="https://www.udemy.com/course/curso-de-lua-completo-2022/">
            Lua Course
          </CardLink>
        </CardImage>
      </div>
      <div className="mt-20">
        <a
          href="https://github.com/maxmx03"
          target="_blank"
          rel="noopener"
          className="flex justify-center items-center bg-black hover:bg-black100 text-xl text-white font-semibold h-16 w-56 rounded-full"
        >
          GITHUB
        </a>
      </div>
    </Section>
  )
}
