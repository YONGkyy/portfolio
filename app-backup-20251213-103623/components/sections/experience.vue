<script setup lang="ts">
import { computed } from 'vue';

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");
</script>

<template>
  <section class="mb-20 w-full max-w-6xl px-4 sm:px-6">
    <!-- Section Header -->
    <Motion
      id="experience"
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
        Work Experience
      </span>
      <div
        data-aos="fade-right"
        :class="[
          'h-px flex-1 bg-gradient-to-r to-transparent max-w-xs',
          isDark ? 'from-purple-500' : 'from-blue-600 opacity-70'
        ]"
      ></div>
    </Motion>

    <!-- Main Experience Card -->
    <div class="mb-12">
      <div
        data-aos="fade-up"
        class="relative rounded-3xl overflow-hidden p-[2px] group hover:scale-[1.02] transition-all duration-700"
      >
        <!-- Enhanced Galaxy Background -->
        <div
          :class="[
            'absolute inset-0 animate-[pulse_8s_ease-in-out_infinite] blur-[30px] z-0',
            isDark
              ? 'bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 opacity-70'
              : 'bg-gradient-to-br from-blue-200 via-purple-200 to-indigo-200 opacity-50'
          ]"
        ></div>

        <!-- Premium Glass Card -->
        <div
          :class="[
            'relative z-10 backdrop-blur-3xl border rounded-3xl p-10 transition-all duration-700',
            isDark
              ? 'bg-white/8 border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.15)]'
              : 'bg-white/90 border-blue-300/50 shadow-2xl'
          ]"
        >
          <!-- Header with Company Logo & Duration -->
          <div class="flex items-start justify-between mb-8 flex-wrap gap-4">
            <div class="flex items-center space-x-4">
              <div
                class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center shadow-2xl animate-[float_6s_ease-in-out_infinite]"
              >
                <i class="fas fa-university text-white text-2xl"></i>
              </div>
              <div>
                <h3
                  :class="[
                    'text-3xl font-bold mb-1',
                    isDark ? 'text-white' : 'text-slate-900'
                  ]"
                >
                  Web Developer
                </h3>
                <p
                  :class="[
                    'text-lg font-medium',
                    isDark ? 'text-purple-200' : 'text-blue-600'
                  ]"
                >
                  Norton University
                </p>
              </div>
            </div>
            <div class="text-right">
              <div
                :class="[
                  'rounded-full px-4 py-2 border',
                  isDark
                    ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border-purple-300/30'
                    : 'bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-400/50'
                ]"
              >
                <span
                  :class="[
                    'text-sm font-semibold',
                    isDark ? 'text-purple-200' : 'text-blue-700'
                  ]"
                >
                  2023 - present
                </span>
              </div>
              <p
                :class="[
                  'text-sm mt-1',
                  isDark ? 'text-purple-300' : 'text-blue-600'
                ]"
              >
                2 Years
              </p>
            </div>
          </div>

          <!-- Job Description -->
          <div class="mb-8">
            <p
              :class="[
                'text-lg leading-relaxed mb-4',
                isDark ? 'text-purple-100' : 'text-gray-700'
              ]"
            >
              Designed and developed modern, responsive web applications for
              academic and administrative purposes, serving thousands of
              students and faculty members at Norton University.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div class="flex items-center space-x-3">
                <div
                  :class="[
                    'w-2 h-2 rounded-full',
                    isDark ? 'bg-purple-400' : 'bg-blue-500'
                  ]"
                ></div>
                <span
                  :class="[
                    'text-sm',
                    isDark ? 'text-purple-200' : 'text-gray-700'
                  ]"
                >
                  Student Management System
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <div
                  :class="[
                    'w-2 h-2 rounded-full',
                    isDark ? 'bg-indigo-400' : 'bg-indigo-500'
                  ]"
                ></div>
                <span
                  :class="[
                    'text-sm',
                    isDark ? 'text-purple-200' : 'text-gray-700'
                  ]"
                >
                  Course Registration Portal
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <div
                  :class="[
                    'w-2 h-2 rounded-full',
                    isDark ? 'bg-blue-400' : 'bg-blue-600'
                  ]"
                ></div>
                <span
                  :class="[
                    'text-sm',
                    isDark ? 'text-purple-200' : 'text-gray-700'
                  ]"
                >
                  Academic Records System
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <div
                  :class="[
                    'w-2 h-2 rounded-full',
                    isDark ? 'bg-cyan-400' : 'bg-cyan-600'
                  ]"
                ></div>
                <span
                  :class="[
                    'text-sm',
                    isDark ? 'text-purple-200' : 'text-gray-700'
                  ]"
                >
                  Faculty Dashboard
                </span>
              </div>
            </div>
          </div>

          <!-- Key Achievements -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div
              :class="[
                'rounded-xl p-6 border',
                isDark
                  ? 'bg-white/5 border-white/20'
                  : 'bg-blue-50/50 border-blue-300/40'
              ]"
            >
              <div class="flex items-center mb-3">
                <i
                  :class="[
                    'fas fa-code text-xl mr-3',
                    isDark ? 'text-purple-400' : 'text-blue-600'
                  ]"
                ></i>
                <h4
                  :class="[
                    'font-semibold',
                    isDark ? 'text-white' : 'text-slate-900'
                  ]"
                >
                  Frontend Development
                </h4>
              </div>
              <p
                :class="[
                  'text-sm',
                  isDark ? 'text-purple-200' : 'text-gray-700'
                ]"
              >
                Built responsive UIs using HTML, CSS, Tailwind CSS, Vue 3, and
                TypeScript
              </p>
            </div>

            <div
              :class="[
                'rounded-xl p-6 border',
                isDark
                  ? 'bg-white/5 border-white/20'
                  : 'bg-indigo-50/50 border-indigo-300/40'
              ]"
            >
              <div class="flex items-center mb-3">
                <i
                  :class="[
                    'fas fa-server text-xl mr-3',
                    isDark ? 'text-indigo-400' : 'text-indigo-600'
                  ]"
                ></i>
                <h4
                  :class="[
                    'font-semibold',
                    isDark ? 'text-white' : 'text-slate-900'
                  ]"
                >
                  Backend Integration
                </h4>
              </div>
              <p
                :class="[
                  'text-sm',
                  isDark ? 'text-purple-200' : 'text-gray-700'
                ]"
              >
                Developed APIs and database solutions using Laravel and SQL
                Server
              </p>
            </div>

            <div
              :class="[
                'rounded-xl p-6 border',
                isDark
                  ? 'bg-white/5 border-white/20'
                  : 'bg-purple-50/50 border-purple-300/40'
              ]"
            >
              <div class="flex items-center mb-3">
                <i
                  :class="[
                    'fas fa-users text-xl mr-3',
                    isDark ? 'text-blue-400' : 'text-purple-600'
                  ]"
                ></i>
                <h4
                  :class="[
                    'font-semibold',
                    isDark ? 'text-white' : 'text-slate-900'
                  ]"
                >
                  User Experience
                </h4>
              </div>
              <p
                :class="[
                  'text-sm',
                  isDark ? 'text-purple-200' : 'text-gray-700'
                ]"
              >
                Improved user experience for 5,000+ students and faculty with
                modern web applications
              </p>
            </div>
          </div>

          <!-- Technologies Used -->
          <div class="mb-8">
            <h4
              :class="[
                'text-lg font-semibold mb-4',
                isDark ? 'text-white' : 'text-slate-900'
              ]"
            >
              Technologies Used
            </h4>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="tech in [
                  { name: 'HTML5', color: 'orange' },
                  { name: 'CSS3', color: 'blue' },
                  { name: 'Tailwind CSS', color: 'cyan' },
                  { name: 'Vue 3', color: 'green' },
                  { name: 'TypeScript', color: 'blue' },
                  { name: 'Laravel', color: 'red' },
                  { name: 'SQL Server', color: 'indigo' },
                  { name: 'GitHub', color: 'gray' },
                ]"
                :key="tech.name"
                :class="[
                  'px-3 py-1 rounded-full text-sm border',
                  isDark
                    ? `bg-${tech.color}-500/20 text-${tech.color}-200 border-${tech.color}-400/30`
                    : `bg-${tech.color}-100 text-${tech.color}-700 border-${tech.color}-300/50`
                ]"
              >
                {{ tech.name }}
              </span>
            </div>
          </div>

          <!-- Performance Metrics -->
          <div class="mb-8">
            <h4
              :class="[
                'text-lg font-semibold mb-4',
                isDark ? 'text-white' : 'text-slate-900'
              ]"
            >
              Key Achievements
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                :class="[
                  'rounded-lg p-4 border',
                  isDark
                    ? 'bg-white/5 border-white/10'
                    : 'bg-green-50/50 border-green-300/40'
                ]"
              >
                <div
                  :class="[
                    'text-2xl font-bold mb-1',
                    isDark ? 'text-green-400' : 'text-green-600'
                  ]"
                >
                  99.9%
                </div>
                <div
                  :class="[
                    'text-sm',
                    isDark ? 'text-purple-200' : 'text-gray-700'
                  ]"
                >
                  System Uptime
                </div>
              </div>
              <div
                :class="[
                  'rounded-lg p-4 border',
                  isDark
                    ? 'bg-white/5 border-white/10'
                    : 'bg-blue-50/50 border-blue-300/40'
                ]"
              >
                <div
                  :class="[
                    'text-2xl font-bold mb-1',
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  ]"
                >
                  40%
                </div>
                <div
                  :class="[
                    'text-sm',
                    isDark ? 'text-purple-200' : 'text-gray-700'
                  ]"
                >
                  Performance Boost
                </div>
              </div>
              <div
                :class="[
                  'rounded-lg p-4 border',
                  isDark
                    ? 'bg-white/5 border-white/10'
                    : 'bg-purple-50/50 border-purple-300/40'
                ]"
              >
                <div
                  :class="[
                    'text-2xl font-bold mb-1',
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  ]"
                >
                  5000+
                </div>
                <div
                  :class="[
                    'text-sm',
                    isDark ? 'text-purple-200' : 'text-gray-700'
                  ]"
                >
                  Active Users
                </div>
              </div>
            </div>
          </div>

          <!-- Action Button -->
          <div class="flex items-center justify-between flex-wrap gap-4">
            <div class="flex items-center flex-wrap gap-4">
              <div class="flex items-center space-x-2">
                <i
                  :class="[
                    'fas fa-map-marker-alt',
                    isDark ? 'text-purple-400' : 'text-blue-600'
                  ]"
                ></i>
                <span
                  :class="[
                    'text-sm',
                    isDark ? 'text-purple-200' : 'text-gray-700'
                  ]"
                >
                  Phnom Penh, Cambodia
                </span>
              </div>
              <div class="flex items-center space-x-2">
                <i
                  :class="[
                    'fas fa-briefcase',
                    isDark ? 'text-purple-400' : 'text-blue-600'
                  ]"
                ></i>
                <span
                  :class="[
                    'text-sm',
                    isDark ? 'text-purple-200' : 'text-gray-700'
                  ]"
                >
                  Full-time
                </span>
              </div>
              <div class="flex items-center space-x-2">
                <i
                  :class="[
                    'fas fa-calendar',
                    isDark ? 'text-purple-400' : 'text-blue-600'
                  ]"
                ></i>
                <span
                  :class="[
                    'text-sm',
                    isDark ? 'text-purple-200' : 'text-gray-700'
                  ]"
                >
                  2+ Years
                </span>
              </div>
            </div>
            <button
              :class="[
                'font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1',
                isDark
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white'
              ]"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Experience Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Freelance/Project Work -->
      <div
        data-aos="fade-right"
        class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
      >
        <div
          :class="[
            'absolute inset-0 animate-[pulse_6s_ease-in-out_infinite] blur-[24px] z-0',
            isDark
              ? 'bg-gradient-to-br from-emerald-900 via-teal-900 to-black opacity-60'
              : 'bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 opacity-50'
          ]"
        ></div>
        <div
          :class="[
            'relative z-10 backdrop-blur-3xl border rounded-2xl p-8 transition-all duration-500',
            isDark
              ? 'bg-white/5 border-white/25 shadow-[0_0_30px_rgba(255,255,255,0.2)]'
              : 'bg-white/90 border-emerald-300/40 shadow-xl'
          ]"
        >
          <div
            class="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg mb-6"
          >
            <i class="fas fa-laptop-code text-white text-xl"></i>
          </div>
          <h3
            :class="[
              'text-xl font-semibold mb-3',
              isDark ? 'text-white' : 'text-slate-900'
            ]"
          >
            Freelance Projects
          </h3>
          <p
            :class="[
              'text-sm leading-relaxed mb-6',
              isDark ? 'text-emerald-200' : 'text-gray-700'
            ]"
          >
            Developed custom websites and web applications for local businesses
            and startups.
          </p>
          <button
            :class="[
              'transition-colors font-semibold text-sm',
              isDark
                ? 'text-emerald-300 hover:text-emerald-100'
                : 'text-emerald-600 hover:text-emerald-700'
            ]"
          >
            VIEW PORTFOLIO
          </button>
        </div>
      </div>

      <!-- Education/Training -->
      <div
        data-aos="fade-left"
        class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
      >
        <div
          :class="[
            'absolute inset-0 animate-[pulse_6s_ease-in-out_infinite] blur-[24px] z-0',
            isDark
              ? 'bg-gradient-to-br from-amber-900 via-orange-900 to-black opacity-60'
              : 'bg-gradient-to-br from-amber-200 via-orange-200 to-yellow-200 opacity-50'
          ]"
        ></div>
        <div
          :class="[
            'relative z-10 backdrop-blur-3xl border rounded-2xl p-8 transition-all duration-500',
            isDark
              ? 'bg-white/5 border-white/25 shadow-[0_0_30px_rgba(255,255,255,0.2)]'
              : 'bg-white/90 border-amber-300/40 shadow-xl'
          ]"
        >
          <div
            class="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-lg mb-6"
          >
            <i class="fas fa-graduation-cap text-white text-xl"></i>
          </div>
          <h3
            :class="[
              'text-xl font-semibold mb-3',
              isDark ? 'text-white' : 'text-slate-900'
            ]"
          >
            Continuous Learning
          </h3>
          <p
            :class="[
              'text-sm leading-relaxed mb-6',
              isDark ? 'text-amber-200' : 'text-gray-700'
            ]"
          >
            Constantly updating skills with latest web technologies and
            development practices.
          </p>
          <button
            :class="[
              'transition-colors font-semibold text-sm',
              isDark
                ? 'text-amber-300 hover:text-amber-100'
                : 'text-amber-600 hover:text-amber-700'
            ]"
          >
            VIEW CERTIFICATES
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Smooth transitions */
* {
  transition-property: background-color, border-color, color, transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}

/* Focus states */
button:focus-visible {
  outline: 2px solid;
  outline-offset: 2px;
}

button:focus-visible {
  outline-color: #a855f7;
}

:not(.dark) button:focus-visible {
  outline-color: #2563eb;
}
</style>