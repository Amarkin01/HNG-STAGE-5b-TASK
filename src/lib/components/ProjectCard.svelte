<script lang="ts">
  import type { Project } from "$lib/data/projects";
  import { ExternalLink } from "lucide-svelte";

  let { project } = $props<{ project: Project }>();

  // Properly typed function for Svelte 5
  const handleImageError = (e: Event) => {
    const target = e.target as HTMLImageElement;
    target.src =
      "https://via.placeholder.com/600x400/020617/ffffff?text=Project+Preview";
  };
</script>

<a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  class="group block"
>
  <div
    class="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-2 transition-all hover:bg-slate-800/50 hover:border-white/20"
  >
    <div class="aspect-video w-full overflow-hidden rounded-xl bg-slate-800">
      <img
        src={project.image}
        alt={project.title}
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        onerror={handleImageError}
      />
    </div>

    <div class="p-4">
      <div class="flex items-center justify-between">
        <h3
          class="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors"
        >
          {project.title}
        </h3>
        <ExternalLink size={18} class="text-slate-500 group-hover:text-white" />
      </div>

      <p class="mt-2 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      <div class="mt-4 flex flex-wrap gap-2">
        {#each project.tags as tag}
          <span
            class="rounded-md bg-indigo-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-indigo-300 border border-indigo-500/20"
          >
            {tag}
          </span>
        {/each}
      </div>
    </div>
  </div>
</a>
