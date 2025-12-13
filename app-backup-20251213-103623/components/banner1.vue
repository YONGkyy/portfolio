<template>
  <section
    id="banner"
    data-aos="fade-up"
    class="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32 relative"
  >
    <!-- Profile Image Section -->
    <div data-aos="fade-right" class="relative order-1 lg:order-1">
      <!-- Profile Image with Animated Glow -->
      <div
        class="relative flex items-center justify-center w-44 h-44 sm:w-64 sm:h-64 lg:w-72"
      >
        <Motion
          :initial="{ scale: 0, rotate: -180 }"
          :animate="{ scale: 1, rotate: 0 }"
          :transition="{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: 0.2,
          }"
          class="relative flex items-center justify-center w-80 h-80 lg:w-96 lg:h-96"
        >
            <!-- Rotating Glow Ring -->
        <Motion
          :animate="{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }"
          :transition="{ 
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, repeatType: 'reverse' }
          }"
          class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500  to-purple-500 opacity-60"
        />

          <!-- Glass Container -->
          <Motion
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ delay: 0.5, duration: 1 }"
            class="relative w-72 h-72 lg:w-80 lg:h-80 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-full flex items-center justify-center shadow-2xl"
          >
            <!-- Profile Image -->
            <Motion
              :whileHover="{ scale: 1.05, rotate: 5 }"
              :transition="{ type: 'spring', stiffness: 300 }"
              class="w-64 h-64 lg:w-72 rounded-full overflow-hidden relative cursor-pointer"
            >
              <div
                class="w-full h-full bg-gradient-to-br from-purple-400 via-pink-500 to-indigo-600 flex items-center justify-center text-6xl text-white"
              >
                <!-- Profile Image -->
                <img
                  src="/images/me-banner.png"
                  alt="Keo Yinyong - Web Developer and UI/UX Designer professional headshot"
                  class="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 object-cover rounded-full z-10"
                  loading="eager"
                />
              </div>
            </Motion>
          </Motion>

          <!-- Orbiting Tech Icons -->
          <Motion
            v-for="(tech, index) in techStack"
            :key="`tech-${index}`"
            :initial="{ opacity: 0, scale: 0 }"
            :animate="{
              opacity: 1,
              scale: 1,
              rotate: 360,
            }"
            :transition="{
              opacity: { delay: 1 + index * 0.1 },
              scale: { delay: 1 + index * 0.1, type: 'spring' },
              rotate: {
                duration: 15 + index * 2,
                repeat: Infinity,
                ease: 'linear',
              },
            }"
            :style="{
              '--orbit-radius': tech.radius + 'px',
              '--start-angle': tech.startAngle + 'deg',
            }"
            class="absolute tech-icon"
          >
            <Motion
              :whileHover="{
                scale: 1.5,
                rotate: 20,
                filter: 'brightness(1.5)',
              }"
              :transition="{ type: 'spring', stiffness: 400 }"
              :style="{ color: tech.color }"
              class="text-2xl cursor-pointer"
            >
              <i :class="tech.icon"></i>
            </Motion>
          </Motion>

          <!-- Floating Particles -->
          <Motion
            v-for="particle in particles"
            :key="`particle-${particle.id}`"
            :initial="{
              opacity: 0,
              scale: 0,
              x: 0,
              y: 0,
            }"
            :animate="{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: particle.x,
              y: particle.y,
            }"
            :transition="{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }"
            :class="particle.class"
            class="absolute rounded-full"
          />
        </Motion>
      </div>

      <!-- Floating Decorative Elements -->
      <div
        class="absolute -top-8 -right-1 sm:-top-12 sm:-right-2 lg:-top-16 lg:-right-2 w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-400 rounded-full animate-pulse"
      ></div>
      <div
        class="absolute -top-4 -right-1 sm:-top-6 sm:-right-2 lg:-top-8 lg:-right-2 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-blue-400 rounded-full animate-pulse"
      ></div>
      <div
        class="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-pulse delay-300"
      ></div>
    </div>

    <!-- Text Content Section -->
    <div
      data-aos="fade-left"
      class="flex-1 text-center lg:text-left order-2 lg:order-2 max-w-2xl"
    >
      <!-- Greeting Animation -->
      <Motion
        :initial="{ opacity: 0, x: -50 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ delay: 0.3, duration: 0.8 }"
        class="mb-6"
      >
        <Motion
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ delay: 0.5 }"
          class="text-purple-300 text-xl mb-2"
        >
          Hey there, I'm,
        </Motion>

        <Motion
          :initial="{ opacity: 0, scale: 0.5 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{
            delay: 0.7,
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }"
          class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
        >
          {{ name }}
        </Motion>
      </Motion>

      <!-- Role -->
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.9, duration: 0.8 }"
        class="text-white text-2xl lg:text-3xl font-semibold"
      >
        {{ role }}
      </Motion>

      <!-- Main Headline with Typewriter Effect -->
      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ delay: 1.1 }"
        class="text-white text-4xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
      >
        <Motion
          v-for="(word, index) in headlineWords"
          :key="`word-${index}`"
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            delay: 1.2 + index * 0.1,
            duration: 0.6,
            type: 'spring',
          }"
          :class="word.class"
          class="inline-block mr-2"
        >
          {{ word.text }}
        </Motion>
      </Motion>

      <!-- Description -->
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 1.8, duration: 0.8 }"
        class="text-gray-300 text-lg lg:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
      >
        {{ description }}
      </Motion>

      <!-- Social Links -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 2, duration: 0.8 }"
        class="flex justify-center lg:justify-start gap-6 mb-12"
      >
        <Motion
          v-for="(social, index) in socialLinks"
          :key="social.name"
          :initial="{ opacity: 0, scale: 0 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{
            delay: 2.2 + index * 0.1,
            type: 'spring',
            stiffness: 300,
          }"
          :whileHover="{
            scale: 1.2,
            rotateY: 180,
            boxShadow: `0 10px 30px ${social.color}40`,
          }"
          :whileTap="{ scale: 0.95 }"
          :style="{ '--social-color': social.color }"
          class="social-link w-16 h-16 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer"
          @click="openLink(social.url)"
        >
          <i :class="social.icon" class="text-xl"></i>
        </Motion>
      </Motion>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { Motion } from "motion-v";
  import { ref, onMounted } from "vue";

  // Component Props
  interface TechItem {
    name: string;
    icon: string;
    color: string;
    radius: number;
    startAngle: number;
  }

  interface SocialLink {
    name: string;
    icon: string;
    url: string;
    color: string;
  }

  const props = defineProps<{
    name?: string;
    role?: string;
    description?: string;
    ctaText?: string;
    socialLinks?: SocialLink[];
    techStack?: TechItem[];
  }>();

  // Default values
  const name = props.name || "Yinyong";
  const role = props.role || "Web Developer";
  const description =
    props.description ||
    "I'm a passionate creator who transforms ideas into stunning visual experiences. Through innovative design and cutting-edge technology, I bring digital visions to life that captivate and engage audiences.";

  const headlineWords = [
    { text: "Crafting Digital", class: "block text-3xl lg:text-5xl xl:text-6xl" },
    {
      text: "Experiences",
      class:
        "bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent",
    },
    { text: "That", class: "text-3xl lg:text-5xl xl:text-6xl text-gray-300" },
    {
      text: "Inspire",
      class: "text-3xl lg:text-5xl xl:text-6xl text-gray-300",
    },
  ];

  // Tech Stack with orbital positions
  const techStack = props.techStack || [
    {
      name: "JavaScript",
      icon: "fab fa-js-square",
      color: "#F7DF1E",
      radius: 160,
      startAngle: 0,
    },
    {
      name: "Vue.js",
      icon: "fab fa-vuejs",
      color: "#4FC08D",
      radius: 180,
      startAngle: 45,
    },
    {
      name: "Node.js",
      icon: "fab fa-node-js",
      color: "#339933",
      radius: 200,
      startAngle: 135,
    },
    {
      name: "Python",
      icon: "fab fa-python",
      color: "#3776AB",
      radius: 160,
      startAngle: 180,
    },
    {
      name: "CSS3",
      icon: "fab fa-css3-alt",
      color: "#1572B6",
      radius: 180,
      startAngle: 225,
    },
    {
      name: "HTML5",
      icon: "fab fa-html5",
      color: "#E34F26",
      radius: 160,
      startAngle: 270,
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      color: "#181717",
      radius: 200,
      startAngle: 315,
    },
    {
      name: "TypeScript",
      icon: "fab fa-js-square",
      color: "#007ACC",
      radius: 180,
      startAngle: 350,
    },
  ];

  const socialLinks = props.socialLinks || [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/yong.kawaii",
      color: "#1877F2",
    },
    {
      name: "Telegram",
      icon: "fab fa-telegram-plane",
      url: "https://t.me/yong_24",
      color: "#0088CC",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/keo-yinyong-396277330/",
      color: "#0A66C2",
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/YONGKyy",
      color: "#000000",
    },
  ];

  const openLink = (url: string) => {
    window.open(url, "_blank");
};

  const particles = [
  { id: 1, x: [0, 100, -50, 0], y: [0, -80, -120, 0], duration: 6, delay: 0, class: 'w-3 h-3 bg-purple-400' },
  { id: 2, x: [0, -80, 60, 0], y: [0, -60, -100, 0], duration: 8, delay: 1, class: 'w-2 h-2 bg-pink-400' },
  { id: 3, x: [0, 120, -80, 0], y: [0, -40, -80, 0], duration: 7, delay: 2, class: 'w-4 h-4 bg-indigo-400' },
  { id: 4, x: [0, -60, 100, 0], y: [0, -100, -60, 0], duration: 9, delay: 3, class: 'w-2 h-2 bg-cyan-400' }
]


</script>

<style scoped>
  .tech-icon {
    transform-origin: var(--orbit-radius) center;
    animation: orbit linear infinite;
    left: 50%;
    top: 50%;
    margin-left: calc(var(--orbit-radius) * -1);
    margin-top: -12px;
    transform: rotate(var(--start-angle)) translateX(var(--orbit-radius))
      rotate(calc(var(--start-angle) * -1));
  }

  @keyframes orbit {
    from {
      transform: rotate(var(--start-angle)) translateX(var(--orbit-radius))
        rotate(calc(var(--start-angle) * -1));
    }
    to {
      transform: rotate(calc(var(--start-angle) + 360deg))
        translateX(var(--orbit-radius))
        rotate(calc((var(--start-angle) + 360deg) * -1));
    }
  }

  .social-link {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    color: var(--social-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .social-link:hover {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1)
    );
    border-color: var(--social-color);
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #9333ea, #3b82f6);
    border-radius: 3px;
  }
</style>
