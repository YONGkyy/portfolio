<script setup lang="ts">
import { Motion } from "motion-v";
import { onMounted, onUnmounted, computed } from "vue";
import {
  useTypingAnimation,
  useRoleCycling,
} from "~/composables/useTypingAnimation";

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

// Theme-aware classes helper
const themeClass = (lightClass: string, darkClass: string) =>
  computed(() => (isDark.value ? darkClass : lightClass));

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

interface FloatingOrb {
  id: number;
  size: number;
  color: string;
  position: Record<string, string>;
  delay: number;
  duration: number;
}

const props = defineProps<{
  profiles?: string;
  name?: string;
  roles?: string[];
  description?: string;
  socialLinks?: SocialLink[];
}>();

const name = props.name || "Keo Yinyong";
const roles = props.roles || [
  "Web Developer",
  "UI/UX Designer",
  "Creative Developer",
];

const greeting = useTypingAnimation("Hey there, I'm", 80);
const nameTyping = useTypingAnimation(name, 100);
const roleCycling = useRoleCycling(roles, {
  typeSpeed: 100,
  deleteSpeed: 50,
  pauseTime: 1000,
});

onMounted(async () => {
  await greeting.type();
  await new Promise((resolve) => setTimeout(resolve, 300));
  await nameTyping.type();
  await new Promise((resolve) => setTimeout(resolve, 500));
  roleCycling.start();
});

onUnmounted(() => {
  roleCycling.stop();
});

const description =
  props.description ||
  "Passionate about creating beautiful, functional digital experiences that solve real problems. I blend design thinking with technical expertise to craft solutions that users love.";

const socialLinks = props.socialLinks || [
  {
    name: "GitHub",
    icon: "fab fa-github",
    url: "https://github.com/YONGKyy",
  },
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/keo-yinyong-396277330/",
  },
  {
    name: "Facebook",
    icon: "fab fa-facebook-f",
    url: "https://www.facebook.com/yong.kawaii",
  },
  {
    name: "Telegram",
    icon: "fab fa-telegram-plane",
    url: "https://t.me/yong_24",
  },
];

const floatingOrbs: FloatingOrb[] = [
  {
    id: 1,
    size: 16,
    color: isDark.value ? "rgba(168, 85, 247, 0.8)" : "rgba(147, 51, 234, 0.6)",
    position: { top: "5%", left: "48%" },
    delay: 0,
    duration: 4,
  },
  {
    id: 2,
    size: 12,
    color: isDark.value ? "rgba(236, 72, 153, 0.8)" : "rgba(219, 39, 119, 0.6)",
    position: { top: "-8%", right: "-8%" },
    delay: 0.5,
    duration: 5,
  },
  {
    id: 3,
    size: 20,
    color: isDark.value ? "rgba(99, 102, 241, 0.8)" : "rgba(79, 70, 229, 0.6)",
    position: { bottom: "12%", left: "-12%" },
    delay: 1,
    duration: 6,
  },
  {
    id: 4,
    size: 14,
    color: isDark.value ? "rgba(168, 85, 247, 0.7)" : "rgba(147, 51, 234, 0.5)",
    position: { top: "15%", right: "-18%" },
    delay: 0.3,
    duration: 5.5,
  },
  {
    id: 5,
    size: 18,
    color: isDark.value ? "rgba(236, 72, 153, 0.7)" : "rgba(219, 39, 119, 0.5)",
    position: { bottom: "-8%", left: "25%" },
    delay: 0.8,
    duration: 4.5,
  },
  {
    id: 6,
    size: 10,
    color: isDark.value ? "rgba(99, 102, 241, 0.9)" : "rgba(79, 70, 229, 0.7)",
    position: { bottom: "-5%", right: "-5%" },
    delay: 1.2,
    duration: 5,
  },
  {
    id: 7,
    size: 16,
    color: isDark.value ? "rgba(168, 85, 247, 0.6)" : "rgba(147, 51, 234, 0.4)",
    position: { top: "20%", left: "-28%" },
    delay: 0.6,
    duration: 6.5,
  },
  {
    id: 8,
    size: 12,
    color: isDark.value ? "rgba(236, 72, 153, 0.9)" : "rgba(219, 39, 119, 0.7)",
    position: { top: "60%", right: "-18%" },
    delay: 1.5,
    duration: 5,
  },
  {
    id: 9,
    size: 14,
    color: isDark.value ? "rgba(99, 102, 241, 0.8)" : "rgba(79, 70, 229, 0.6)",
    position: { top: "-5%", left: "15%" },
    delay: 0.4,
    duration: 4.8,
  },
];

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
</script>

