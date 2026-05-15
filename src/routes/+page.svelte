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
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const ed = document.getElementById("work");
    ed?.scrollIntoView({ behavior: "smooth" });
  };
</script>

<section
  class="flex min-h-screen flex-col items-center justify-center p-6 text-center"
>
  <div class="overflow-hidden">
    <img
      class="mx-auto mb-6 h-32 w-32 rounded-full border-4 border-white/10 object-cover grayscale hover:grayscale-0 transition-all duration-500 lg:h-48 lg:w-48"
      src="correctdp.png"
      alt="Amarkin"
    />
    <h1
      in:fly={{ y: 100, duration: 1000, easing: backOut }}
      class="mb-5 text-4xl font-bold tracking-tighter md:text-8xl lg:text-9xl"
    >
      Engr. Amarkin
    </h1>
  </div>

  <p
    in:fly={{ y: 20, duration: 1000, delay: 500 }}
    class="max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl"
  >
    I build high-performance interfaces where clean architecture meets fluid
    motion. Currently focused on bridging the gap between complex engineering
    and intuitive user interaction.
  </p>

  <div class="flex gap-4">
    <button
      onclick={() =>
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
      class="mt-8 rounded-full bg-white px-8 py-3 font-medium text-black transition-transform hover:scale-105 active:scale-95"
    >
      View My Work
    </button>
    <button
      onclick={() =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" })}
      class="mt-8 rounded-full border border-white/20 px-8 py-3 transition-colors hover:bg-white/10"
    >
      Let's Talk
    </button>
  </div>
</section>

<section id="work" class="mx-auto max-w-7xl px-6 py-24">
  <div class="mb-16 text-left">
    <h2 class="text-4xl font-bold tracking-tight md:text-6xl">
      Featured Projects
    </h2>
    <p class="mt-6 max-w-xl text-lg text-slate-400">
      A collection of work ranging from technical experiments to
      production-grade applications. Focusing on speed, accessibility, and
      visual polish.
    </p>
  </div>

  <div class="projects-grid grid gap-12 md:grid-cols-2">
    {#each projects as project}
      <div class="project-card-wrapper">
        <ProjectCard {project} />
      </div>
    {/each}
  </div>

  <section class="py-24">
    <TechMarquee />
  </section>

  <Contact />
</section>
