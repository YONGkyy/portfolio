<script setup lang="ts">
import { onMounted } from "vue";
import Aboutme from "~/components/sections/aboutme.vue";
import Banner from "~/components/sections/banner.vue";
import Certificate from "~/components/sections/certificate.vue";
import Contact from "~/components/sections/contact.vue";
import Experience from "~/components/sections/experience.vue";
import Skill from "~/components/sections/skill.vue";
import Project from "~/components/sections/project.vue";
import { useScrollReveal } from "~/composables/useScrollReveal";

// Initialize scroll reveal
const { initReveal } = useScrollReveal();

onMounted(() => {
  // Re-init reveal after components are mounted
  setTimeout(() => {
    initReveal();
  }, 100);
});
</script>

<template>
  <div
    class="relative min-h-screen overflow-hidden"
    style="
      background: linear-gradient(
        180deg,
        rgb(10, 14, 13) 0%,
        rgb(19, 24, 22) 100%
      );
    "
  >
    <!-- Background effects -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Keep your existing galaxy background effect for dark mode -->
      <div class="hidden dark:block absolute inset-0 z-0">
        <div class="main"></div>
      </div>

      <!-- Radial gradients with sage green -->
      <div
        class="absolute top-1/4 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 rounded-full blur-3xl animate-pulse opacity-20"
        style="
          background: radial-gradient(
            circle,
            rgba(139, 157, 131, 0.3) 0%,
            transparent 70%
          );
        "
      ></div>

      <div
        class="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse delay-700 opacity-15"
        style="
          background: radial-gradient(
            circle,
            rgba(164, 184, 157, 0.25) 0%,
            transparent 70%
          );
          animation-delay: 1s;
        "
      ></div>

      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse delay-1000 opacity-10"
        style="
          background: radial-gradient(
            circle,
            rgba(122, 138, 114, 0.2) 0%,
            transparent 70%
          );
          animation-delay: 1.5s;
        "
      ></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <Banner profiles="/images/profileAi(1).png" />

      <Aboutme profile-image="/images/sadness.png" />

      <Skill />
      <Experience />
      <Certificate />
      <Project />
      <Contact />
    </div>
  </div>
</template>

<style scoped>
/* Galaxy background CSS - Kept for dark mode effect */
.main {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 1px;
  width: 1px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: -42vw -4vh 0px 0px #fff, 25vw -41vh 0px 0px #fff,
    -20vw 49vh 0px 1px #fff, 5vw 40vh 1px 1px #fff, 29vw 19vh 1px 0px #fff,
    -44vw -13vh 0px 0px #fff, 46vw 41vh 0px 1px #fff, -3vw -45vh 0px 1px #fff,
    47vw 35vh 1px 0px #fff, 12vw -8vh 1px 0px #fff, -34vw 48vh 1px 1px #fff,
    32vw 26vh 1px 1px #fff, 32vw -41vh 1px 1px #fff, 0vw 37vh 1px 1px #fff,
    34vw -26vh 1px 0px #fff, -14vw -49vh 1px 0px #fff, -12vw 45vh 0px 1px #fff,
    -44vw -33vh 0px 1px #fff, -13vw 41vh 0px 0px #fff, -36vw -11vh 0px 1px #fff,
    -23vw -24vh 1px 0px #fff, -38vw -27vh 0px 1px #fff, 16vw -19vh 0px 0px #fff,
    28vw 33vh 1px 0px #fff, -49vw -4vh 0px 0px #fff, 16vw 32vh 0px 1px #fff,
    36vw -18vh 1px 0px #fff, -25vw -30vh 1px 0px #fff, -23vw 24vh 0px 1px #fff,
    -2vw -35vh 1px 1px #fff, -25vw 9vh 0px 0px #fff, -15vw -34vh 0px 0px #fff,
    -8vw -19vh 1px 0px #fff, -20vw -20vh 1px 1px #fff, 42vw 50vh 0px 1px #fff,
    -32vw 10vh 1px 0px #fff, -23vw -17vh 0px 0px #fff, 44vw 15vh 1px 0px #fff,
    -40vw 33vh 1px 1px #fff, -43vw 8vh 0px 0px #fff, -48vw -15vh 1px 1px #fff,
    -24vw 17vh 0px 0px #fff, -31vw 50vh 1px 0px #fff, 36vw -38vh 0px 1px #fff,
    -7vw 48vh 0px 0px #fff, 15vw -32vh 0px 0px #fff, 29vw -41vh 0px 0px #fff,
    2vw 37vh 1px 0px #fff, 7vw -40vh 1px 1px #fff, 15vw 18vh 0px 0px #fff,
    25vw -13vh 1px 1px #fff, -46vw -12vh 1px 1px #fff, -18vw 22vh 0px 0px #fff,
    23vw -9vh 1px 0px #fff, 50vw 12vh 0px 1px #fff, 45vw 2vh 0px 0px #fff,
    14vw -48vh 1px 0px #fff, 23vw 43vh 0px 1px #fff, -40vw 16vh 1px 1px #fff,
    20vw -31vh 0px 1px #fff, -17vw 44vh 1px 1px #fff, 18vw -45vh 0px 0px #fff,
    33vw -6vh 0px 0px #fff, 0vw 7vh 0px 1px #fff, -10vw -18vh 0px 1px #fff,
    -19vw 5vh 1px 0px #fff, 1vw 42vh 0px 0px #fff, 22vw 48vh 0px 1px #fff,
    39vw -8vh 1px 1px #fff, -6vw -42vh 1px 0px #fff, -47vw 34vh 0px 0px #fff,
    -46vw 19vh 0px 1px #fff, -12vw -32vh 0px 0px #fff, -45vw -38vh 0px 1px #fff,
    -28vw 18vh 1px 0px #fff, -38vw -46vh 1px 1px #fff, 49vw -6vh 1px 1px #fff,
    -28vw 18vh 1px 1px #fff, 10vw -24vh 0px 1px #fff, -5vw -11vh 1px 1px #fff,
    33vw -8vh 1px 0px #fff, -16vw 17vh 0px 0px #fff, 18vw 27vh 0px 1px #fff,
    -8vw -10vh 1px 1px #fff;
  animation: zoom 16s alternate infinite;
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
}
</style>
