<script setup lang="ts">
import { computed } from 'vue';

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const skills = [
  {
    title: "HTML5",
    subtitle: "with CSS3",
    icons: [
      { class: "fab fa-html5", bg: "from-orange-500 to-red-600" },
      { class: "fab fa-css3", bg: "from-blue-500 to-cyan-600" },
    ],
    gradient: "from-purple-900 via-indigo-900 to-black",
    lightGradient: "from-orange-100 via-blue-100 to-purple-50",
    aos: "fade-right",
  },
  {
    title: "JavaScript",
    subtitle: "",
    icons: [
      { class: "fab fa-js", bg: "from-yellow-500 to-orange-600", circle: true },
    ],
    gradient: "from-blue-900 via-purple-900 to-black",
    lightGradient: "from-yellow-100 via-orange-50 to-blue-50",
    aos: "fade-left",
  },
  {
    title: "Vue3",
    subtitle: "with Tailwind CSS",
    icons: [
      { class: "fab fa-vuejs", bg: "from-green-500 to-emerald-600" },
      { svg: true, bg: "from-blue-500 to-cyan-600" },
    ],
    gradient: "from-pink-900 via-violet-900 to-black",
    lightGradient: "from-green-100 via-emerald-50 to-cyan-50",
    aos: "fade-right",
  },
  {
    title: "Nuxt.js",
    subtitle: "with Tailwind CSS",
    icons: [
      { img: "/images/nuxt.svg", bg: "from-green-800 to-emerald-500" },
      { svg: true, bg: "from-blue-500 to-cyan-600" },
    ],
    gradient: "from-green-900 via-teal-900 to-blue-900",
    lightGradient: "from-green-100 via-teal-50 to-blue-50",
    aos: "fade-up",
  },
  {
    title: "PHP",
    subtitle: "with Laravel",
    icons: [
      { class: "fab fa-php", bg: "from-indigo-500 to-blue-600" },
      { class: "fab fa-laravel", bg: "from-red-500 to-orange-600" },
    ],
    gradient: "from-indigo-900 via-blue-900 to-black",
    lightGradient: "from-indigo-100 via-blue-50 to-purple-50",
    aos: "fade-left",
  },
  {
    title: "MySQL",
    subtitle: "",
    icons: [
      {
        class: "fas fa-database",
        bg: "from-teal-500 to-cyan-600",
        circle: true,
      },
    ],
    gradient: "from-teal-900 via-cyan-900 to-black",
    lightGradient: "from-teal-100 via-cyan-50 to-blue-50",
    aos: "fade-up",
  },
  {
    title: "GitHub",
    subtitle: "Version Control",
    icons: [
      { class: "fab fa-github", bg: "from-gray-600 to-slate-700" },
      { class: "fab fa-git-alt", bg: "from-red-500 to-orange-600" },
    ],
    gradient: "from-gray-900 via-slate-900 to-black",
    lightGradient: "from-gray-200 via-slate-100 to-blue-50",
    aos: "fade-left",
  },
];
</script>

