import { ref, onMounted, onUnmounted } from 'vue';

export const useScrollReveal = () => {
  const revealElements = ref<HTMLElement[]>([]);
  let observer: IntersectionObserver | null = null;

  const initReveal = () => {
    // Get all elements with 'reveal' class
    const elements = document.querySelectorAll('.reveal');
    revealElements.value = Array.from(elements) as HTMLElement[];

    // Create Intersection Observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all reveal elements
    revealElements.value.forEach((element) => {
      if (observer) {
        observer.observe(element);
      }
    });
  };

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
    }
  };

  onMounted(() => {
    initReveal();
  });

  onUnmounted(() => {
    cleanup();
  });

  return {
    initReveal,
    cleanup
  };
};
