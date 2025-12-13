import { ref } from "vue";

export function useTypingAnimation(text: string, speed: number = 100) {
  const displayText = ref("");
  const isComplete = ref(false);

  const type = async () => {
    for (let i = 0; i <= text.length; i++) {
      displayText.value = text.substring(0, i);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
    isComplete.value = true;
  };

  return {
    displayText,
    isComplete,
    type,
  };
}

export function useRoleCycling(
  roles: string[],
  options = {
    typeSpeed: 100,
    deleteSpeed: 50,
    pauseTime: 2000,
  }
) {
  const currentRole = ref("");
  const currentIndex = ref(0);
  const isDeleting = ref(false);

  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const cycle = () => {
    const fullText = roles[currentIndex.value];

    if (isDeleting.value) {
      currentRole.value = fullText.substring(0, currentRole.value.length - 1);

      if (currentRole.value === "") {
        isDeleting.value = false;
        currentIndex.value = (currentIndex.value + 1) % roles.length;
        timeoutId = setTimeout(cycle, 500);
        return;
      }

      timeoutId = setTimeout(cycle, options.deleteSpeed);
    } else {
      currentRole.value = fullText.substring(0, currentRole.value.length + 1);

      if (currentRole.value === fullText) {
        timeoutId = setTimeout(() => {
          isDeleting.value = true;
          cycle();
        }, options.pauseTime);
        return;
      }

      timeoutId = setTimeout(cycle, options.typeSpeed);
    }
  };

  const start = () => {
    timeoutId = setTimeout(cycle, 500);
  };

  const stop = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return {
    currentRole,
    start,
    stop,
  };
}
