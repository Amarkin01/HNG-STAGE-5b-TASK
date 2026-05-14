<script lang="ts">
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";

  // 1. Core State: The "Dot" follows the mouse instantly
  let m = $state({ x: 0, y: 0 });

  // 2. Physics State: The "Halo" uses spring physics for an elastic feel
  let coords = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.1, // Lower = more "rubbery"
      damping: 0.25, // Lower = more "bounce"
    },
  );

  // 3. UI State: Interaction flags
  let isPointer = $state(false);
  let isMagnetic = $state(false);

  onMount(() => {
    const handleMove = (e: MouseEvent) => {
      // Update the tiny dot position
      m = { x: e.clientX, y: e.clientY };

      // Detect interactive elements
      const target = e.target as HTMLElement;
      const trigger = target.closest("button, a, .magnetic");

      if (trigger) {
        isPointer = true;
        const rect = trigger.getBoundingClientRect();

        // CALCULATE MAGNETISM: Find the center of the element
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Snap the springy halo to the center of the button
        coords.set({ x: centerX, y: centerY });
        isMagnetic = true;
      } else {
        isPointer = false;
        isMagnetic = false;
        // Return halo to follow mouse when not hovering
        coords.set({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  });
</script>

<div
  class="pointer-events-none fixed left-0 top-0 z-9999 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
  style="transform: translate({m.x}px, {m.y}px);"
></div>

<div
  class="pointer-events-none fixed left-0 top-0 z-9998 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 transition-all duration-300 ease-out"
  class:is-active={isPointer}
  class:is-magnetic={isMagnetic}
  style="
		left: {$coords.x}px; 
		top: {$coords.y}px; 
		width: {isMagnetic ? '65px' : '35px'}; 
		height: {isMagnetic ? '65px' : '35px'};
	"
></div>

<style>
  /* Hide the default OS cursor globally */
  :global(body) {
    cursor: none;
  }

  /* Prevent interaction lag on links/buttons */
  :global(a, button) {
    cursor: none !important;
  }

  .is-magnetic {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(99, 102, 241, 0.8); /* Indigo-500 */
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
  }

  /* Responsive: Hide on mobile touch devices to prevent "ghost" cursors */
  @media (hover: none) and (pointer: coarse) {
    div {
      display: none !important;
    }
    :global(body) {
      cursor: auto;
    }
  }
</style>
