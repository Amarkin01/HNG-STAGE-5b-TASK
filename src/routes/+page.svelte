<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { projects } from "$lib/data/projects";
  import Contact from "$lib/components/Contact.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import TechMarquee from "$lib/components/TechMarquee.svelte";

  // GSAP Imports
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Animation for About Section (if you have one)
    gsap.from(".about-text", {
      y: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // 2. Animate Project Cards on Scroll
    gsap.from(".project-card-wrapper", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // 3. Animate Contact Section (MOVED INSIDE ONMOUNT)
    gsap.from("#contact", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
      },
    });
  });

  // Navigation Function
  const scrollToProjects = () => {
    const el = document.getElementById("work");
    el?.scrollIntoView({ behavior: "smooth" });
  };
</script>

<section
  class="flex min-h-screen flex-col items-center justify-center p-6 text-center"
>
  <div class="overflow-hidden">
    <h1
      in:fly={{ y: 100, duration: 1000, easing: backOut }}
      class="mb-5 text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl"
    >
      Engr. Amarkin
    </h1>
  </div>

  <p
    in:fly={{ y: 20, duration: 1000, delay: 500 }}
    class="max-w-lg text-lg text-slate-400 md:text-xl"
  >
    Frontend Engineer specialized in immersive digital experiences.
  </p>

  <button
    onclick={() =>
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
    class="mt-8 rounded-full border border-white/20 px-8 py-3 transition-colors hover:bg-white hover:text-black"
  >
    View My Work
  </button>
</section>

<section id="work" class="mx-auto max-w-7xl px-6 py-24">
  <div class="mb-12 text-left">
    <h2 class="text-3xl font-bold tracking-tight md:text-5xl">
      Selected Works
    </h2>
    <p class="mt-4 text-slate-400">Engineering meets interaction design.</p>
  </div>

  <div class="projects-grid grid gap-8 md:grid-cols-2">
    {#each projects as project}
      <div class="project-card-wrapper">
        <ProjectCard {project} />
      </div>
    {/each}
  </div>

  <section class="py-12">
    <TechMarquee />
  </section>
  <Contact />
</section>
