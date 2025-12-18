<script setup lang="ts">
const currentYear = new Date().getFullYear();

const footerLinks = [
  { text: "Home", id: "banner" },
  { text: "About", id: "aboutme" },
  { text: "Projects", id: "projects" },
  // { text: "Contact", id: "contact" },
];

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

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <footer
    class="relative py-12 sm:py-16 border-t"
    style="background: rgb(10, 14, 13); border-color: var(--glass-border-dark)"
  >
    <div class="container mx-auto px-4 md:px-16">
      <!-- Footer Content -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <!-- Copyright -->
        <p class="text-sm md:text-base" style="color: #7a8984">
          © {{ currentYear }} Portfolio. All rights reserved.
        </p>

        <!-- Quick Links -->
        <nav class="flex flex-wrap justify-center gap-6">
          <button
            v-for="link in footerLinks"
            :key="link.id"
            @click="smoothScrollTo(link.id)"
            class="text-sm md:text-base transition-colors hover:text-[var(--color-accent-primary)]"
            style="color: #7a8984"
          >
            {{ link.text }}
          </button>
        </nav>

        <!-- Social Links -->
        <div class="flex gap-4">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            class="w-10 h-10 flex items-center justify-center rounded-full glass transition-all duration-300 hover:translate-y-[-4px]"
            style="color: #7a8984"
            @mouseenter="
              $event.currentTarget.style.background =
                'var(--color-accent-primary)';
              $event.currentTarget.style.color = '#0a0e0d';
            "
            @mouseleave="
              $event.currentTarget.style.background = '';
              $event.currentTarget.style.color = '#7a8984';
            "
          >
            <i :class="social.icon" class="text-lg"></i>
          </a>
        </div>
      </div>

      <!-- Additional Info -->
      <!-- <div
        class="mt-8 pt-8 border-t text-center"
        style="border-color: var(--glass-border-dark)"
      >
        <p class="text-sm" style="color: #7a8984">
          Built with
          <span style="color: var(--color-accent-primary)">♥</span> using Vue.js
          & Nuxt.js
        </p>
      </div> -->
    </div>
  </footer>
</template>

<style scoped>
/* Additional footer styling if needed */
</style>
