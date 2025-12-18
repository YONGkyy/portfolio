// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    // "@nuxtjs/tailwindcss", // old module, using vite plugin instead
    "@nuxt/image",
    "nuxt-aos",
    "motion-v/nuxt",
    "@nuxtjs/color-mode",
  ],

  colorMode: {
    preference: "dark", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage", // or 'sessionStorage' or 'cookie'
    storageKey: "nuxt-color-mode",
  },

  css: [
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },

  app: {
    head: {
      title: "Yong @ Portfolio",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "A personal blog by Yong, sharing thoughts and experiences.",
        },
        {
          name: "keywords",
          content: "Yong, personal blog, technology, lifestyle, travel",
        },
      ],
       link: [
      {
        rel: "icon",
        type: "image/png",
        href: "images/me-banner.png"  // <-- your favicon file path in the `public/` folder
      },
      // optional: Apple touch icon
      {
        rel: "apple-touch-icon",
        href: "images/me-banner.png"
      },
      // Google Fonts for new design
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
      }
    ]
    },
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  },
});
