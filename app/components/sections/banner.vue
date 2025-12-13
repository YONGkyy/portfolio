<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Props
defineProps<{
  profiles?: string;
}>();

// Parallax effect
const parallaxOffset = ref(0);

const handleScroll = () => {
  parallaxOffset.value = window.scrollY * 0.4;
};

const smoothScrollTo = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <section
    id="banner"
    class="relative min-h-screen flex items-center overflow-hidden"
    style="
      background: linear-gradient(
        180deg,
        rgb(10, 14, 13) 0%,
        rgb(19, 24, 22) 100%
      );
    "
  >
    <!-- Background effects -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Radial gradients with sage green -->
      <div
        class="absolute top-1/4 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 rounded-full blur-3xl animate-pulse opacity-20"
        style="
          background: radial-gradient(
            circle,
            rgba(139, 157, 131, 0.3) 0%,
            transparent 70%
          );
        "
      ></div>
      <div
        class="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-15"
        style="
          background: radial-gradient(
            circle,
            rgba(164, 184, 157, 0.25) 0%,
            transparent 70%
          );
          animation-delay: 700ms;
        "
      ></div>
    </div>

    <!-- Hero Content -->
    <div class="container mx-auto px-4 md:px-16 relative z-10">
      <div
        class="hero-content animate-fade-in-up"
        :style="{
          transform: `translateY(${parallaxOffset}px)`,
          opacity: 1 - parallaxOffset / 500,
        }"
      >
        <!-- Subtitle -->
        <span
          class="inline-block text-sm sm:text-base font-semibold uppercase tracking-wider mb-4 sm:mb-6"
          style="color: var(--color-accent-primary)"
        >
          Welcome to my portfolio
        </span>

        <!-- Main Title -->
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
        >
          <span class="text-white">Hi, I'm</span><br />
          <span class="text-gradient-sage">Keo Yinyong</span>
        </h1>

        <!-- Accent Line -->
        <div class="accent-line mb-6 sm:mb-8"></div>

        <!-- Description -->
        <p
          class="text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-12 leading-relaxed"
          style="color: #b8c5c0"
        >
          Self-taught UI/UX designer and full-stack developer with 2+ years of
          experience crafting meaningful and delightful digital products.
          Passionate about creating seamless user experiences that perfectly
          balance user needs with business objectives.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            @click="smoothScrollTo('projects')"
            class="btn-sage inline-flex items-center justify-center gap-2"
          >
            <span>View My Work</span>
            <i class="fas fa-arrow-down"></i>
          </button>
          <button
            @click="smoothScrollTo('contact')"
            class="btn-sage-outline text-white inline-flex items-center justify-center gap-2"
          >
            <span>Get In Touch</span>
            <i class="fas fa-envelope"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <div
        class="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
        style="border-color: var(--color-accent-primary)"
      >
        <div
          class="w-1 h-2 rounded-full animate-pulse"
          style="background: var(--color-accent-primary)"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ensure heading font */
h1 {
  font-family: var(--font-heading);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .hero-content {
    text-align: center;
  }

  .accent-line {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
