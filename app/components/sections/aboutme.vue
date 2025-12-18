<script setup lang="ts">
import { ref } from "vue";

// Props
defineProps<{
  profileImage?: string;
}>();

// ============================================
// CHOOSE YOUR DESIGN HERE:
// Options: 'personality', 'interests', 'approach', 'minimal'
// ============================================
const selectedDesign = ref<
  "personality" | "interests" | "approach" | "minimal"
>("personality");

// ============================================
// OPTION 1: PERSONALITY TRAITS
// ============================================
const traits = ref([
  {
    emoji: "🎨",
    title: "Creative Thinker",
    description: "Love transforming ideas into beautiful, functional designs",
  },
  {
    emoji: "🔍",
    title: "Detail-Oriented",
    description: "Obsessed with pixel-perfect implementations and smooth UX",
  },
  {
    emoji: "🚀",
    title: "Fast Learner",
    description: "Self-taught everything, always exploring new technologies",
  },
  {
    emoji: "🤝",
    title: "Team Player",
    description: "Great at collaborating and communicating with stakeholders",
  },
]);

// ============================================
// OPTION 2: INTERESTS & HOBBIES
// ============================================
const interests = ref([
  {
    icon: "fas fa-laptop-code",
    title: "Open Source",
    description: "Contributing to projects and learning from the community",
  },
  {
    icon: "fas fa-book",
    title: "Continuous Learning",
    description: "Reading tech blogs, watching tutorials, taking courses",
  },
  {
    icon: "fas fa-palette",
    title: "Design Systems",
    description: "Building reusable components and consistent UI patterns",
  },
  {
    icon: "fas fa-coffee",
    title: "Coffee Enthusiast",
    description: "Fueled by good coffee and great conversations",
  },
]);

// ============================================
// OPTION 3: WORK APPROACH/PHILOSOPHY
// ============================================
const approach = ref([
  {
    number: "01",
    title: "Understand First",
    description:
      "Deep dive into user needs and business goals before designing",
  },
  {
    number: "02",
    title: "Iterate Quickly",
    description: "Prototype fast, gather feedback, and refine continuously",
  },
  {
    number: "03",
    title: "Build Quality",
    description: "Write clean, maintainable code with accessibility in mind",
  },
  {
    number: "04",
    title: "Never Stop",
    description: "Always learning, improving, and pushing boundaries",
  },
]);

// ============================================
// OPTION 4: QUOTE/HIGHLIGHT
// ============================================
const highlights = ref([
  {
    icon: "fas fa-quote-left",
    text: "Design is not just what it looks like. Design is how it works.",
    author: "Steve Jobs",
  },
  {
    icon: "fas fa-lightbulb",
    stat: "100+",
    label: "Hours of Learning per Month",
  },
  {
    icon: "fas fa-heart",
    stat: "∞",
    label: "Passion for Creating",
  },
]);
</script>

