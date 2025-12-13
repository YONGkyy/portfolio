<script setup lang="ts">
import { ref } from "vue";

// Skills data organized by category
const skillCategories = [
  {
    title: "Frontend",
    icon: "fas fa-code",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Nuxt.js",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Sass/SCSS",
      "Responsive Design",
      "Animation",
    ],
  },
  {
    title: "Backend",
    icon: "fas fa-server",
    skills: [
      "Node.js",
      "Express",
      "Laravel",
      "PHP",
      "Python",
      "RESTful APIs",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "WebSockets",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "fas fa-tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "AWS",
      "Vercel",
      "Webpack",
      "Vite",
      "ESLint",
      "Jest",
      "Figma",
      "Agile/Scrum",
    ],
  },
];
</script>

<template>
  <section
    id="skills"
    class="relative py-16 sm:py-20 md:py-24 lg:py-32"
    style="background: rgb(19, 24, 22)"
  >
    <div class="container mx-auto px-4 md:px-16">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20 reveal">
        <span
          class="text-sm sm:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-4 block"
          style="color: var(--color-accent-primary)"
        >
          What I know
        </span>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
        >
          Skills & Technologies
        </h2>
        <p
          class="text-base sm:text-lg max-w-2xl mx-auto"
          style="color: #7a8984"
        >
          My toolkit for building modern, scalable web applications
        </p>
      </div>

      <!-- Skills Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <div
          v-for="(category, index) in skillCategories"
          :key="category.title"
          class="glass p-6 sm:p-8 rounded-2xl reveal transition-transform hover:translate-y-[-4px]"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Category Title -->
          <h3
            class="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-3"
            style="color: var(--color-accent-primary)"
          >
            <i :class="category.icon"></i>
            <span>{{ category.title }}</span>
          </h3>

          <!-- Skill Tags -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, skillIndex) in category.skills"
              :key="skill"
              class="skill-tag text-sm"
              :style="{ animationDelay: `${skillIndex * 30}ms` }"
            >
              {{ skill }}
            </span>
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
