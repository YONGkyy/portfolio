<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const certificates = [
  {
    id: 1,
    title: "English Language Proficiency",
    issuer: "Norton University",
    date: "2024",
    credentialId: "0084/24 NU/CAHL",
    image: "/certificates/e1.jpg",
    icon: "fas fa-language",
  },
  {
    id: 2,
    title: "Internship Completion",
    issuer: "Norton University",
    date: "2025",
    credentialId: "1612/25",
    image: "/certificates/i1.jpg",
    icon: "fas fa-briefcase",
  },
  {
    id: 3,
    title: "Academic Award",
    issuer: "Norton University",
    date: "2024",
    credentialId: "0163/24 NU",
    image: "/certificates/t1.jpg",
    icon: "fas fa-award",
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

const viewCertificate = (image: string) => {
  window.open(image, "_blank");
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
  <section
    id="certificates"
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
          Achievements
        </span>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
        >
          Certifications
        </h2>
        <p
          class="text-base sm:text-lg max-w-2xl mx-auto"
          style="color: #7a8984"
        >
          Professional certifications and academic achievements
        </p>
      </div>

      <!-- Certificates Container with Scroll -->
      <div class="relative">
        <!-- Scroll Hint (Mobile Only) -->
        <div
          v-if="showScrollHint"
          class="flex items-center justify-center gap-2 mb-4 md:hidden animate-bounce"
        >
          <i class="fas fa-hand-pointer text-lg" style="color: var(--color-accent-primary)"></i>
          <span class="text-sm" style="color: #7a8984">Swipe to see more certificates</span>
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

        <!-- Scrollable Certificates Grid -->
        <div
          ref="scrollContainer"
          class="overflow-x-auto scrollbar-hide md:overflow-x-hidden"
        >
          <div
            class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-4"
            :class="certificates.length > 3 ? 'md:overflow-x-auto md:flex md:flex-nowrap lg:grid' : ''"
          >
            <div
              v-for="(cert, index) in certificates"
              :key="cert.id"
              class="glass rounded-2xl overflow-hidden reveal transition-transform hover:translate-y-[-8px] cursor-pointer flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto"
              :style="{ animationDelay: `${index * 100}ms` }"
              @click="viewCertificate(cert.image)"
            >
              <!-- Certificate Image -->
              <div class="relative aspect-[1/1.414] overflow-hidden bg-slate-800">
                <img
                  :src="cert.image"
                  :alt="cert.title"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                <!-- Hover Overlay -->
                <div
                  class="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div class="text-center">
                    <i class="fas fa-search-plus text-3xl text-white mb-2"></i>
                    <p class="text-sm font-semibold text-white">Click to View</p>
                  </div>
                </div>

                <!-- Date Badge -->
                <div
                  class="absolute top-3 right-3 px-3 py-1 rounded-lg backdrop-blur-sm"
                  style="background: rgba(139, 157, 131, 0.9)"
                >
                  <span class="text-xs font-bold text-slate-900">{{
                    cert.date
                  }}</span>
                </div>
              </div>

              <!-- Certificate Info -->
              <div class="p-6">
                <!-- Icon -->
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style="
                    background: linear-gradient(
                      135deg,
                      var(--color-accent-dark),
                      var(--color-accent-primary)
                    );
                  "
                >
                  <i :class="`${cert.icon} text-white text-lg`"></i>
                </div>

                <!-- Title -->
                <h3 class="text-lg sm:text-xl font-bold mb-2 text-white">
                  {{ cert.title }}
                </h3>

                <!-- Issuer -->
                <p class="text-sm mb-2" style="color: var(--color-accent-light)">
                  Issued by {{ cert.issuer }}
                </p>

                <!-- Credential ID -->
                <p class="text-xs mb-4" style="color: #7a8984">
                  ID: {{ cert.credentialId }}
                </p>

                <!-- View Button -->
                <button
                  class="btn-sage w-full text-sm py-2"
                  @click.stop="viewCertificate(cert.image)"
                >
                  <i class="fas fa-eye mr-2"></i>
                  View Certificate
                </button>

                <!-- Verified Badge -->
                <div
                  class="flex items-center justify-center gap-2 mt-4 text-xs"
                  style="color: #7a8984"
                >
                  <i class="fas fa-check-circle text-green-400"></i>
                  <span>Verified Certificate</span>
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
            v-for="i in certificates.length"
            :key="i"
            class="w-2 h-2 rounded-full transition-all"
            :class="i === 1 ? 'w-8' : ''"
            style="background: rgba(139, 157, 131, 0.5)"
          ></div>
        </div>
      </div>

      <!-- Stats -->
      <div class="glass p-6 sm:p-8 rounded-2xl mt-12 reveal">
        <div class="grid grid-cols-3 gap-4 sm:gap-6 text-center">
          <div>
            <div
              class="text-2xl sm:text-3xl font-bold mb-1"
              style="
                color: var(--color-accent-primary);
                font-family: var(--font-heading);
              "
            >
              {{ certificates.length }}+
            </div>
            <div class="text-xs sm:text-sm" style="color: #7a8984">
              Certificates
            </div>
          </div>
          <div>
            <div
              class="text-2xl sm:text-3xl font-bold mb-1"
              style="
                color: var(--color-accent-primary);
                font-family: var(--font-heading);
              "
            >
              100%
            </div>
            <div class="text-xs sm:text-sm" style="color: #7a8984">
              Completion Rate
            </div>
          </div>
          <div>
            <div
              class="text-2xl sm:text-3xl font-bold mb-1"
              style="
                color: var(--color-accent-primary);
                font-family: var(--font-heading);
              "
            >
              50+
            </div>
            <div class="text-xs sm:text-sm" style="color: #7a8984">
              Hours Training
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