<template>
  <section id="aboutme" class="relative py-16 sm:py-20 md:py-24 lg:py-32">
    <div class="container mx-auto px-4 md:px-16">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20 reveal">
        <span
          class="text-sm sm:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-4 block"
          style="color: var(--color-accent-primary)"
        >
          Get to know me
        </span>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
        >
          About Me
        </h2>
        <p
          class="text-base sm:text-lg max-w-2xl mx-auto"
          style="color: #7a8984"
        >
          A passionate developer dedicated to creating exceptional digital
          experiences
        </p>
      </div>

      <!-- Content Grid -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
      >
        <!-- Text Content -->
        <div class="about-text space-y-4 sm:space-y-6 reveal">
          <p
            class="text-base sm:text-lg leading-relaxed mb-6"
            style="color: #b8c5c0"
          >
            I'm a
            <span class="font-semibold text-white">full-stack developer</span>
            with over
            <span
              class="font-semibold"
              style="color: var(--color-accent-primary)"
              >2+ years of experience</span
            >
            crafting meaningful and efficient digital products.
          </p>
          <p
            class="text-base sm:text-lg leading-relaxed mb-6"
            style="color: #b8c5c0"
          >
            My passion lies in creating
            <span class="font-semibold text-white"
              >seamless user experiences</span
            >
            that balance user needs with business objectives. I believe great
            design is invisible—it just works.
          </p>
          <p
            class="text-base sm:text-lg leading-relaxed mb-6"
            style="color: #b8c5c0"
          >
            Currently working as a Web Developer at
            <span class="font-semibold" style="color: var(--color-accent-light)"
              >Norton University</span
            >, where I build web dashboards for staff, develop new features, and
            maintain existing systems to ensure smooth academic and
            administrative operations.
          </p>
        </div>

        <!-- ============================================ -->
        <!-- OPTION 1: PERSONALITY TRAITS (with emojis) -->
        <!-- ============================================ -->
        <div
          v-if="selectedDesign === 'personality'"
          class="glass p-6 sm:p-8 md:p-10 rounded-2xl reveal"
        >
          <h3
            class="text-2xl font-bold text-white mb-6 text-center"
            style="font-family: var(--font-heading)"
          >
            Who I Am
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="(trait, index) in traits"
              :key="index"
              class="trait-card p-5 rounded-xl transition-all duration-300 hover:translate-y-[-4px] hover:scale-105"
              style="background: rgba(232, 240, 237, 0.05)"
            >
              <div
                class="text-4xl mb-3 transition-transform duration-300 hover:scale-110"
              >
                {{ trait.emoji }}
              </div>
              <h4 class="text-base font-semibold text-white mb-2">
                {{ trait.title }}
              </h4>
              <p class="text-sm leading-relaxed" style="color: #7a8984">
                {{ trait.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- ============================================ -->
        <!-- OPTION 2: INTERESTS & HOBBIES -->
        <!-- ============================================ -->
        <div
          v-else-if="selectedDesign === 'interests'"
          class="glass p-6 sm:p-8 md:p-10 rounded-2xl reveal"
        >
          <h3
            class="text-2xl font-bold text-white mb-6 text-center"
            style="font-family: var(--font-heading)"
          >
            Beyond Code
          </h3>
          <div class="space-y-4">
            <div
              v-for="(interest, index) in interests"
              :key="index"
              class="interest-item p-4 rounded-xl transition-all duration-300 hover:translate-x-2"
              style="background: rgba(232, 240, 237, 0.05)"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:rotate-12"
                  style="background: rgba(139, 157, 131, 0.2)"
                >
                  <i
                    :class="interest.icon"
                    class="text-xl"
                    style="color: var(--color-accent-primary)"
                  ></i>
                </div>
                <div class="flex-1">
                  <h4 class="text-base font-semibold text-white mb-1">
                    {{ interest.title }}
                  </h4>
                  <p class="text-sm" style="color: #7a8984">
                    {{ interest.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ============================================ -->
        <!-- OPTION 3: WORK APPROACH (numbered steps) -->
        <!-- ============================================ -->
        <div
          v-else-if="selectedDesign === 'approach'"
          class="glass p-6 sm:p-8 md:p-10 rounded-2xl reveal"
        >
          <h3
            class="text-2xl font-bold text-white mb-6 text-center"
            style="font-family: var(--font-heading)"
          >
            How I Work
          </h3>
          <div class="space-y-5">
            <div
              v-for="(step, index) in approach"
              :key="index"
              class="approach-item relative pl-16 py-4 transition-all duration-300 hover:translate-x-2"
            >
              <div
                class="absolute left-0 top-4 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg transition-transform duration-300 hover:scale-110"
                style="
                  background: rgba(139, 157, 131, 0.2);
                  color: var(--color-accent-primary);
                  font-family: var(--font-heading);
                "
              >
                {{ step.number }}
              </div>
              <h4 class="text-base font-semibold text-white mb-1">
                {{ step.title }}
              </h4>
              <p class="text-sm leading-relaxed" style="color: #7a8984">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- ============================================ -->
        <!-- OPTION 4: MINIMAL (Quote + Key Stats) -->
        <!-- ============================================ -->
        <div
          v-else-if="selectedDesign === 'minimal'"
          class="glass p-6 sm:p-8 md:p-10 rounded-2xl reveal"
        >
          <div class="space-y-6">
            <!-- Quote -->
            <div
              class="quote-section p-6 rounded-xl"
              style="background: rgba(232, 240, 237, 0.05)"
            >
              <i
                class="fas fa-quote-left text-2xl mb-4 block"
                style="color: var(--color-accent-primary)"
              ></i>
              <p class="text-lg italic leading-relaxed text-white mb-3">
                {{ highlights[0].text }}
              </p>
              <p class="text-sm" style="color: #7a8984">
                — {{ highlights[0].author }}
              </p>
            </div>

            <!-- Mini Stats -->
            <div class="grid grid-cols-2 gap-4">
              <div
                class="mini-stat p-5 rounded-xl text-center transition-all duration-300 hover:translate-y-[-4px]"
                style="background: rgba(232, 240, 237, 0.05)"
              >
                <div
                  class="text-4xl mb-2"
                  style="
                    color: var(--color-accent-primary);
                    font-family: var(--font-heading);
                    font-weight: bold;
                  "
                >
                  {{ highlights[1].stat }}
                </div>
                <p class="text-xs font-medium" style="color: #7a8984">
                  {{ highlights[1].label }}
                </p>
              </div>
              <div
                class="mini-stat p-5 rounded-xl text-center transition-all duration-300 hover:translate-y-[-4px]"
                style="background: rgba(232, 240, 237, 0.05)"
              >
                <div
                  class="text-4xl mb-2"
                  style="
                    color: var(--color-accent-primary);
                    font-family: var(--font-heading);
                    font-weight: bold;
                  "
                >
                  {{ highlights[2].stat }}
                </div>
                <p class="text-xs font-medium" style="color: #7a8984">
                  {{ highlights[2].label }}
                </p>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="text-center pt-4">
              <a
                href="#contact"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:translate-y-[-2px]"
                style="background: var(--color-accent-primary); color: #000"
              >
                <span>Let's Work Together</span>
                <i class="fas fa-arrow-right"></i>
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

/* Personality Traits */
.trait-card:hover {
  background: rgba(232, 240, 237, 0.08) !important;
}

/* Interests */
.interest-item:hover {
  background: rgba(232, 240, 237, 0.08) !important;
}

/* Approach */
.approach-item:hover::before {
  content: "";
  position: absolute;
  left: 56px;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 100%;
  background: var(--color-accent-primary);
  opacity: 0.3;
}

/* Minimal */
.mini-stat:hover {
  background: rgba(232, 240, 237, 0.08) !important;
}

/* Responsive */
@media (max-width: 640px) {
  .trait-card,
  .interest-item {
    padding: 1rem;
  }

  .approach-item {
    padding-left: 3.5rem;
  }
}
</style>
