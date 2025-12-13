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
      /* Using a CSS variable for dark background if defined, otherwise keep gradient */
      background: var(
        --color-background-dark,
        linear-gradient(180deg, rgb(10, 14, 13) 0%, rgb(19, 24, 22) 100%)
      );
    "
  >
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-1/4 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 rounded-full blur-3xl animate-pulse opacity-20"
        style="
          background: radial-gradient(
            circle,
            var(--color-accent-primary-faded, rgba(139, 157, 131, 0.3)) 0%,
            transparent 70%
          );
        "
      ></div>
      <div
        class="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-15"
        style="
          background: radial-gradient(
            circle,
            var(--color-accent-primary-faded-light, rgba(164, 184, 157, 0.25))
              0%,
            transparent 70%
          );
          animation-delay: 700ms;
        "
      ></div>
    </div>

    <div
      class="container mx-auto px-4 md:px-16 relative z-10 flex flex-col lg:flex-row items-center justify-between"
    >
      <div
        class="hero-content animate-fade-in-up w-full lg:w-1/2 pt-24 lg:pt-0"
        :style="{
          transform: `translateY(${parallaxOffset}px)`,
          opacity: 1 - parallaxOffset / 500,
        }"
      >
        <span
          class="inline-block text-sm sm:text-base font-semibold uppercase tracking-wider mb-4 sm:mb-6"
          style="color: var(--color-accent-primary)"
        >
          Welcome to my portfolio
        </span>

        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
        >
          <span class="text-[var(--color-text-primary-dark)]">Hi, I'm</span
          ><br />
          <span class="text-gradient-sage">Keo Yinyong</span>
        </h1>

        <div class="accent-line mb-6 sm:mb-8"></div>

        <p
          class="text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-12 leading-relaxed text-[var(--color-text-secondary-dark)]"
        >
          Self-taught UI/UX designer and full-stack developer with 2+ years of
          experience crafting meaningful and delightful digital products.
          Passionate about creating seamless user experiences that perfectly
          balance user needs with business objectives.
        </p>

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
            class="btn-sage-outline text-[var(--color-text-primary-dark)] inline-flex items-center justify-center gap-2"
          >
            <span>Get In Touch</span>
            <i class="fas fa-envelope"></i>
          </button>
        </div>
      </div>

      <div
        class="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0"
      >
        <div
          class="w-80 h-80 lg:w-[500px] lg:h-[500px] relative reveal profile-image-wrapper"
        >
          <img
            :src="profiles"
            alt="Profile Picture of Keo Yinyong"
            class="w-full h-full object-cover absolute z-10 rounded-full"
          />
          <div class="absolute inset-0 squircle-static"></div>
        </div>
      </div>
    </div>

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
/* Custom Keyframe for subtle pulsation */
@keyframes pulse-ring {
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
}

/* Styles for the Animated Ring */
.profile-ring-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-accent-primary);
  border-radius: 9999px;
  animation: pulse-ring 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  z-index: 0;
  filter: blur(20px);
}

/* Ensure heading font */
h1 {
  font-family: var(--font-heading);
}

/* 1. Sage Green Gradient for Title */
.text-gradient-sage {
  background: linear-gradient(
    90deg,
    var(--color-accent-primary),
    /* Soft Sage Green */ var(--color-accent-light) /* Slightly Lighter Green */
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

/* 2. Primary Accent Line */
.accent-line {
  width: 60px;
  height: 4px;
  background: var(--color-accent-primary);
  border-radius: 2px;
}

/* 3. Primary Button (Solid Sage) */
.btn-sage {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  color: #000; /* Text is dark on light green button */
  background: var(--color-accent-primary);
  transition: all 0.3s ease;
}
.btn-sage:hover {
  background: var(--color-accent-light);
  transform: translateY(-2px);
}

/* 4. Outline Button (Sage Outline) */
.btn-sage-outline {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: 2px solid var(--color-accent-primary);
  transition: all 0.3s ease;
}
.btn-sage-outline:hover {
  background: var(--color-accent-primary);
  color: #000 !important; /* Text becomes dark on hover */
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  /* On smaller screens (lg breakpoint and down), center content */
  .hero-content {
    text-align: center;
  }
  .flex.flex-col.sm\:flex-row.gap-4 {
    justify-content: center;
  }
  .accent-line {
    margin-left: auto;
    margin-right: auto;
  }
}

/* KEYFRAME for a subtle rotating frame animation */
@keyframes vector-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* ----- UPDATED CSS FOR PROFILE IMAGE ----- */

/* 1. The container wrapper */
.profile-image-wrapper {
  /* Flex centering to align image and border */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 2. The Rotating Border (created using a pseudo-element) */
.profile-image-wrapper::before {
  content: "";
  position: absolute;
  /* Inset -4px to make it slightly larger than the image container, 
     accommodating the 4px border width so it's visible outside */
  inset: -4px;
  border: 4px solid var(--color-accent-primary);
  /* The complex path shape */
  clip-path: polygon(
    10% 0,
    90% 0,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0 90%,
    0 10%
  );
  /* Apply the spin animation ONLY to this border element */
  animation: vector-spin 30s linear infinite;
  z-index: 0; /* Ensure it sits behind the image */
  pointer-events: none; /* Prevents it from interfering with clicks */
}

/* 3. The Static Image Content */
.squircle-static-content {
  /* Apply the SAME clip-path to the image itself so it matches the shape */
  clip-path: polygon(
    10% 0,
    90% 0,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0 90%,
    0 10%
  );
  z-index: 1; /* Ensure image sits on top of the border */
  /* No animation here, so it remains stationary */
}
</style>
