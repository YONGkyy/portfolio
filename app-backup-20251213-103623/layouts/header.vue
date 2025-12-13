<script setup lang="ts">
import { Monitor, Moon, Sun } from "lucide-vue-next";
import { ref, onMounted, onUnmounted, computed } from "vue";

const isMobileMenuOpen = ref(false);
const activeSection = ref("banner");
const isScrolled = ref(false);
const isThemeMenuOpen = ref(false);

// Use Nuxt's color mode composable
const colorMode = useColorMode();

// Computed property for dark mode state
const isDark = computed(() => colorMode.value === "dark");

const rotation = ref(0);

function toggleMode() {
  // Increment rotation by 360° each click
  rotation.value += 360;

  // Toggle dark/light mode
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
}

function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  isMobileMenuOpen.value = false;
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50;

  // Update active section based on scroll position
  const sections = [
    "banner",
    "aboutme",
    "skills",
    "experience",
    "projects",
    "certificates",
    "contact",
  ];
  const scrollPosition = window.scrollY + 100;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        activeSection.value = section;
        break;
      }
    }
  }
}

// Close theme menu when clicking outside
function handleClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const themeButton = document.getElementById("theme-button");
  const themeButtonMobile = document.getElementById("theme-button-mobile");
  const themeMenu = document.getElementById("theme-menu");
  const themeMenuMobile = document.getElementById("theme-menu-mobile");

  // Check if click is outside both desktop and mobile theme menus
  const clickedOutsideDesktop =
    themeButton &&
    !themeButton.contains(target) &&
    themeMenu &&
    !themeMenu.contains(target);
  const clickedOutsideMobile =
    themeButtonMobile &&
    !themeButtonMobile.contains(target) &&
    themeMenuMobile &&
    !themeMenuMobile.contains(target);

  if (clickedOutsideDesktop && clickedOutsideMobile) {
    isThemeMenuOpen.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-500',
      isDark
        ? isScrolled
          ? 'bg-white/10 border border-purple-500/20 shadow-2xl backdrop-blur-lg'
          : 'bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 border border-white/10 shadow-md'
        : isScrolled
        ? 'bg-white/50 border border-slate-200/40 shadow-lg backdrop-blur-lg'
        : 'bg-gradient-to-br from-blue-50 via-slate-50 to-white border border-slate-200/20 shadow-sm',
    ]"
  >
    <div class="flex items-center justify-between px-4 md:px-16 py-2">
      <!-- Logo -->
      <div
        :class="isDark ? 'text-white' : 'text-slate-800'"
        class="text-2xl font-bold"
      >
        <button
          @click="smoothScrollTo('banner')"
          class="transition-transform hover:scale-105"
        >
          <Motion
            initial="false"
            animate="true"
            transition="true"
            :style="{
              transform: `rotate(${rotation}deg)`,
            }"
          >
            <H2>Portfolio</H2>
          </Motion>
          <!-- <img
            src="/images/ky-logo.png"
            alt="KY Logo - Keo Yinyong Web Developer Brand"
            class="h-12 md:h-16"
            loading="eager"
          /> -->
        </button>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-4">
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
          :class="[
            'px-2 py-2 rounded-lg transition-all duration-300 font-medium capitalize',
            activeSection === section
              ? isDark
                ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                : 'bg-blue-500/20 text-blue-600 border border-blue-400/30'
              : isDark
              ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
              : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
          ]"
        >
          {{
            section === "banner"
              ? "Home"
              : section === "aboutme"
              ? "About"
              : section
          }}
        </button>

        <!-- Desktop Theme Toggle -->
        <button
          @click="toggleMode"
          class="p-2 rounded-full transition-transform duration-500"
          :style="`transform: rotate(${rotation}deg)`"
          :title="`Current mode: ${colorMode.preference}`"
        >
          <Sun
            v-if="colorMode.preference === 'light'"
            class="w-8 h-8 text-yellow-500"
          />
          <Moon v-else class="w-8 h-8 text-purple-400" />
        </button>
      </nav>

      <!-- Mobile Actions -->
      <div class="md:hidden flex items-center space-x-2">
        <!-- Mobile Theme Selector -->
        <button
          @click="toggleMode"
          class="p-2 rounded-full transition-transform duration-500"
          :style="`transform: rotate(${rotation}deg)`"
          :title="`Current mode: ${colorMode.preference}`"
        >
          <Sun
            v-if="colorMode.preference === 'light'"
            class="w-8 h-8 text-yellow-500"
          />
          <Moon v-else class="w-8 h-8 text-purple-400" />
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          aria-label="Toggle navigation menu"
          :aria-expanded="isMobileMenuOpen"
          :class="[
            'p-2 rounded-lg transition-colors',
            isDark
              ? 'text-white hover:bg-purple-500/10'
              : 'text-slate-700 hover:bg-blue-500/10',
          ]"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="w-6 h-6 transition-transform duration-300"
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
            class="w-6 h-6 transition-transform duration-300 rotate-90"
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
    </div>

    <!-- Mobile Navigation Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="isMobileMenuOpen"
        :class="[
          'md:hidden backdrop-blur-md px-4 pt-2 pb-4 space-y-2 border-t',
          isDark
            ? 'bg-slate-950/95 border-purple-500/20'
            : 'bg-blue-50/95 border-blue-400/20',
        ]"
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
          :class="[
            'block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 capitalize',
            activeSection === section
              ? isDark
                ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                : 'bg-blue-500/20 text-blue-600 border border-blue-400/30'
              : isDark
              ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
              : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
          ]"
        >
          {{
            section === "banner"
              ? "Home"
              : section === "aboutme"
              ? "About"
              : section
          }}
        </button>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Ensure dropdowns appear above mobile menu */
#theme-menu,
#theme-menu-mobile {
  position: absolute;
}
</style>
