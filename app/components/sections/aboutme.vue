<script setup lang="ts">
import { ref, onMounted } from "vue";

// Props
defineProps<{
  profileImage?: string;
  skills?: string[];
  stats?: {
    experience: number;
  };
}>();

// Stats animation
const projectsCount = ref(0);
const experienceCount = ref(0);
const clientsCount = ref(0);
const statsVisible = ref(false);

const animateCounter = (target: number, refValue: any) => {
  let current = 0;
  const increment = target / 50;
  const duration = 1500;
  const stepTime = duration / 50;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      refValue.value = target;
      clearInterval(timer);
    } else {
      refValue.value = Math.floor(current);
    }
  }, stepTime);
};

onMounted(() => {
  // Intersection Observer for stats animation
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsVisible.value) {
          statsVisible.value = true;
          animateCounter(50, projectsCount);
          animateCounter(5, experienceCount);
          animateCounter(30, clientsCount);
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsElement = document.querySelector(".stats-grid");
  if (statsElement) {
    statsObserver.observe(statsElement);
  }
});
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
            <span class="font-semibold text-white"
              >self-taught UI/UX designer</span
            >
            and
            <span class="font-semibold text-white">full-stack developer</span>
            with over
            <span
              class="font-semibold"
              style="color: var(--color-accent-primary)"
              >2+ years of experience</span
            >
            crafting meaningful and delightful digital products.
          </p>
          <p
            class="text-base sm:text-lg leading-relaxed mb-6"
            style="color: #b8c5c0"
          >
            My passion lies in creating
            <span class="font-semibold text-white"
              >seamless user experiences</span
            >
            that perfectly balance user needs with business objectives. I
            believe great design is invisible—it just works.
          </p>
          <p
            class="text-base sm:text-lg leading-relaxed mb-6"
            style="color: #b8c5c0"
          >
            Currently working as a Web Developer at
            <span class="font-semibold" style="color: var(--color-accent-light)"
              >Norton University</span
            >, where I design and develop modern web applications for academic
            and administrative purposes.
          </p>
        </div>

        <!-- Stats Card -->
        <div class="glass p-6 sm:p-8 md:p-10 rounded-2xl reveal">
          <div class="stats-grid grid grid-cols-2 gap-4 sm:gap-6">
            <!-- Projects -->
            <div
              class="stat-item text-center p-4 sm:p-6 rounded-xl transition-transform hover:translate-y-[-4px]"
              style="background: rgba(232, 240, 237, 0.05)"
            >
              <span
                class="text-3xl sm:text-4xl md:text-5xl font-bold block mb-2"
                style="
                  color: var(--color-accent-primary);
                  font-family: var(--font-heading);
                "
              >
                {{ projectsCount }}+
              </span>
              <span
                class="text-xs sm:text-sm font-medium"
                style="color: #7a8984"
              >
                Projects Completed
              </span>
            </div>

            <!-- Experience -->
            <div
              class="stat-item text-center p-4 sm:p-6 rounded-xl transition-transform hover:translate-y-[-4px]"
              style="background: rgba(232, 240, 237, 0.05)"
            >
              <span
                class="text-3xl sm:text-4xl md:text-5xl font-bold block mb-2"
                style="
                  color: var(--color-accent-primary);
                  font-family: var(--font-heading);
                "
              >
                {{ experienceCount }}+
              </span>
              <span
                class="text-xs sm:text-sm font-medium"
                style="color: #7a8984"
              >
                Years Experience
              </span>
            </div>

            <!-- Clients -->
            <div
              class="stat-item text-center p-4 sm:p-6 rounded-xl transition-transform hover:translate-y-[-4px]"
              style="background: rgba(232, 240, 237, 0.05)"
            >
              <span
                class="text-3xl sm:text-4xl md:text-5xl font-bold block mb-2"
                style="
                  color: var(--color-accent-primary);
                  font-family: var(--font-heading);
                "
              >
                {{ clientsCount }}+
              </span>
              <span
                class="text-xs sm:text-sm font-medium"
                style="color: #7a8984"
              >
                Happy Clients
              </span>
            </div>

            <!-- Coffee -->
            <div
              class="stat-item text-center p-4 sm:p-6 rounded-xl transition-transform hover:translate-y-[-4px]"
              style="background: rgba(232, 240, 237, 0.05)"
            >
              <span
                class="text-3xl sm:text-4xl md:text-5xl font-bold block mb-2"
                style="
                  color: var(--color-accent-primary);
                  font-family: var(--font-heading);
                "
              >
                ∞
              </span>
              <span
                class="text-xs sm:text-sm font-medium"
                style="color: #7a8984"
              >
                Cups of Coffee
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  font-family: var(--font-heading);
}

/* Responsive font sizing */
@media (max-width: 640px) {
  .stat-item span:first-child {
    font-size: 2rem;
  }
}
</style>
