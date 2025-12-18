<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const projects = [
  {
    title:
      "Online Management System for Materials and Technical Equipment in the Computer Lab",
    description:
      "A web-based stock management system with product categories, brands, stock in/out history, borrowing and returning workflow, computer laboratory equipment management, user authentication and authorization.",
    image: "projects/lab.png",
    tags: [
      "Laravel",
      "Inertia.js",
      "Spatie Laravel Permissions",
      "Vue 3",
      "MySQL",
      "Tailwind CSS",
      "DaisyUI",
    ],
    githubUrl: "https://github.com/YONGkyy/nu-lab",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern and responsive personal portfolio website to showcase my projects, skills, and experience.",
    image: "projects/portfolio.png",
    tags: ["Nuxt 3", "TypeScript", "Tailwind CSS", "GitHub"],
    githubUrl: "https://github.com/YONGkyy/portfolio",
  },
  {
    title: "E-Library UI Design",
    description:
      "A sleek and user-friendly UI design for an E-Library platform, focusing on ease of navigation and accessibility.",
    image: "projects/e-library-ui.png",
    tags: ["Figma", "UI/UX Design", "Prototyping"],
    liveUrl:
      "https://www.figma.com/design/lioZIS73hE3KAryNYjpP43/WebUI?node-id=96-5&t=UtvnHOaU8znz0IQz-1",
  },
];

const scrollContainer = ref<HTMLElement | null>(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);
const showScrollHint = ref(false);

const checkScroll = () => {
  if (!scrollContainer.value) return;
  
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value;
  canScrollLeft.value = scrollLeft > 0;
  canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 10;
  
  // Show scroll hint if content is scrollable
  showScrollHint.value = scrollWidth > clientWidth;
};

const scroll = (direction: 'left' | 'right') => {
  if (!scrollContainer.value) return;
  
  const scrollAmount = scrollContainer.value.clientWidth * 0.8;
  scrollContainer.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
};

const handleCardMouseMove = (event: MouseEvent, card: HTMLElement) => {
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 20;
  const rotateY = (centerX - x) / 20;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
};

const handleCardMouseLeave = (card: HTMLElement) => {
  card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
};

onMounted(() => {
  checkScroll();
  window.addEventListener('resize', checkScroll);
  scrollContainer.value?.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScroll);
  scrollContainer.value?.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <section id="projects" class="relative py-16 sm:py-20 md:py-24 lg:py-32">
    <div class="container mx-auto px-4 md:px-16">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20 reveal">
        <span
          class="text-sm sm:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-4 block"
          style="color: var(--color-accent-primary)"
        >
          My recent work
        </span>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
        >
          Featured Projects
        </h2>
        <p
          class="text-base sm:text-lg max-w-2xl mx-auto"
          style="color: #7a8984"
        >
          A selection of projects that showcase my skills and creativity
        </p>
      </div>

      <!-- Projects Container with Scroll -->
      <div class="relative">
        <!-- Scroll Hint (Mobile Only) -->
        <div
          v-if="showScrollHint"
          class="flex items-center justify-center gap-2 mb-4 md:hidden animate-bounce"
        >
          <i class="fas fa-hand-pointer text-lg" style="color: var(--color-accent-primary)"></i>
          <span class="text-sm" style="color: #7a8984">Swipe to see more projects</span>
          <i class="fas fa-arrow-right text-lg" style="color: var(--color-accent-primary)"></i>
        </div>

        <!-- Left Scroll Button -->
        <button
          v-if="canScrollLeft"
          @click="scroll('left')"
          class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full backdrop-blur-md transition-all hover:scale-110 shadow-lg"
          style="background: rgba(139, 157, 131, 0.9)"
          aria-label="Scroll left"
        >
          <i class="fas fa-chevron-left text-white text-lg"></i>
        </button>

        <!-- Right Scroll Button -->
        <button
          v-if="canScrollRight"
          @click="scroll('right')"
          class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full backdrop-blur-md transition-all hover:scale-110 shadow-lg"
          style="background: rgba(139, 157, 131, 0.9)"
          aria-label="Scroll right"
        >
          <i class="fas fa-chevron-right text-white text-lg"></i>
        </button>

        <!-- Scrollable Projects Grid -->
        <div
          ref="scrollContainer"
          class="overflow-x-auto scrollbar-hide md:overflow-x-hidden"
        >
          <div
            class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-4"
            :class="projects.length > 3 ? 'md:overflow-x-auto md:flex md:flex-nowrap lg:grid' : ''"
          >
            <div
              v-for="(project, index) in projects"
              :key="project.title"
              class="project-card reveal flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto flex flex-col h-full"
              :style="{ animationDelay: `${index * 100}ms` }"
              @mousemove="(e) => handleCardMouseMove(e, $event.currentTarget as HTMLElement)"
              @mouseleave="(e) => handleCardMouseLeave($event.currentTarget as HTMLElement)"
            >
              <!-- Project Image -->
              <div class="overflow-hidden">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-48 sm:h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <!-- Project Content -->
              <div class="p-6 flex flex-col h-full">
                <h3 class="text-xl sm:text-2xl font-semibold mb-3 text-white">
                  {{ project.title }}
                </h3>

                <p class="text-sm sm:text-base mb-4" style="color: #7a8984">
                  {{ project.description }}
                </p>

                <div class="mt-auto">
                  <!-- Tags -->
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span
                      v-for="tag in project.tags"
                      :key="tag"
                      class="text-xs px-3 py-1 rounded-md border"
                      style="
                        background: rgba(139, 157, 131, 0.15);
                        color: var(--color-accent-light);
                        border-color: rgba(139, 157, 131, 0.2);
                      "
                    >
                      {{ tag }}
                    </span>
                  </div>

                  <!-- Links -->
                  <div class="flex gap-4">
                    <a
                      v-if="project.liveUrl"
                      :href="project.liveUrl"
                      target="_blank"
                      class="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:translate-x-1"
                      style="color: var(--color-accent-primary)"
                    >
                      Project Featured <i class="fas fa-external-link-alt"></i>
                    </a>

                    <a
                      v-if="project.githubUrl"
                      :href="project.githubUrl"
                      target="_blank"
                      class="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:translate-x-1"
                      style="color: var(--color-accent-primary)"
                    >
                      GitHub <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicators (Dots) -->
        <div
          v-if="showScrollHint"
          class="flex justify-center gap-2 mt-6 md:hidden"
        >
          <div
            v-for="i in projects.length"
            :key="i"
            class="w-2 h-2 rounded-full transition-all"
            :class="i === 1 ? 'w-8' : ''"
            style="background: rgba(139, 157, 131, 0.5)"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2,
h3 {
  font-family: var(--font-heading);
}

.project-card {
  transition: transform 0.5s ease;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>