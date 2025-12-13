<script setup lang="ts">
  import { computed } from 'vue';
  const colorMode = useColorMode();
  const isDarkMode = computed(() => colorMode.value === "dark");
</script>

<template>
  <section class="mb-20 w-full max-w-6xl px-2 sm:px-4 md:px-6">
    <div
      id="projects"
      data-aos="fade-down"
      class="flex items-center gap-4 mb-12 justify-center lg:justify-start"
    >
      <!-- Section Label -->
      <div
        class="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"
        :class="{ 'opacity-50': colorMode.value === 'light' }"
      ></div>
      <span
        class="text-purple-400 uppercase tracking-wider text-sm md:text-lg font-semibold"
        :class="{ 'text-blue-600': colorMode.value === 'light' }"
      >
        Featured Projects
      </span>
      <div
        class="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent max-w-xs"
        :class="{ 'opacity-50': colorMode.value === 'light' }"
      ></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 md:gap-6">
      <!-- Project Card 1: Norton University Portal -->
      <div
        data-aos="fade-right"
        class="group relative bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/20 md:hover:border-purple-400/40 transition-all duration-500 md:hover:transform md:hover:scale-105 overflow-hidden"
      >
        <!-- Project Image -->
        <div class="relative mb-4 rounded-lg overflow-hidden">
          <img
            src="/images/pf1.jpg"
            alt="Norton University Student Portal"
            class="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"
          ></div>
        </div>

        <div class="flex items-start gap-3 sm:gap-4 mb-4">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
              />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h4
              class="text-white font-semibold text-sm sm:text-base mb-2 break-words"
            >
              Norton University Student Portal
            </h4>
            <button
              class="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      <!-- Project Card 2 -->
      <div
        data-aos="fade-left"
        class="group relative bg-gradient-to-br from-orange-800/50 to-red-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-orange-500/20 md:hover:border-orange-400/40 transition-all duration-300 md:hover:transform md:hover:scale-105"
      >
        <div class="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2Z"
              />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h4
              class="text-white font-semibold text-sm sm:text-base mb-1 break-words"
            >
              CIB on the Mobile
            </h4>
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
          </div>
        </div>
        <button
          class="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
        >
          LEARN MORE
        </button>
      </div>

      <!-- Project Card 3 -->
      <div
        data-aos="fade-right"
        class="group relative bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-500/20 md:hover:border-blue-400/40 transition-all duration-300 md:hover:transform md:hover:scale-105"
      >
        <div class="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
              />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h4
              class="text-white font-semibold text-sm sm:text-base mb-1 break-words"
            >
              CIB on the Mobile
            </h4>
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
          </div>
        </div>
        <button
          class="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
        >
          LEARN MORE
        </button>
      </div>

      <!-- Project Card 4 -->
      <div
        data-aos="fade-left"
        class="group relative bg-gradient-to-br from-violet-800/50 to-pink-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-violet-500/20 md:hover:border-violet-400/40 transition-all duration-300 md:hover:transform md:hover:scale-105"
      >
        <div class="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
              />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h4
              class="text-white font-semibold text-sm sm:text-base mb-1 break-words"
            >
              CIB on the Mobile
            </h4>
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
          </div>
        </div>
        <button
          class="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  </section>
</template>