<template>
  <section
    id="banner"
    class="relative pt-8 md:pt-0 min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div class="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Text Content -->
        <Motion
          :initial="{ opacity: 0, x: -60 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          class="order-2 lg:order-1 text-center lg:text-left space-y-8"
        >
          <!-- Availability Badge -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.2 }"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border mx-auto lg:mx-0 transition-colors"
            :class="[
              isDark
                ? 'bg-white/5 border-purple-500/20'
                : 'bg-blue-50/80 border-blue-200/60',
            ]"
          >
            <span class="relative flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                :class="isDark ? 'bg-purple-400' : 'bg-blue-500'"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3"
                :class="isDark ? 'bg-purple-500' : 'bg-blue-600'"
              ></span>
            </span>
            <span
              class="text-sm font-medium"
              :class="isDark ? 'text-purple-300' : 'text-blue-700'"
            >
              Available for work
            </span>
          </Motion>

          <!-- Greeting -->
          <div class="space-y-4">
            <Motion
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ delay: 0.2 }"
            >
              <h2
                class="text-xl sm:text-2xl font-light tracking-wide min-h-8"
                :class="isDark ? 'text-purple-300' : 'text-blue-600'"
              >
                {{ greeting.displayText }}
                <span v-if="!greeting.isComplete" class="animate-blink">|</span>
              </h2>
            </Motion>

            <!-- Name -->
            <Motion
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ delay: 0.1 }"
            >
              <h1
                class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight min-h-16 sm:min-h-20 lg:min-h-24"
              >
                <span
                  class="bg-gradient-to-r bg-clip-text text-transparent"
                  :class="
                    isDark
                      ? 'from-white via-purple-200 to-white'
                      : 'from-slate-900 via-blue-600 to-slate-900'
                  "
                >
                  {{ nameTyping.displayText }}
                  <span v-if="!nameTyping.isComplete" class="animate-blink"
                    >|</span
                  >
                </span>
              </h1>
            </Motion>

            <!-- Role -->
            <Motion
              v-if="nameTyping.isComplete"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5 }"
            >
              <div
                class="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-2xl sm:text-3xl lg:text-4xl font-semibold"
                :class="isDark ? 'text-gray-300' : 'text-gray-700'"
              >
                <span>I'm a</span>
                <span class="relative inline-flex items-center">
                  <span
                    class="bg-gradient-to-r bg-clip-text text-transparent from-purple-400 via-pink-400 to-indigo-400"
                  >
                    <span
                      class="inline-block min-w-[200px] sm:min-w-[280px] text-left"
                    >
                      {{ roleCycling.currentRole
                      }}<span class="animate-blink ml-1">|</span>
                    </span>
                  </span>
                </span>
              </div>
            </Motion>
          </div>

          <!-- Description -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.6 }"
            class="max-w-2xl mx-auto lg:mx-0"
          >
            <p
              class="text-lg sm:text-xl leading-relaxed"
              :class="isDark ? 'text-gray-400' : 'text-gray-600'"
            >
              {{ description }}
            </p>
          </Motion>

          <!-- CTA Buttons -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.7 }"
            class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a href="#explore">
              <Motion
                :whileHover="{ scale: 1.05 }"
                :whileTap="{ scale: 0.95 }"
                class="group relative px-8 py-4 rounded-full font-semibold shadow-lg transition-all cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/50"
              >
                <span class="relative z-10 flex items-center gap-2">
                  Explore
                  <i
                    class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"
                  ></i>
                </span>
              </Motion>
            </a>

            <a href="/files/keo-yinyong-cv.pdf" download>
              <Motion
                :whileHover="{ scale: 1.05 }"
                :whileTap="{ scale: 0.95 }"
                class="px-8 py-4 rounded-full font-semibold transition-all cursor-pointer inline-block"
                :class="
                  isDark
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10'
                    : 'bg-blue-500/10 border border-blue-300/50 text-blue-700 hover:bg-blue-500/20'
                "
              >
                Download CV
              </Motion>
            </a>
          </Motion>

          <!-- Social Links -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.8 }"
            class="flex items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <span
              class="text-sm font-medium"
              :class="isDark ? 'text-gray-500' : 'text-gray-600'"
            >
              Connect:
            </span>
            <div class="flex gap-3">
              <Motion
                v-for="(social, index) in socialLinks"
                :key="social.name"
                :initial="{ opacity: 0, scale: 0 }"
                :animate="{ opacity: 1, scale: 1 }"
                :transition="{ delay: 0.9 + index * 0.1 }"
                :whileHover="{ scale: 1.1, y: -2 }"
                :whileTap="{ scale: 0.95 }"
                class="w-12 h-12 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all cursor-pointer"
                :class="
                  isDark
                    ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-white/10'
                    : 'bg-blue-50/80 border-blue-200/60 text-gray-600 hover:text-blue-700 hover:border-blue-400/60 hover:bg-blue-100/80'
                "
                @click="openLink(social.url)"
              >
                <i :class="social.icon" class="text-lg"></i>
              </Motion>
            </div>
          </Motion>

          <!-- Stats -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 1 }"
            class="grid grid-cols-3 gap-6 pt-8 max-w-lg mx-auto lg:mx-0"
          >
            <div class="text-center lg:text-left">
              <div
                class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                2+
              </div>
              <div
                class="text-sm mt-1"
                :class="isDark ? 'text-gray-500' : 'text-gray-600'"
              >
                Years Exp
              </div>
            </div>
          </Motion>
        </Motion>

        <!-- Profile Image -->
        <Motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          class="order-1 lg:order-2 flex justify-center items-center"
        >
          <div class="relative w-full max-w-md lg:max-w-lg">
            <!-- Glowing Background -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full blur-3xl opacity-40 animate-pulse"
            />

            <!-- Rotating Rings -->
            <Motion
              :animate="{ rotate: 360 }"
              :transition="{ duration: 20, repeat: Infinity, ease: 'linear' }"
              class="absolute inset-0"
            >
              <div
                class="absolute inset-0 rounded-full border-4 border-dashed border-purple-500/30"
              ></div>
            </Motion>

            <Motion
              :animate="{ rotate: -360 }"
              :transition="{ duration: 25, repeat: Infinity, ease: 'linear' }"
              class="absolute inset-8"
            >
              <div
                class="absolute inset-0 rounded-full border-2 border-dotted border-pink-500/30"
              ></div>
            </Motion>

            <!-- Profile Card -->
            <div
              class="relative aspect-square rounded-3xl backdrop-blur-xl border shadow-2xl p-8"
              :class="
                isDark
                  ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-white/10'
                  : 'bg-gradient-to-br from-purple-100/50 to-pink-100/50 border-blue-200/40'
              "
            >
              <div
                class="absolute inset-0 rounded-3xl"
                :class="
                  isDark
                    ? 'bg-gradient-to-br from-purple-500/5 to-pink-500/5'
                    : 'bg-gradient-to-br from-blue-50/30 to-purple-50/30'
                "
              ></div>

              <!-- Profile Image with transparent background -->
              <Motion
                :whileHover="{ scale: 1.05 }"
                :transition="{ type: 'spring', stiffness: 300 }"
                class="relative w-full h-full rounded-2xl overflow-hidden"
              >
                <div class="w-full h-full flex items-center justify-center">
                  <nuxtImg
                    :src="props.profiles"
                    alt="Profile Image"
                    class="w-full h-full object-cover"
                  />
                </div>
              </Motion>

              <!-- Floating Fairy Light Orbs -->
              <Motion
                v-for="orb in floatingOrbs"
                :key="orb.id"
                :initial="{ opacity: 0, scale: 0 }"
                :animate="{
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1.2, 1, 0.8],
                  y: [0, -20, -10, 0],
                }"
                :transition="{
                  duration: orb.duration,
                  repeat: Infinity,
                  delay: orb.delay + 1.2,
                  ease: 'easeInOut',
                }"
                :style="orb.position"
                class="absolute hidden lg:block pointer-events-none"
              >
                <div
                  class="relative rounded-full"
                  :style="{
                    width: `${orb.size}px`,
                    height: `${orb.size}px`,
                    backgroundColor: orb.color,
                    boxShadow: `0 0 ${orb.size * 2}px ${orb.color}, 0 0 ${
                      orb.size * 4
                    }px ${orb.color}`,
                  }"
                >
                  <!-- Inner glow -->
                  <div
                    class="absolute inset-0 rounded-full animate-pulse"
                    :style="{
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      boxShadow: `inset 0 0 ${
                        orb.size / 2
                      }px rgba(255, 255, 255, 0.9)`,
                    }"
                  />
                </div>
              </Motion>
            </div>

            <!-- Corner Decorations -->
            <div
              class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"
            ></div>
            <div
              class="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-50"
            ></div>
          </div>
        </Motion>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <Motion
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1, y: [0, 10, 0] }"
      :transition="{
        opacity: { delay: 2 },
        y: { duration: 2, repeat: Infinity },
      }"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      :class="isDark ? 'text-gray-500' : 'text-gray-600'"
    >
      <span class="text-xs uppercase tracking-wider">Scroll</span>
      <i class="fas fa-chevron-down text-sm"></i>
    </Motion>
  </section>
</template>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}
</style>
