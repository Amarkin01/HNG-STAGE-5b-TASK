<script lang="ts">
  const tech = [
    "SvelteKit",
    "Svelte",
    "Vue",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Node.js",
    "Next.js",
    "Vite",
    "UI/UX",
    "Vercel",
    "Git",
    "Framer Motion",
    "Github",
    "Figma",
  ];

  // Duplicate the array to ensure the loop is seamless
  const displayTech = [...tech, ...tech];
</script>

<div
  class="relative w-full overflow-hidden border-y border-white/5 bg-white/2 py-10"
>
  <div
    class="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-slate-950 to-transparent"
  ></div>
  <div
    class="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-slate-950 to-transparent"
  ></div>

  <div class="flex w-fit animate-marquee whitespace-nowrap">
    {#each displayTech as item}
      <div class="mx-8 flex items-center gap-2">
        <span
          class="text-2xl font-bold tracking-tighter text-slate-500 transition-colors hover:text-indigo-400 md:text-4xl"
        >
          {item}
        </span>
        <span class="h-2 w-2 rounded-full bg-indigo-500/50"></span>
      </div>
    {/each}
  </div>
</div>

<style>
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    animation: marquee 30s linear infinite;
  }

  /* Pause animation on hover for interactivity */
  .animate-marquee:hover {
    animation-play-state: paused;
  }
</style>
