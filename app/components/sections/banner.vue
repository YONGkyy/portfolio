<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

interface Banner {
  name: string;
  role: string;
  description: string;
  profileImage: string;
  buttons: { label: string; target: string; icon: string; outline?: boolean }[];
}

// ================================
// Banners Data (add more if needed)
// ================================
const banners: Banner[] = [
  {
    name: "Keo Yinyong",
    role: "Full-stack Developer",
    description:
      "Passionate developer creating meaningful digital experiences that balance user needs and business goals.",
    profileImage: "/images/profileV1.png",
    buttons: [
      { label: "View My Work", target: "projects", icon: "fas fa-arrow-down" },
    ],
  },
  // Example for a second banner (optional)
  // {
  //   name: "Another Banner",
  //   role: "UI/UX Designer",
  //   description: "Another description here...",
  //   profileImage: "/images/another.png",
  //   buttons: [{ label: "Learn More", target: "about", icon: "fas fa-info" }]
  // }
];

// ================================
// Social Links
// ================================
const socialLinks = [
  { icon: "fab fa-github", url: "https://github.com/YONGKyy", label: "GitHub" },
  {
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/keo-yinyong-396277330/",
    label: "LinkedIn",
  },
  {
    icon: "fab fa-facebook-f",
    url: "https://www.facebook.com/hea.yong.24",
    label: "Facebook",
  },
  {
    icon: "fab fa-telegram-plane",
    url: "https://t.me/yong_24",
    label: "Telegram",
  },
];

// ================================
// Banner State
// ================================
const activeBannerIndex = ref(0);
const activeBanner = computed(() => banners[activeBannerIndex.value]);

// ================================
// Parallax Scroll
// ================================
const parallaxOffset = ref(0);
const handleScroll = () => {
  parallaxOffset.value = window.scrollY * 0.4;
};

// ================================
// Smooth Scroll
// ================================
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

// ================================
// Lifecycle
// ================================
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
      background: var(
        --color-background-dark,
        linear-gradient(180deg, rgb(10, 14, 13) 0%, rgb(19, 24, 22) 100%)
      );
    "
  >
    <!-- Background Shapes -->
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

    <!-- Content -->
    <div
      class="container mx-auto px-4 md:px-16 relative z-10 flex flex-col lg:flex-row items-center justify-between"
    >
      <!-- Left Text -->
      <div
        class="hero-content text-center lg:text-left animate-fade-in-up w-full lg:w-1/2 pt-24 lg:pt-0"
        :style="{
          transform: `translateY(${parallaxOffset}px)`,
          opacity: Math.max(0, 1 - parallaxOffset / 500),
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
          <span class="text-gradient-sage">{{ activeBanner.name }}</span>
        </h1>

        <p
          class="text-base sm:text-lg md:text-xl max-w-2xl mb-6 leading-relaxed text-[var(--color-text-secondary-dark)]"
        >
          {{ activeBanner.description }}
        </p>

        <!-- PROFILE IMAGE (on mobile only) -->
        <div class="w-56 h-56 md:hidden mx-auto mb-6 relative">
          <img
            :src="activeBanner.profileImage"
            :alt="`Profile of ${activeBanner.name}`"
            class="w-full h-full object-cover absolute z-10 rounded-full"
          />
          <div class="absolute inset-0 squircle-static"></div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            v-for="btn in activeBanner.buttons"
            :key="btn.label"
            @click="smoothScrollTo(btn.target)"
            :class="[
              btn.outline ? 'btn-sage-outline' : 'btn-sage',
              'inline-flex items-center justify-center gap-2',
            ]"
          >
            <span>{{ btn.label }}</span>
            <i :class="btn.icon"></i>
          </button>
        </div>

        <!-- Social Links -->
        <div class="flex flex-wrap items-center gap-4 mt-6">
          <span class="text-sm sm:text-base text-white"
            >Connect with me on:</span
          >
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            class="w-10 h-10 flex items-center justify-center rounded-full glass text-gray-400 hover:bg-[var(--color-accent-primary)] hover:text-black transition-all duration-300"
          >
            <i :class="social.icon" class="text-lg"></i>
          </a>
        </div>
      </div>

      <!-- Right Profile Image (desktop only) -->
      <div
        class="hidden lg:flex w-full lg:w-1/2 justify-center items-center mt-12 lg:mt-0"
      >
        <div
          class="w-80 h-80 lg:w-[500px] lg:h-[500px] relative reveal profile-image-wrapper"
        >
          <img
            :src="activeBanner.profileImage"
            :alt="`Profile of ${activeBanner.name}`"
            class="w-full h-full object-cover absolute z-10 rounded-full"
          />
          <div class="absolute inset-0 squircle-static"></div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
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
h1 {
  font-family: var(--font-heading);
}

/* Gradient Text */
.text-gradient-sage {
  background: linear-gradient(
    90deg,
    var(--color-accent-primary),
    var(--color-accent-light)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Buttons */
.btn-sage {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  color: #000;
  background: var(--color-accent-primary);
  transition: all 0.3s ease;
}
.btn-sage:hover {
  background: var(--color-accent-light);
  transform: translateY(-2px);
}

.btn-sage-outline {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: 2px solid var(--color-accent-primary);
  transition: all 0.3s ease;
}
.btn-sage-outline:hover {
  background: var(--color-accent-primary);
  color: #000 !important;
}

/* Profile Image Wrapper */
.profile-image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-image-wrapper::before {
  content: "";
  position: absolute;
  inset: -4px;
  border: 4px solid var(--color-accent-primary);
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
  animation: vector-spin 30s linear infinite;
  z-index: 0;
  pointer-events: none;
}
.squircle-static {
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
  z-index: 1;
}

/* Keyframes */
@keyframes vector-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
