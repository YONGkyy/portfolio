<script setup lang="ts">
// Certificate data
const certificates = [
  {
    id: 1,
    title: "English Language Proficiency",
    issuer: "Norton University",
    date: "2024",
    credentialId: "0084/24 NU/CAHL",
    image: "/certificates/e1.jpg",
    icon: "fas fa-language",
  },
  {
    id: 2,
    title: "Internship Completion",
    issuer: "Norton University",
    date: "2025",
    credentialId: "1612/25",
    image: "/certificates/i1.jpg",
    icon: "fas fa-briefcase",
  },
  {
    id: 3,
    title: "Academic Award",
    issuer: "Norton University",
    date: "2024",
    credentialId: "0163/24 NU",
    image: "/certificates/t1.jpg",
    icon: "fas fa-award",
  },
];

const viewCertificate = (image: string) => {
  // In production, open in modal or lightbox
  window.open(image, "_blank");
};
</script>

<template>
  <section
    id="certificates"
    class="relative py-16 sm:py-20 md:py-24 lg:py-32"
    style="background: rgb(19, 24, 22)"
  >
    <div class="container mx-auto px-4 md:px-16">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20 reveal">
        <span
          class="text-sm sm:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-4 block"
          style="color: var(--color-accent-primary)"
        >
          Achievements
        </span>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white"
        >
          Certifications
        </h2>
        <p
          class="text-base sm:text-lg max-w-2xl mx-auto"
          style="color: #7a8984"
        >
          Professional certifications and academic achievements
        </p>
      </div>

      <!-- Certificates Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <div
          v-for="(cert, index) in certificates"
          :key="cert.id"
          class="glass rounded-2xl overflow-hidden reveal transition-transform hover:translate-y-[-8px] cursor-pointer"
          :style="{ animationDelay: `${index * 100}ms` }"
          @click="viewCertificate(cert.image)"
        >
          <!-- Certificate Image -->
          <div class="relative aspect-[1/1.414] overflow-hidden bg-slate-800">
            <img
              :src="cert.image"
              :alt="cert.title"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />

            <!-- Hover Overlay -->
            <div
              class="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <div class="text-center">
                <i class="fas fa-search-plus text-3xl text-white mb-2"></i>
                <p class="text-sm font-semibold text-white">Click to View</p>
              </div>
            </div>

            <!-- Date Badge -->
            <div
              class="absolute top-3 right-3 px-3 py-1 rounded-lg backdrop-blur-sm"
              style="background: rgba(139, 157, 131, 0.9)"
            >
              <span class="text-xs font-bold text-slate-900">{{
                cert.date
              }}</span>
            </div>
          </div>

          <!-- Certificate Info -->
          <div class="p-6">
            <!-- Icon -->
            <div
              class="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style="
                background: linear-gradient(
                  135deg,
                  var(--color-accent-dark),
                  var(--color-accent-primary)
                );
              "
            >
              <i :class="`${cert.icon} text-white text-lg`"></i>
            </div>

            <!-- Title -->
            <h3 class="text-lg sm:text-xl font-bold mb-2 text-white">
              {{ cert.title }}
            </h3>

            <!-- Issuer -->
            <p class="text-sm mb-2" style="color: var(--color-accent-light)">
              Issued by {{ cert.issuer }}
            </p>

            <!-- Credential ID -->
            <p class="text-xs mb-4" style="color: #7a8984">
              ID: {{ cert.credentialId }}
            </p>

            <!-- View Button -->
            <button
              class="btn-sage w-full text-sm py-2"
              @click.stop="viewCertificate(cert.image)"
            >
              <i class="fas fa-eye mr-2"></i>
              View Certificate
            </button>

            <!-- Verified Badge -->
            <div
              class="flex items-center justify-center gap-2 mt-4 text-xs"
              style="color: #7a8984"
            >
              <i class="fas fa-check-circle text-green-400"></i>
              <span>Verified Certificate</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="glass p-6 sm:p-8 rounded-2xl mt-12 reveal">
        <div class="grid grid-cols-3 gap-4 sm:gap-6 text-center">
          <div>
            <div
              class="text-2xl sm:text-3xl font-bold mb-1"
              style="
                color: var(--color-accent-primary);
                font-family: var(--font-heading);
              "
            >
              {{ certificates.length }}+
            </div>
            <div class="text-xs sm:text-sm" style="color: #7a8984">
              Certificates
            </div>
          </div>
          <div>
            <div
              class="text-2xl sm:text-3xl font-bold mb-1"
              style="
                color: var(--color-accent-primary);
                font-family: var(--font-heading);
              "
            >
              100%
            </div>
            <div class="text-xs sm:text-sm" style="color: #7a8984">
              Completion Rate
            </div>
          </div>
          <div>
            <div
              class="text-2xl sm:text-3xl font-bold mb-1"
              style="
                color: var(--color-accent-primary);
                font-family: var(--font-heading);
              "
            >
              50+
            </div>
            <div class="text-xs sm:text-sm" style="color: #7a8984">
              Hours Training
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2,
h3 {
  font-family: var(--font-heading);
}
</style>
