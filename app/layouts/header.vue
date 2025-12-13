<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const isMobileMenuOpen = ref(false);
const activeSection = ref("banner");
const isScrolled = ref(false);

// Use Nuxt's color mode composable
const colorMode = useColorMode();

// Computed property for dark mode state
const isDark = computed(() => colorMode.value === "dark");

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
    // Close mobile menu after clicking
    isMobileMenuOpen.value = false;
  }
};

const handleScroll = () => {
  // Add scrolled class when scrolled more than 100px
  isScrolled.value = window.scrollY > 100;

  // Update active section based on scroll position
  const sections = [
    "banner",
    "aboutme",
    "skills",
    "experience",
    "certificates",
    "projects",
    "contact",
  ];
  const scrollPos = window.scrollY + 150; // Offset for better accuracy

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
        activeSection.value = sectionId;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-4',
    ]"
  >
    <div
      class="container mx-auto px-4 md:px-16 flex items-center justify-between"
    >
      <!-- Logo -->
      <button
        @click="smoothScrollTo('banner')"
        class="text-2xl font-bold transition-colors"
        style="
          font-family: var(--font-heading);
          color: var(--color-accent-primary);
        "
      >
        Portfolio
      </button>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <button
          v-for="section in [
            'banner',
            'aboutme',
            'skills',
            'experience',
            'certificates',
            'projects',
            'contact',
          ]"
          :key="section"
          @click="smoothScrollTo(section)"
          class="relative font-medium transition-colors py-2 group"
          :class="
            activeSection === section
              ? 'text-[var(--color-accent-primary)]'
              : 'text-white/70 hover:text-[var(--color-accent-primary)]'
          "
        >
          {{
            section === "banner"
              ? "Home"
              : section === "aboutme"
              ? "About"
              : section === "certificates"
              ? "Certificates"
              : section.charAt(0).toUpperCase() + section.slice(1)
          }}
          <!-- Active indicator with slide-in animation -->
          <span
            v-if="activeSection === section"
            class="absolute bottom-0 left-0 h-0.5 rounded-full active-underline"
            style="background: var(--color-accent-primary)"
          ></span>
          <!-- Hover indicator -->
          <span
            v-else
            class="absolute bottom-0 left-1/2 h-0.5 rounded-full transition-all duration-300 group-hover:left-0 group-hover:right-0"
            style="
              background: var(--color-accent-primary);
              width: 0;
              right: 50%;
            "
          ></span>
        </button>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 rounded-lg transition-colors"
        :class="
          isDark
            ? 'text-white hover:bg-white/10'
            : 'text-slate-700 hover:bg-slate-100'
        "
        aria-label="Toggle menu"
      >
        <svg
          v-if="!isMobileMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden glass mt-2 px-4 py-4 space-y-2 border-t"
        style="border-color: var(--glass-border-dark)"
      >
        <button
          v-for="section in [
            'banner',
            'aboutme',
            'skills',
            'experience',
            'certificates',
            'projects',
            'contact',
          ]"
          :key="section"
          @click="smoothScrollTo(section)"
          class="block w-full text-left px-4 py-3 rounded-lg font-medium transition-all"
          :class="
            activeSection === section
              ? 'text-[#0a0e0d]'
              : 'text-white hover:text-[var(--color-accent-primary)]'
          "
          :style="
            activeSection === section
              ? 'background: var(--color-accent-primary)'
              : ''
          "
        >
          {{
            section === "banner"
              ? "Home"
              : section === "aboutme"
              ? "About"
              : section === "certificates"
              ? "Certificates"
              : section.charAt(0).toUpperCase() + section.slice(1)
          }}
        </button>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Ensure z-index stays above content */
header {
  position: fixed;
}

/* Active underline slide-in animation */
.active-underline {
  width: 0;
  animation: slideInUnderline 0.4s ease-out forwards;
}

@keyframes slideInUnderline {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* Nav button hover effect - expand underline from center */
nav button.group:hover span.group-hover\:left-0 {
  width: 100% !important;
  left: 0 !important;
  right: 0 !important;
}

/* Smooth transition for all nav links */
nav button {
  position: relative;
  overflow: visible;
}
</style>
