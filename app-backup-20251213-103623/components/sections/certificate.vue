<script setup lang="ts">
import { computed } from 'vue';

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  pdfUrl?: string;
  icon: string;
  orientation: "horizontal" | "vertical";
  color: {
    from: string;
    to: string;
    badge: string;
    text: string;
    lightFrom: string;
    lightTo: string;
    lightBadge: string;
    lightText: string;
  };
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certificate of English Language Proficiency",
    issuer: "Norton University",
    date: "2024",
    credentialId: "0084/24 NU/CAHL",
    image: "/certificates/e1.jpg",
    pdfUrl: "/certificates/e3.pdf",
    icon: "fas fa-language",
    orientation: "vertical",
    color: {
      from: "from-emerald-900",
      to: "to-teal-900",
      badge: "from-emerald-500 to-teal-600",
      text: "text-emerald-200",
      lightFrom: "from-emerald-100",
      lightTo: "to-teal-100",
      lightBadge: "from-emerald-500 to-teal-600",
      lightText: "text-emerald-700",
    },
  },
  {
    id: 2,
    title: "Certificate of Internship Completion",
    issuer: "Norton University",
    date: "2025",
    credentialId: "1612/25",
    image: "/certificates/i1.jpg",
    pdfUrl: "/certificates/i3.pdf",
    icon: "fas fa-briefcase",
    orientation: "vertical",
    color: {
      from: "from-purple-900",
      to: "to-pink-900",
      badge: "from-purple-500 to-pink-600",
      text: "text-purple-200",
      lightFrom: "from-purple-100",
      lightTo: "to-pink-100",
      lightBadge: "from-purple-500 to-pink-600",
      lightText: "text-purple-700",
    },
  },
  {
    id: 3,
    title: "Certificate of Academic Award",
    issuer: "Norton University",
    date: "2024",
    credentialId: "0163/24 NU",
    image: "/certificates/t1.jpg",
    pdfUrl: "/certificates/t3.pdf",
    icon: "fas fa-award",
    orientation: "horizontal",
    color: {
      from: "from-blue-900",
      to: "to-indigo-900",
      badge: "from-blue-500 to-indigo-600",
      text: "text-blue-200",
      lightFrom: "from-blue-100",
      lightTo: "to-indigo-100",
      lightBadge: "from-blue-500 to-indigo-600",
      lightText: "text-blue-700",
    },
  },
];

const viewCertificate = (pdfUrl: string | undefined, title?: string) => {
  if (pdfUrl) {
    if (typeof window !== 'undefined') {
      window.open(pdfUrl, '_blank');
    }
  } else {
    console.warn('No PDF available for this certificate');
    if (typeof window !== 'undefined') {
      alert('PDF not available yet.');
    }
  }
};

