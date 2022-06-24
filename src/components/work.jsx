import { Section } from '../atoms'

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
      <div className="grid grid-cols-3 gap-3 w-1/2">
        <a href="https://github.com/maxmx03/milianor-vim">
          <img
            src="work-1.jpg"
            alt="computer"
            className="object-cover drop-shadow-lg rounded-md"
          />
          <p className="text-center">Milianor-vim</p>
        </a>
        <a href="https://github.com/maxmx03/solarized.nvim">
          <img
            src="work-2.jpg"
            alt="palette"
            className="object-cover drop-shadow-lg rounded-md"
          />
          <p className="text-center">Solarized</p>
        </a>
        <a href="https://github.com/maxmx03">
          <img
            src="work-3.jpg"
            alt="toothbrush"
            className="object-cover drop-shadow-lg rounded-md"
          />
          <p className="text-center">Odonto Easy</p>
        </a>
      </div>
    </Section>
  )
}
