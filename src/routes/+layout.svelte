<script lang="ts">
  import "../app.css";

  import Cursor from "$lib/components/Cursor.svelte";
  let { children } = $props();
</script>

<!-- Global Custom Cursor -->
<Cursor />

<div class="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
  <div
    class="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
  ></div>

  <main class="relative z-10">
    {@render children()}
  </main>
</div>
