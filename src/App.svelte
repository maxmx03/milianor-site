<script>
  const linkedin =
    "https://www.linkedin.com/in/max-miliano-del-canto-quezada-81373123b/";
  const github = "https://github.com/maxmx03";
</script>

<main class="h-full w-full flex justify-center items-center drop-shadow-lg">
  <section
    class="flex flex-col rounded-lg p-10 gap-12 md:gap-0 w-2/3 bg-yellow-500 text-white"
  >
    <div class="flex w-full justify-between items-center gap-5 md:gap-0">
      <div>
        <h1 class="font-bold text-2xl">Max Miliano</h1>
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
    </div>

    <div class="flex flex-col w-full justify-around">
      <h2 class="font-bold text-lg">Sobre</h2>
      <p>
        Experiente com desenvolvimento web e mobile, desenvolveu OdontoEasy, um
        dashboard para o laboratorio de odontólogia da sua faculdade.
      </p>
      <p>
        Trabalhou na empresa sz soluções como estagiário, porém teve seu
        desligamento devido a pândemia, também foi instrutor no curso de lua na
        udemy.
      </p>
    </div>
  </section>
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