const downloadCertificate = (pdfUrl: string | undefined, title: string) => {
  if (!pdfUrl) return;

  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const openCredential = (credentialId: string | undefined) => {
  if (credentialId && typeof window !== 'undefined') {
    window.open(`https://credentials.example.com/${credentialId}`, '_blank');
  }
};
</script>

<template>
  <section id="certificates" class="mb-20 w-full max-w-6xl px-4 sm:px-6">
    <!-- Section Header -->
    <Motion
      :initial="{ opacity: 0, scale: 0.8 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
      class="flex items-center gap-4 mb-12 justify-center lg:justify-start"
    >
      <div
        data-aos="fade-left"
        :class="[
          'h-px w-12 bg-gradient-to-r from-transparent',
          isDark ? 'to-amber-500' : 'to-amber-600 opacity-70'
        ]"
      ></div>
      <span
        data-aos="fade-down"
        :class="[
          'uppercase tracking-wider text-sm md:text-lg font-semibold',
          isDark ? 'text-amber-400' : 'text-amber-600'
        ]"
      >
        Certifications & Achievements
      </span>
      <div
        data-aos="fade-right"
        :class="[
          'h-px flex-1 bg-gradient-to-r to-transparent max-w-xs',
          isDark ? 'from-amber-500' : 'from-amber-600 opacity-70'
        ]"
      ></div>
    </Motion>

    <!-- Certificates Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="cert in certificates"
        :key="cert.id"
        data-aos="fade-up"
        :data-aos-delay="cert.id * 100"
        class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
      >
        <!-- Animated Background Glow -->
        <div
          :class="[
            'absolute inset-0 animate-[pulse_6s_ease-in-out_infinite] blur-[24px] z-0',
            isDark
              ? `bg-gradient-to-br ${cert.color.from} via-black ${cert.color.to} opacity-60`
              : `bg-gradient-to-br ${cert.color.lightFrom} ${cert.color.lightTo} opacity-40`
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
          <!-- Header with Icon -->
          <div class="flex items-start justify-between mb-6">
            <div
              :class="[
                'w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-[float_6s_ease-in-out_infinite]',
                `bg-gradient-to-tr ${cert.color.badge}`
              ]"
            >
              <i :class="`${cert.icon} text-white text-xl`"></i>
            </div>
            <div
              :class="[
                'rounded-full px-3 py-1 border',
                isDark
                  ? `bg-gradient-to-r ${cert.color.badge}/20 border-${cert.color.badge.split('-')[1]}-500/30`
                  : `bg-gradient-to-r ${cert.color.lightBadge}/20 border-${cert.color.lightBadge.split('-')[1]}-400/40`
              ]"
            >
              <span
                :class="[
                  'text-xs font-semibold',
                  isDark ? cert.color.text : cert.color.lightText
                ]"
              >
                {{ cert.date }}
              </span>
            </div>
          </div>

          <!-- Certificate Title & Issuer -->
          <div class="mb-6">
            <h3
              :class="[
                'text-xl font-bold mb-2 leading-tight',
                isDark ? 'text-white' : 'text-slate-900'
              ]"
            >
              {{ cert.title }}
            </h3>
            <p
              :class="[
                'text-sm font-medium mb-1',
                isDark ? cert.color.text : cert.color.lightText
              ]"
            >
              Issued by {{ cert.issuer }}
            </p>
            <p
              v-if="cert.credentialId"
              :class="[
                'text-xs',
                isDark ? 'text-gray-400' : 'text-gray-600'
              ]"
            >
              ID: {{ cert.credentialId }}
            </p>
          </div>

          <!-- Certificate Preview Image -->
          <div
            :class="[
              'mb-6 rounded-lg overflow-hidden border bg-gradient-to-br relative cursor-pointer transition-all duration-300',
              cert.orientation === 'horizontal' ? 'aspect-[1.414/1]' : 'aspect-[1/1.414]',
              isDark
                ? 'border-white/10 from-white/5 to-white/10 group-hover:border-white/30'
                : 'border-slate-300/40 from-slate-50 to-slate-100 group-hover:border-slate-400/50'
            ]"
            @click="cert.pdfUrl ? viewCertificate(cert.pdfUrl, cert.title) : null"
          >
            <!-- Certificate Image -->
            <img 
              :src="cert.image" 
              :alt="cert.title" 
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            <!-- Hover Overlay -->
            <div
              :class="[
                'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center',
                isDark ? 'bg-black/50' : 'bg-white/80'
              ]"
            >
              <div class="text-center">
                <i
                  :class="[
                    'fas fa-search-plus text-3xl mb-2',
                    isDark ? 'text-white' : 'text-slate-900'
                  ]"
                ></i>
                <p
                  :class="[
                    'text-sm font-semibold',
                    isDark ? 'text-white' : 'text-slate-900'
                  ]"
                >
                  Click to View
                </p>
              </div>
            </div>
            
            <!-- Orientation Badge -->
            <div
              :class="[
                'absolute top-2 right-2 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium',
                isDark
                  ? 'bg-black/60 text-white/90'
                  : 'bg-white/90 text-slate-800'
              ]"
            >
              <i :class="`fas ${cert.orientation === 'horizontal' ? 'fa-arrows-alt-h' : 'fa-arrows-alt-v'} mr-1`"></i>
              {{ cert.orientation === 'horizontal' ? 'Landscape' : 'Portrait' }}
            </div>

            <!-- PDF Badge -->
            <div
              v-if="cert.pdfUrl"
              class="absolute top-2 left-2 bg-red-600/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-bold"
            >
              <i class="fas fa-file-pdf mr-1"></i>
              PDF
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3">
            <!-- View PDF Button -->
            <button
              v-if="cert.pdfUrl"
              @click="viewCertificate(cert.pdfUrl, cert.title)"
              :class="[
                'flex-1 font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm',
                `bg-gradient-to-r ${cert.color.badge} hover:opacity-90 text-white`
              ]"
            >
              <i class="fas fa-eye mr-2"></i>
              View PDF
            </button>

            <!-- External Link Button -->
            <button
              v-else-if="cert.credentialId"
              @click="openCredential(cert.credentialId)"
              :class="[
                'flex-1 font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm',
                `bg-gradient-to-r ${cert.color.badge} hover:opacity-90 text-white`
              ]"
            >
              <i class="fas fa-external-link-alt mr-2"></i>
              View Certificate
            </button>

            <!-- Download Button -->
            <button
              v-if="cert.pdfUrl"
              @click="downloadCertificate(cert.pdfUrl, cert.title)"
              :class="[
                'px-4 py-2.5 rounded-lg border transition-all duration-300 text-sm font-semibold',
                isDark
                  ? `border-${cert.color.badge.split('-')[1]}-500/40 ${cert.color.text} hover:bg-white/5`
                  : `border-${cert.color.lightBadge.split('-')[1]}-400/50 ${cert.color.lightText} hover:bg-slate-100/50`
              ]"
              title="Download PDF"
            >
              <i class="fas fa-download"></i>
            </button>
          </div>

          <!-- Verification Badge -->
          <div class="mt-4 flex items-center justify-center gap-2 text-xs">
            <i class="fas fa-check-circle text-green-400"></i>
            <span :class="[isDark ? 'text-gray-400' : 'text-gray-600']">
              Verified Certificate
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- View All Certificates Button -->
    <div class="mt-12 text-center" data-aos="fade-up">
      <button
        :class="[
          'font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-3',
          isDark
            ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white'
            : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white'
        ]"
      >
        <i class="fas fa-award text-xl"></i>
        <span>View All Certificates</span>
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>

    <!-- Statistics Bar -->
    <div
      class="mt-12 grid grid-cols-3 gap-6 relative rounded-2xl overflow-hidden p-[1px]"
      data-aos="fade-up"
    >
      <div
        :class="[
          'absolute inset-0 blur-xl',
          isDark
            ? 'bg-gradient-to-r from-amber-900 via-orange-900 to-amber-900 opacity-40'
            : 'bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 opacity-30'
        ]"
      ></div>
      <div
        :class="[
          'relative z-10 backdrop-blur-3xl border rounded-2xl col-span-3 p-8',
          isDark
            ? 'bg-white/5 border-white/20'
            : 'bg-white/80 border-amber-300/40'
        ]"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div
              :class="[
                'text-3xl font-bold mb-1',
                isDark ? 'text-amber-400' : 'text-amber-600'
              ]"
            >
              {{ certificates.length }}+
            </div>
            <div
              :class="[
                'text-sm',
                isDark ? 'text-gray-300' : 'text-gray-700'
              ]"
            >
              Certificates Earned
            </div>
          </div>
          <div>
            <div
              :class="[
                'text-3xl font-bold mb-1',
                isDark ? 'text-orange-400' : 'text-orange-600'
              ]"
            >
              100%
            </div>
            <div
              :class="[
                'text-sm',
                isDark ? 'text-gray-300' : 'text-gray-700'
              ]"
            >
              Completion Rate
            </div>
          </div>
          <div>
            <div
              :class="[
                'text-3xl font-bold mb-1',
                isDark ? 'text-yellow-400' : 'text-yellow-600'
              ]"
            >
              50+
            </div>
            <div
              :class="[
                'text-sm',
                isDark ? 'text-gray-300' : 'text-gray-700'
              ]"
            >
              Hours of Training
            </div>
          </div>
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
  outline-color: #f59e0b;
}
</style>