<script setup lang="ts">
  import { computed } from 'vue';
  const colorMode = useColorMode();
  const isDarkMode = computed(() => colorMode.value === "dark");
</script>

<template>
  <section class="mb-20 w-full max-w-6xl px-2 sm:px-4 md:px-6">
    <div
      id="testimonials"
      data-aos="fade-down"
      class="flex items-center gap-4 mb-12 justify-center lg:justify-start"
    >
      <!-- Section Label -->
      <div
        class="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"
        :class="{ 'opacity-50': !isDarkMode }"
      ></div>
      <span
        class="text-purple-400 uppercase tracking-wider text-sm md:text-lg font-semibold"
        :class="{ 'text-blue-600': !isDarkMode }"
      >
        Testimonials & Achievements
      </span>
      <div
        class="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent max-w-xs"
        :class="{ 'opacity-50': !isDarkMode }"
      ></div>
    </div>

    <!-- Achievements Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" data-aos="fade-up">
      <div class="relative rounded-xl overflow-hidden p-[1px] group">
        <div
          class="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[20px] z-0"
        ></div>
        <div
          class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-xl p-6 text-center"
        >
          <div class="text-3xl font-bold text-purple-300 mb-2">5000+</div>
          <div class="text-gray-300 text-sm">Users Served</div>
        </div>
      </div>

      <div class="relative rounded-xl overflow-hidden p-[1px] group">
        <div
          class="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[20px] z-0"
        ></div>
        <div
          class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-xl p-6 text-center"
        >
          <div class="text-3xl font-bold text-blue-300 mb-2">15+</div>
          <div class="text-gray-300 text-sm">Projects Completed</div>
        </div>
      </div>

      <div class="relative rounded-xl overflow-hidden p-[1px] group">
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-900 animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[20px] z-0"
        ></div>
        <div
          class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-xl p-6 text-center"
        >
          <div class="text-3xl font-bold text-emerald-300 mb-2">3+</div>
          <div class="text-gray-300 text-sm">Years Experience</div>
        </div>
      </div>

      <div class="relative rounded-xl overflow-hidden p-[1px] group">
        <div
          class="absolute inset-0 bg-gradient-to-br from-orange-900 to-red-900 animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[20px] z-0"
        ></div>
        <div
          class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-xl p-6 text-center"
        >
          <div class="text-3xl font-bold text-orange-300 mb-2">100%</div>
          <div class="text-gray-300 text-sm">Client Satisfaction</div>
        </div>
      </div>
    </div>

    <!-- Testimonials -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Testimonial 1 -->
      <div
        data-aos="fade-right"
        class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-[1.02] transition-all duration-500"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 animate-[pulse_8s_ease-in-out_infinite] opacity-70 blur-[30px] z-0"
        ></div>

        <div
          class="relative z-10 bg-white/8 backdrop-blur-3xl border border-white/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(255,255,255,0.15)]"
        >
          <!-- Quote Icon -->
          <div class="mb-4">
            <svg
              class="w-8 h-8 text-purple-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>
          </div>

          <p class="text-purple-100 text-lg leading-relaxed mb-6">
            "Yinyong delivered an exceptional web application for our
            university. His attention to detail and technical expertise made the
            entire process smooth and professional."
          </p>

          <div class="flex items-center space-x-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center"
            >
              <span class="text-white font-bold text-lg">DR</span>
            </div>
            <div>
              <h4 class="text-white font-semibold">Dr. Rachana</h4>
              <p class="text-purple-300 text-sm">
                IT Director, Norton University
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial 2 -->
      <div
        data-aos="fade-left"
        class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-[1.02] transition-all duration-500"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900 animate-[pulse_8s_ease-in-out_infinite] opacity-70 blur-[30px] z-0"
        ></div>

        <div
          class="relative z-10 bg-white/8 backdrop-blur-3xl border border-white/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(255,255,255,0.15)]"
        >
          <!-- Quote Icon -->
          <div class="mb-4">
            <svg
              class="w-8 h-8 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>
          </div>

          <p class="text-emerald-100 text-lg leading-relaxed mb-6">
            "Working with Yinyong was a fantastic experience. He created a
            beautiful, responsive website that perfectly captured our brand
            vision. Highly recommended!"
          </p>

          <div class="flex items-center space-x-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center"
            >
              <span class="text-white font-bold text-lg">SM</span>
            </div>
            <div>
              <h4 class="text-white font-semibold">Sarah Miller</h4>
              <p class="text-emerald-300 text-sm">CEO, TechStart Solutions</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial 3 -->
      <div
        data-aos="fade-right"
        class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-[1.02] transition-all duration-500"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 animate-[pulse_8s_ease-in-out_infinite] opacity-70 blur-[30px] z-0"
        ></div>

        <div
          class="relative z-10 bg-white/8 backdrop-blur-3xl border border-white/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(255,255,255,0.15)]"
        >
          <!-- Quote Icon -->
          <div class="mb-4">
            <svg
              class="w-8 h-8 text-orange-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>
          </div>

          <p class="text-orange-100 text-lg leading-relaxed mb-6">
            "Incredible work! The e-commerce platform Yinyong built for us
            exceeded all expectations. The performance and user experience are
            outstanding."
          </p>

          <div class="flex items-center space-x-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center"
            >
              <span class="text-white font-bold text-lg">MJ</span>
            </div>
            <div>
              <h4 class="text-white font-semibold">Michael Johnson</h4>
              <p class="text-orange-300 text-sm">
                Founder, Digital Commerce Co.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial 4 -->
      <div
        data-aos="fade-left"
        class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-[1.02] transition-all duration-500"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900 animate-[pulse_8s_ease-in-out_infinite] opacity-70 blur-[30px] z-0"
        ></div>

        <div
          class="relative z-10 bg-white/8 backdrop-blur-3xl border border-white/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(255,255,255,0.15)]"
        >
          <!-- Quote Icon -->
          <div class="mb-4">
            <svg
              class="w-8 h-8 text-violet-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>
          </div>

          <p class="text-violet-100 text-lg leading-relaxed mb-6">
            "Professional, creative, and reliable. Yinyong transformed our ideas
            into a stunning web application. His communication throughout the
            project was excellent."
          </p>

          <div class="flex items-center space-x-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-violet-500 to-pink-600 rounded-full flex items-center justify-center"
            >
              <span class="text-white font-bold text-lg">AL</span>
            </div>
            <div>
              <h4 class="text-white font-semibold">Anna Lee</h4>
              <p class="text-violet-300 text-sm">
                Project Manager, InnovateTech
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Certifications/Awards -->
    <div class="mt-16" data-aos="fade-up">
      <h4 class="text-white text-xl font-bold mb-8 text-center">
        Certifications & Recognition
      </h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="relative rounded-xl overflow-hidden p-[1px] group">
          <div
            class="absolute inset-0 bg-gradient-to-br from-yellow-900 to-orange-900 animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[20px] z-0"
          ></div>
          <div
            class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-xl p-6 text-center"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.77L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z"
                />
              </svg>
            </div>
            <h5 class="text-white font-semibold mb-2">
              Vue.js Certified Developer
            </h5>
            <p class="text-gray-400 text-sm">
              Advanced Vue.js Development Certification
            </p>
          </div>
        </div>

        <div class="relative rounded-xl overflow-hidden p-[1px] group">
          <div
            class="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[20px] z-0"
          ></div>
          <div
            class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-xl p-6 text-center"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.77L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z"
                />
              </svg>
            </div>
            <h5 class="text-white font-semibold mb-2">Laravel Expert</h5>
            <p class="text-gray-400 text-sm">
              PHP Laravel Framework Specialist
            </p>
          </div>
        </div>

        <div class="relative rounded-xl overflow-hidden p-[1px] group">
          <div
            class="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-900 animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[20px] z-0"
          ></div>
          <div
            class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-xl p-6 text-center"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.77L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z"
                />
              </svg>
            </div>
            <h5 class="text-white font-semibold mb-2">UI/UX Design Award</h5>
            <p class="text-gray-400 text-sm">Best Portfolio Design 2024</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
