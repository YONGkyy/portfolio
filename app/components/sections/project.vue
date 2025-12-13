<script setup lang="ts">
import { ref } from "vue";

// Sample project data
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["Vue.js", "Laravel", "MySQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
    tags: ["Vue.js", "Nuxt.js", "PostgreSQL", "WebSockets"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard with interactive charts, real-time metrics, and customizable reporting features.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    tags: ["TypeScript", "Next.js", "D3.js", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Platform",
    description:
      "Full-featured social networking platform with posts, comments, real-time chat, and user authentication.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    tags: ["React", "Firebase", "Redux", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "Headless CMS for portfolio websites with a modern admin interface, API-first architecture, and flexible content modeling.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    tags: ["Strapi", "GraphQL", "Next.js", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile App Landing",
    description:
      "Beautiful, conversion-optimized landing page for a mobile fitness app with smooth animations and responsive design.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    tags: ["HTML/CSS", "JavaScript", "GSAP", "Responsive"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

// Mouse move for 3D tilt effect
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
  card.style.transform =
    "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
};
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

      <!-- Projects Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card reveal"
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
          <div class="p-6">
            <h3 class="text-xl sm:text-2xl font-semibold mb-3 text-white">
              {{ project.title }}
            </h3>
            <p class="text-sm sm:text-base mb-4" style="color: #7a8984">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
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
                :href="project.liveUrl"
                class="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:translate-x-1"
                style="color: var(--color-accent-primary)"
              >
                View Live <i class="fas fa-external-link-alt"></i>
              </a>
              <a
                :href="project.githubUrl"
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
</style>
