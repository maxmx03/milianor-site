<script>
  const linkedin =
    "https://www.linkedin.com/in/max-miliano-del-canto-quezada-81373123b/";
  const github = "https://github.com/maxmx03";
</script>

<main
  class="h-fit w-fit lg:h-full lg:w-full flex justify-center items-center drop-shadow-lg bg-gray-800 lg:bg-white"
>
  <article
    class="flex flex-col rounded-lg p-10 gap-12 w-2/3 bg-gray-800 text-white"
  >
    <section
      class="flex flex-col-reverse lg:flex-row w-full lg:justify-evenly lg:items-center gap-5"
    >
      <div>
        <h1 class="font-bold text-2xl mb-3 text-sky-500">Max Miliano</h1>
        <p>Estudante de Análise e Desenvolvimento de Sistemas</p>
      </div>

      <div
        class="flex flex-col justify-items-center items-center gap-2 md:gap-3"
      >
        <img
          src="max.webp"
          alt="max"
          class="h-32 md:h-40 border-none rounded-full"
        />
        <div class="flex gap-3">
          <a href={github} class="hover:text-slate-300">Github</a>
          <a href={linkedin} class="hover:text-slate-300">Linkedin</a>
        </div>
      </div>
    </section>

    <section class="flex flex-col w-full">
      <h2 class="font-bold text-lg mb-3 text-sky-500">Sobre</h2>
      <p>
        Experiente com desenvolvimento web e mobile, desenvolveu OdontoEasy, um
        dashboard para o laboratorio de odontólogia da sua faculdade.
      </p>
      <p>
        Trabalhou na empresa sz soluções como estagiário, porém teve seu
        desligamento devido a pândemia, também foi instrutor no curso de lua na
        udemy.
      </p>
    </section>

    <section class="flex flex-col w-full">
      <h2 class="font-bold text-lg mb-3 text-sky-500">
        Principais Habilidades
      </h2>
      <ul class="list-disc list-inside">
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Next.js</li>
        <li>Svelte</li>
        <li>Node.js</li>
        <li>GraphQl</li>
        <li>Inglês</li>
      </ul>
    </section>
  </article>
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html, body) {
    height: 100%;
    width: 100%;
  }
</style>
