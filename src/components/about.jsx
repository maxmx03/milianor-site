import { Section } from '../atoms'

export function About() {
  return (
    <Section className="bg-gray100" id="about">
      <div class="w-full">
        <p className="text-black100 text-2xl font-semibold">who am i</p>
        <h3 className="inline-block text-black text-6xl font-bold border-b-yellow border-b-4">
          Hello
        </h3>
      </div>
      <div class="w-full">
        <p className="text-black100 text-xl">
          Software development student with a passion for developing innovative
          programs that expedite the efficiency and effectiveness of
          organizational success. Well-versed in technology and writing code to
          create systems that are reliable and user-friendly.
        </p>
      </div>
    </Section>
  )
}
