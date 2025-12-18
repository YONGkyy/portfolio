<script setup lang="ts">
// Experience data
const experiences = [
  {
    title: "Web Developer",
    company: "Norton University",
    period: "2023 – Present",
    duration: "1+ years", // ADDED: This was missing
    location: "Phnom Penh, Cambodia",
  description:
  "Developed and maintained an Online Management System for Materials and Technical Equipment in the Computer Lab, provided technical support for ICT service office users, and assisted other developers during new system implementations and feature updates.",
  achievements: [
  "Built and maintained an Online Management System for Computer Lab Equipment",
  "Provided daily technical support and troubleshooting for users, including system usage, hardware, and software issues",
  "Assisted developers during system rollout and new feature updates",
  "Performed system maintenance and basic issue debugging",
],

    technologies: ["Laravel", "SQLServer", "Vue 3", "TypeScript", "InertailJS", "Tailwind CSS", "Github",],
  },
];
</script>

<template>
  <section id="experience" class="relative py-16 sm:py-20 md:py-24 lg:py-32">
    <div class="container mx-auto px-4 md:px-16">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20 reveal">
        <span
          class="text-sm sm:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-4 block"
          style="color: var(--color-accent-primary)"
        >
          My Journey
        </span>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
        >
          Work Experience
        </h2>
        <p
          class="text-base sm:text-lg max-w-2xl mx-auto"
          style="color: #7a8984"
        >
          Professional experience building modern web applications
        </p>
      </div>

      <!-- Experience Cards -->
      <div class="max-w-4xl mx-auto space-y-8">
        <div
          v-for="(exp, index) in experiences"
          :key="exp.title"
          class="glass p-6 sm:p-8 md:p-10 rounded-2xl reveal relative overflow-hidden"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Background Accent -->
          <div
            class="absolute top-0 left-0 w-1 h-full"
            style="background: var(--color-accent-primary)"
          ></div>

          <!-- Header -->
          <div class="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center"
                style="
                  background: linear-gradient(
                    135deg,
                    var(--color-accent-dark),
                    var(--color-accent-primary)
                  );
                "
              >
                <i class="fas fa-university text-white text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-white mb-1">
                  {{ exp.title }}
                </h3>
                <p
                  class="text-base sm:text-lg font-medium"
                  style="color: var(--color-accent-light)"
                >
                  {{ exp.company }}
                </p>
              </div>
            </div>

            <div class="text-right">
              <div
                class="px-4 py-2 rounded-lg border"
                style="
                  background: rgba(139, 157, 131, 0.15);
                  border-color: var(--glass-border-dark);
                "
              >
                <span
                  class="text-sm font-semibold"
                  style="color: var(--color-accent-light)"
                >
                  {{ exp.period }}
                </span>
              </div>
              <p class="text-sm mt-1" style="color: #7a8984">
                {{ exp.duration }}
              </p>
            </div>
          </div>

          <!-- Description -->
          <p
            class="text-base sm:text-lg leading-relaxed mb-6"
            style="color: #b8c5c0"
          >
            {{ exp.description }}
          </p>

          <!-- Achievements -->
          <div class="mb-6">
            <h4 class="text-base sm:text-lg font-semibold mb-3 text-white">
              Key Projects
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="achievement in exp.achievements"
                :key="achievement"
                class="flex items-center gap-2"
              >
                <div
                  class="w-2 h-2 rounded-full"
                  style="background: var(--color-accent-primary)"
                ></div>
                <span class="text-sm sm:text-base" style="color: #b8c5c0">{{
                  achievement
                }}</span>
              </div>
            </div>
          </div>

          <!-- Technologies -->
          <div>
            <h4 class="text-base sm:text-lg font-semibold mb-3 text-white">
              Technologies Used
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in exp.technologies"
                :key="tech"
                class="skill-tag text-xs sm:text-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Footer Info -->
          <div
            class="flex items-center flex-wrap gap-4 mt-6 pt-6 border-t"
            style="border-color: var(--glass-border-dark)"
          >
            <div class="flex items-center gap-2 text-sm" style="color: #7a8984">
              <i
                class="fas fa-map-marker-alt"
                style="color: var(--color-accent-primary)"
              ></i>
              <span>{{ exp.location }}</span>
            </div>
            <div class="flex items-center gap-2 text-sm" style="color: #7a8984">
              <i
                class="fas fa-briefcase"
                style="color: var(--color-accent-primary)"
              ></i>
              <span>Full-time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2,
h3,
h4 {
  font-family: var(--font-heading);
}

/* Skill Tag Styling */
.skill-tag {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  background: rgba(139, 157, 131, 0.15);
  color: var(--color-accent-light);
  border: 1px solid rgba(139, 157, 131, 0.3);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(139, 157, 131, 0.25);
  transform: translateY(-2px);
}
</style>