<template>
  <section class="mb-20 w-full max-w-6xl px-2 sm:px-4 md:px-6">
    <Motion
      id="contact"
      :initial="{ opacity: 0, scale: 0.8 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
      class="flex items-center gap-4 mb-12 justify-center lg:justify-start"
    >
      <div
        data-aos="fade-left"
        class="h-px w-12"
        :class="{
          'bg-gradient-to-r from-transparent to-purple-500': isDarkMode,
          'bg-gradient-to-r from-transparent to-blue-600': !isDarkMode,
        }"
      ></div>
      <span
        data-aos="fade-down"
        :class="{
          'text-purple-400': isDarkMode,
          'text-blue-600': !isDarkMode,
        }"
        class="uppercase tracking-wider text-sm md:text-lg font-semibold"
      >
        Get In Touch
      </span>
      <div
        data-aos="fade-right"
        class="h-px flex-1 max-w-xs"
        :class="{
          'bg-gradient-to-r from-purple-500 to-transparent': isDarkMode,
          'bg-gradient-to-r from-blue-600 to-transparent': !isDarkMode,
        }"
      ></div>
    </Motion>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Contact Information -->
      <div data-aos="fade-right">
        <div class="relative rounded-2xl overflow-hidden p-[1px] group">
          <div
            class="absolute inset-0 bg-gradient-to-br from-lightAccent/20 via-indigo-200/20 to-blue-200/20 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900 animate-[pulse_8s_ease-in-out_infinite] opacity-70 blur-[30px] z-0"
          ></div>

          <div
            class="relative z-10 bg-lightCard/95 dark:bg-white/5 backdrop-blur-3xl border border-lightCardBorder dark:border-white/25 rounded-2xl p-8 shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <h4 class="text-lightText dark:text-white text-2xl font-bold mb-6">
              Let's Connect
            </h4>
            <p
              class="text-lightTextSecondary dark:text-purple-200 text-lg mb-8 leading-relaxed"
            >
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>

            <!-- Contact Details -->
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-lightAccent to-indigo-600 dark:from-purple-500 dark:to-indigo-600 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="text-lightText dark:text-white font-semibold text-start"
                  >
                    Email
                  </p>
                  <a
                    href="mailto:yongkeo9@gmail.com"
                    class="text-lightAccent dark:text-purple-300 hover:text-lightAccentHover dark:hover:text-purple-200 transition-colors"
                  >
                    yongkeo9@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="text-lightText dark:text-white font-semibold text-start"
                  >
                    Location
                  </p>
                  <p class="text-lightTextSecondary dark:text-purple-300">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-lightSuccess to-blue-600 dark:from-green-500 dark:to-blue-600 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4S20 7.59 20 12S16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="text-lightText dark:text-white font-semibold text-start"
                  >
                    Availability
                  </p>
                  <p class="text-lightSuccess dark:text-green-300">
                    Available for freelance
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div
              class="mt-8 pt-6 border-t border-lightCardBorder dark:border-white/20"
            >
              <p class="text-lightText dark:text-white font-semibold mb-4">
                Follow me on
              </p>
              <div class="flex space-x-4">
                <a
                  href="https://github.com/YONGKyy"
                  target="_blank"
                  class="w-10 h-10 bg-lightTextSecondary/20 dark:bg-gray-700 hover:bg-lightTextSecondary/30 dark:hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg
                    class="w-5 h-5 text-lightText dark:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/keo-yinyong-396277330/"
                  target="_blank"
                  class="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
                <a
                  href="https://t.me/yong_24"
                  target="_blank"
                  class="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <!-- <div data-aos="fade-left" class="space-y-6">
        <div class="relative rounded-2xl overflow-hidden p-[1px] group">
          <div class="absolute inset-0 bg-gradient-to-br from-lightAccent/10 via-teal-200/10 to-lightCard dark:from-emerald-900 dark:via-teal-900 dark:to-black animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0"></div>
          
          <div class="relative z-10 bg-lightCard/95 dark:bg-white/5 backdrop-blur-3xl border border-lightCardBorder dark:border-white/25 rounded-2xl p-8 shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <h4 class="text-lightText dark:text-white text-2xl font-bold mb-6">Send Message</h4>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-lightText dark:text-white font-medium mb-2">Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-lightCard dark:bg-white/10 border border-lightCardBorder dark:border-white/20 rounded-lg text-lightText dark:text-white placeholder-lightTextSecondary dark:placeholder-gray-400 focus:outline-none focus:border-lightAccent dark:focus:border-purple-400 focus:ring-2 focus:ring-lightAccent/20 dark:focus:ring-purple-400/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label class="block text-lightText dark:text-white font-medium mb-2">Email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 bg-lightCard dark:bg-white/10 border border-lightCardBorder dark:border-white/20 rounded-lg text-lightText dark:text-white placeholder-lightTextSecondary dark:placeholder-gray-400 focus:outline-none focus:border-lightAccent dark:focus:border-purple-400 focus:ring-2 focus:ring-lightAccent/20 dark:focus:ring-purple-400/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label class="block text-lightText dark:text-white font-medium mb-2">Subject</label>
                <input
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-lightCard dark:bg-white/10 border border-lightCardBorder dark:border-white/20 rounded-lg text-lightText dark:text-white placeholder-lightTextSecondary dark:placeholder-gray-400 focus:outline-none focus:border-lightAccent dark:focus:border-purple-400 focus:ring-2 focus:ring-lightAccent/20 dark:focus:ring-purple-400/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label class="block text-lightText dark:text-white font-medium mb-2">Message</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 bg-lightCard dark:bg-white/10 border border-lightCardBorder dark:border-white/20 rounded-lg text-lightText dark:text-white placeholder-lightTextSecondary dark:placeholder-gray-400 focus:outline-none focus:border-lightAccent dark:focus:border-purple-400 focus:ring-2 focus:ring-lightAccent/20 dark:focus:ring-purple-400/20 transition-all resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-lightAccent to-indigo-600 dark:from-purple-500 dark:to-indigo-600 hover:from-lightAccentHover hover:to-indigo-700 dark:hover:from-purple-600 dark:hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 dark:disabled:from-gray-500 dark:disabled:to-gray-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <svg v-if="isSubmitting" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              </button>
            </form>

      
            <div v-if="submitMessage" :class="[
              'mt-4 p-4 rounded-lg',
              submitSuccess ? 'bg-lightSuccess/20 dark:bg-green-500/20 border border-lightSuccess/30 dark:border-green-400/30 text-lightSuccess dark:text-green-200' : 'bg-lightError/20 dark:bg-red-500/20 border border-lightError/30 dark:border-red-400/30 text-lightError dark:text-red-200'
            ]">
              {{ submitMessage }}
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, reactive, computed } from "vue";

  const colorMode = useColorMode();
  const isDarkMode = computed(() => colorMode.value === "dark");

  const form = reactive({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isSubmitting = ref(false);
  const submitMessage = ref("");
  const submitSuccess = ref(false);

  const submitForm = async () => {
    isSubmitting.value = true;
    submitMessage.value = "";

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form
      Object.keys(form).forEach((key) => {
        form[key as keyof typeof form] = "";
      });

      submitMessage.value =
        "Thank you for your message! I'll get back to you soon.";
      submitSuccess.value = true;

      // Clear success message after 5 seconds
      setTimeout(() => {
        submitMessage.value = "";
      }, 5000);
    } catch (error) {
      submitMessage.value =
        "Sorry, there was an error sending your message. Please try again.";
      submitSuccess.value = false;
    } finally {
      isSubmitting.value = false;
    }
  };
</script>