<template>
  <section class="mb-20 w-full max-w-6xl px-4 sm:px-6">
    <!-- Section Header -->
    <Motion
      id="skills"
      :initial="{ opacity: 0, scale: 0.8 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
      class="flex items-center gap-4 mb-12 justify-center lg:justify-start"
    >
      <div
        data-aos="fade-left"
        :class="[
          'h-px w-12 bg-gradient-to-r from-transparent',
          isDark ? 'to-purple-500' : 'to-blue-600 opacity-70'
        ]"
      ></div>
      <span
        data-aos="fade-down"
        :class="[
          'uppercase tracking-wider text-sm md:text-lg font-semibold',
          isDark ? 'text-purple-400' : 'text-blue-600'
        ]"
      >
        Knowledge and Skills
      </span>
      <div
        data-aos="fade-right"
        :class="[
          'h-px flex-1 bg-gradient-to-r to-transparent max-w-xs',
          isDark ? 'from-purple-500' : 'from-blue-600 opacity-70'
        ]"
      ></div>
    </Motion>
  
    <!-- Skills Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        :data-aos="skill.aos"
        class="relative rounded-2xl overflow-hidden p-px group hover:scale-105 transition-transform duration-500"
      >
        <!-- Animated Background Glow -->
        <div
          class="absolute inset-0 animate-[pulse_6s_ease-in-out_infinite] blur-xl z-0"
          :class="[
            isDark
              ? `bg-gradient-to-br ${skill.gradient} opacity-60`
              : `bg-gradient-to-br ${skill.lightGradient} opacity-40`
          ]"
        ></div>

        <!-- Card Content -->
        <div
          :class="[
            'relative z-10 backdrop-blur-3xl border rounded-2xl p-8 transition-all duration-500',
            isDark
              ? 'bg-white/5 border-white/25 hover:bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.2)]'
              : 'bg-white/80 border-slate-300/40 hover:bg-white/95 shadow-xl hover:shadow-2xl'
          ]"
        >
          <!-- Icons -->
          <div class="flex items-center justify-center mb-6 space-x-2">
            <template v-for="(icon, i) in skill.icons" :key="i">
              <!-- Icon Container -->
              <div
                :class="[
                  icon.circle
                    ? 'w-14 h-14 rounded-full'
                    : 'w-12 h-12 rounded-xl',
                  `bg-gradient-to-tr ${icon.bg}`,
                  'flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300',
                ]"
              >
                <!-- Font Awesome Icon -->
                <i
                  v-if="icon.class"
                  :class="[icon.class, 'text-white text-2xl']"
                ></i>
                
                <!-- Custom Image -->
                <img 
                  v-else-if="icon.img" 
                  :src="icon.img" 
                  alt="Nuxt.js"
                  class="w-6 h-6" 
                />
                
                <!-- Tailwind CSS SVG -->
                <svg
                  v-else-if="icon.svg"
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
                  />
                </svg>
              </div>

              <!-- Plus Sign Between Icons -->
              <div
                v-if="i < skill.icons.length - 1"
                :class="[
                  'text-lg font-bold',
                  isDark ? 'text-white/60' : 'text-gray-600/70'
                ]"
              >
                +
              </div>
            </template>
          </div>

          <!-- Title -->
          <h3 
            :class="[
              'text-2xl font-semibold mb-2 text-center',
              isDark ? 'text-white' : 'text-slate-900'
            ]"
          >
            {{ skill.title }}
          </h3>

          <!-- Subtitle -->
          <p 
            v-if="skill.subtitle" 
            :class="[
              'text-sm font-medium text-center',
              isDark ? 'text-white/70' : 'text-gray-600'
            ]"
          >
            {{ skill.subtitle }}
          </p>

          <!-- Decorative Bottom Line -->
          <div class="mt-6 pt-4 border-t" :class="[
            isDark ? 'border-white/10' : 'border-slate-300/30'
          ]">
            <div class="flex items-center justify-center gap-2">
              <div 
                class="w-2 h-2 rounded-full"
                :class="[isDark ? 'bg-purple-500' : 'bg-blue-500']"
              ></div>
              <span 
                :class="[
                  'text-xs uppercase tracking-wider font-semibold',
                  isDark ? 'text-purple-400' : 'text-blue-600'
                ]"
              >
                Proficient
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Summary Stats -->
    <!-- <div class="mt-16" data-aos="fade-up">
      <div
        :class="[
          'rounded-2xl overflow-hidden p-[1px]',
          isDark 
            ? 'bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20'
            : 'bg-gradient-to-r from-blue-300/30 via-purple-300/30 to-indigo-300/30'
        ]"
      >
        <div
          :class="[
            'backdrop-blur-3xl border rounded-2xl p-8',
            isDark
              ? 'bg-white/5 border-white/20'
              : 'bg-white/80 border-blue-300/40'
          ]"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div>
              <div 
                :class="[
                  'text-4xl font-bold mb-2',
                  isDark
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
                ]"
              >
                7+
              </div>
              <div :class="[
                'text-sm font-medium',
                isDark ? 'text-gray-400' : 'text-gray-600'
              ]">
                Core Technologies
              </div>
            </div>

            
            <div>
              <div 
                :class="[
                  'text-4xl font-bold mb-2',
                  isDark
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
                ]"
              >
                2+
              </div>
              <div :class="[
                'text-sm font-medium',
                isDark ? 'text-gray-400' : 'text-gray-600'
              ]">
                Years Experience
              </div>
            </div>

            
            <div>
              <div 
                :class="[
                  'text-4xl font-bold mb-2',
                  isDark
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
                ]"
              >
                50+
              </div>
              <div :class="[
                'text-sm font-medium',
                isDark ? 'text-gray-400' : 'text-gray-600'
              ]">
                Projects Built
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Additional Skills Tags -->
    <!-- <div class="mt-12" data-aos="fade-up">
      <h3 
        :class="[
          'text-2xl font-bold mb-6 text-center',
          isDark ? 'text-white' : 'text-slate-900'
        ]"
      >
        Additional Skills & Tools
      </h3>
      <div class="flex flex-wrap gap-3 justify-center">
        <span
          v-for="(tool, idx) in [
            'Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 
            'REST API', 'Responsive Design', 'Agile', 'SQL Server'
          ]"
          :key="idx"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm transition-all cursor-default hover:scale-105',
            isDark
              ? 'bg-white/5 border-white/10 text-gray-300 hover:border-purple-500/50 hover:bg-white/10'
              : 'bg-blue-100/60 border-blue-300/50 text-gray-700 hover:border-blue-500/60 hover:bg-blue-200/70'
          ]"
        >
          {{ tool }}
        </span>
      </div>
    </div> -->

    <!-- Call to Action -->
    <!-- <div class="mt-12 text-center" data-aos="fade-up">
      <p :class="[
        'text-lg mb-6',
        isDark ? 'text-gray-300' : 'text-gray-700'
      ]">
        Want to see these skills in action?
      </p>
      <a href="#projects">
        <button
          :class="[
            'px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105',
            isDark
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
              : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'
          ]"
        >
          View My Projects
        </button>
      </a>
    </div> -->
  </section>
</template>

<style scoped>
/* Animations remain the same */
@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
}

/* Smooth transitions for theme switching */
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}

/* Prevent transition on transform and opacity for performance */
.group:hover * {
  transition-property: transform, opacity, background-color, border-color, color;
}

/* Focus states for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid;
  outline-offset: 2px;
}

button:focus-visible {
  outline-color: #a855f7;
}

/* Light mode focus */
:not(.dark) button:focus-visible {
  outline-color: #2563eb;
}
</style>