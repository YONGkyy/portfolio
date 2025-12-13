<script setup lang="ts">
import { ref } from "vue";

// Form state
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const formMessage = ref({
  type: "",
  text: "",
});

const handleSubmit = () => {
  // Basic validation
  if (!form.value.name || !form.value.email || !form.value.message) {
    formMessage.value = {
      type: "error",
      text: "Please fill in all required fields.",
    };
    return;
  }

  // Show success message (in real app, would send to backend)
  formMessage.value = {
    type: "success",
    text: "Thank you! Your message has been sent successfully.",
  };

  // Reset form
  form.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // Clear message after 5 seconds
  setTimeout(() => {
    formMessage.value = { type: "", text: "" };
  }, 5000);
};

// Social links
const socialLinks = [
  { icon: "fab fa-github", url: "https://github.com/YONGKyy", label: "GitHub" },
  {
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/keo-yinyong-396277330/",
    label: "LinkedIn",
  },
  {
    icon: "fab fa-facebook-f",
    url: "https://www.facebook.com/yong.kawaii",
    label: "Facebook",
  },
  {
    icon: "fab fa-telegram-plane",
    url: "https://t.me/yong_24",
    label: "Telegram",
  },
  {
    icon: "fas fa-envelope",
    url: "mailto:yinyongkeo@gmail.com",
    label: "Email",
  },
];
</script>

<template>
  <section id="contact" class="relative py-16 sm:py-20 md:py-24 lg:py-32">
    <div class="container mx-auto px-4 md:px-16">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20 reveal">
        <span
          class="text-sm sm:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-4 block"
          style="color: var(--color-accent-primary)"
        >
          Let's talk
        </span>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
        >
          Get In Touch
        </h2>
        <p
          class="text-base sm:text-lg max-w-2xl mx-auto"
          style="color: #7a8984"
        >
          Have a project in mind? Let's work together to bring your ideas to
          life
        </p>
      </div>

      <!-- Contact Form -->
      <div class="max-w-3xl mx-auto">
        <form
          @submit.prevent="handleSubmit"
          class="glass p-6 sm:p-8 md:p-10 rounded-2xl reveal"
        >
          <!-- Name -->
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 font-medium"
              style="color: #b8c5c0"
            >
              Your Name
            </label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              class="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
              style="
                background: rgb(26, 34, 32);
                border: 2px solid transparent;
                color: #e8f0ed;
              "
              @focus="
                $event.target.style.borderColor = 'var(--color-accent-primary)';
                $event.target.style.boxShadow =
                  '0 0 0 4px rgba(139, 157, 131, 0.1)';
              "
              @blur="
                $event.target.style.borderColor = 'transparent';
                $event.target.style.boxShadow = 'none';
              "
              placeholder="John Doe"
              required
            />
          </div>

          <!-- Email -->
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 font-medium"
              style="color: #b8c5c0"
            >
              Email Address
            </label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              class="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
              style="
                background: rgb(26, 34, 32);
                border: 2px solid transparent;
                color: #e8f0ed;
              "
              @focus="
                $event.target.style.borderColor = 'var(--color-accent-primary)';
                $event.target.style.boxShadow =
                  '0 0 0 4px rgba(139, 157, 131, 0.1)';
              "
              @blur="
                $event.target.style.borderColor = 'transparent';
                $event.target.style.boxShadow = 'none';
              "
              placeholder="john@example.com"
              required
            />
          </div>

          <!-- Subject -->
          <div class="mb-6">
            <label
              for="subject"
              class="block mb-2 font-medium"
              style="color: #b8c5c0"
            >
              Subject
            </label>
            <input
              v-model="form.subject"
              type="text"
              id="subject"
              class="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
              style="
                background: rgb(26, 34, 32);
                border: 2px solid transparent;
                color: #e8f0ed;
              "
              @focus="
                $event.target.style.borderColor = 'var(--color-accent-primary)';
                $event.target.style.boxShadow =
                  '0 0 0 4px rgba(139, 157, 131, 0.1)';
              "
              @blur="
                $event.target.style.borderColor = 'transparent';
                $event.target.style.boxShadow = 'none';
              "
              placeholder="Project Inquiry"
              required
            />
          </div>

          <!-- Message -->
          <div class="mb-6">
            <label
              for="message"
              class="block mb-2 font-medium"
              style="color: #b8c5c0"
            >
              Message
            </label>
            <textarea
              v-model="form.message"
              id="message"
              rows="5"
              class="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none resize-vertical"
              style="
                background: rgb(26, 34, 32);
                border: 2px solid transparent;
                color: #e8f0ed;
              "
              @focus="
                $event.target.style.borderColor = 'var(--color-accent-primary)';
                $event.target.style.boxShadow =
                  '0 0 0 4px rgba(139, 157, 131, 0.1)';
              "
              @blur="
                $event.target.style.borderColor = 'transparent';
                $event.target.style.boxShadow = 'none';
              "
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="btn-sage w-full py-4 text-lg inline-flex items-center justify-center gap-2"
          >
            <span>Send Message</span>
            <i class="fas fa-paper-plane"></i>
          </button>

          <!-- Form Message -->
          <transition name="fade">
            <div
              v-if="formMessage.text"
              class="mt-6 p-4 rounded-lg"
              :style="{
                background:
                  formMessage.type === 'success'
                    ? 'rgba(139, 157, 131, 0.15)'
                    : 'rgba(220, 38, 38, 0.15)',
                color:
                  formMessage.type === 'success'
                    ? 'var(--color-accent-light)'
                    : '#ef4444',
                border: `1px solid ${
                  formMessage.type === 'success'
                    ? 'var(--color-accent-primary)'
                    : '#ef4444'
                }`,
              }"
            >
              {{ formMessage.text }}
            </div>
          </transition>
        </form>

        <!-- Social Links -->
        <div class="flex justify-center gap-4 mt-12">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            class="social-link w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full glass transition-all duration-300 hover:translate-y-[-4px] hover:animate-glow"
            style="color: #b8c5c0"
            @mouseenter="
              $event.currentTarget.style.background =
                'var(--color-accent-primary)';
              $event.currentTarget.style.color = '#0a0e0d';
            "
            @mouseleave="
              $event.currentTarget.style.background = '';
              $event.currentTarget.style.color = '#b8c5c0';
            "
          >
            <i :class="social.icon" class="text-lg sm:text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  font-family: var(--font-heading);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
