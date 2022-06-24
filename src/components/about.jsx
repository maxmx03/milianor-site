import { Section } from '../atoms'

export function About() {
  return (
    <Section>
      <div class="w-1/2">
        <p className="text-black100 text-2xl font-semibold">who am i</p>
        <h3 className="inline-block text-black text-6xl font-bold border-b-yellow border-b-4">
          Hello
        </h3>
      </div>
      <div class="w-1/2">
        <p className="text-black100 text-xl">
          I am a developer, it is a long time fact that a reader will be
          distract by the readable content of a page when looking at its layout.
        </p>
        <p className="text-black100 text-xl">
          The point of using Lorem Ipsum is that is has a more-or-less normal
          distribution.
        </p>
        <br />
        <p className="text-black100 text-xl">
          It is a fact that a reader will be distract by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum i
          that is has more-or-less normal distribution.
        </p>
      </div>
    </Section>
  )
}
