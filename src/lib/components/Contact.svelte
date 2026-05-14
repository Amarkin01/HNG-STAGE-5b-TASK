<script lang="ts">
  import { Mail, Github, Linkedin, Send } from "lucide-svelte";

  let name = $state("");
  let email = $state("");
  let message = $state("");
  let isSubmitting = $state(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    isSubmitting = true;
    // Simulate API call
    await new Promise((r) => setTimeout(r, 2000));
    alert("Message received, Engr Amarkin will get back to you shortly.");
    isSubmitting = false;
    name = "";
    email = "";
    message = "";
  };
</script>

<section id="contact" class="mx-auto max-w-7xl px-6 py-24">
  <div class="grid gap-12 lg:grid-cols-2">
    <div class="flex flex-col justify-center">
      <h2 class="text-4xl font-bold tracking-tight md:text-6xl">
        Let's build the <span class="text-indigo-500">future.</span>
      </h2>
      <p class="mt-6 text-lg text-slate-400">
        Currently available for specialized frontend engineering roles and
        architectural consultations.
      </p>

      <div class="mt-10 space-y-6">
        <div class="flex gap-4">
          <a
            href="mailto:akinolamartins05@gmail.com"
            class="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-indigo-500/50"
            >
              <Mail size={20} />
            </div>
          </a>
          <a
            href="https://github.com/Amarkin01"
            class="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            ><Github size={20} /></a
          >
          <a
            href="https://www.linkedin.com/in/akinola-martins-ajayi-315967302/"
            class="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            ><Linkedin size={20} /></a
          >
        </div>
      </div>
    </div>

    <form
      onsubmit={handleSubmit}
      class="relative rounded-2xl border border-white/10 bg-slate-900/30 p-8 backdrop-blur-xl"
    >
      <div class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-slate-400"
            >Full Name</label
          >
          <input
            bind:value={name}
            type="text"
            id="name"
            required
            class="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-slate-400"
            >Email Address</label
          >
          <input
            bind:value={email}
            type="email"
            id="email"
            required
            class="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
          />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-slate-400"
            >Message</label
          >
          <textarea
            bind:value={message}
            id="message"
            rows="4"
            required
            class="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          class="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-4 font-bold text-white transition-all hover:bg-indigo-500 disabled:opacity-50"
        >
          {#if isSubmitting}
            <div
              class="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
            ></div>
          {:else}
            <span>Send Message</span>
            <Send size={18} />
          {/if}
        </button>
      </div>
    </form>
  </div>
</section>
