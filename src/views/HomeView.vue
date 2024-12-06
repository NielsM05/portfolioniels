<template>
  <div class="bg-darkest-blue text-white min-h-screen flex items-center justify-center">
    <div
        class="relative glow-capture overflow-hidden rounded-2xl"
        style="--glow-border-x: 50%; --glow-border-y: 50%; --glow-border-color: transparent;"
    >
      <!-- Main Box -->
      <div
          class="group bg-zinc-900/50 border-[3px] rounded-2xl p-10 shadow-lg shadow-black/80 flex md:flex-row flex-col flex-wrap md:items-start items-center md:justify-between justify-center gap-6 backdrop-blur-md w-full max-w-4xl"
          style="
          border-image-source: radial-gradient(circle at var(--glow-border-x) var(--glow-border-y), var(--glow-border-color), transparent);
          border-image-slice: 1;
          width: 770px; /* Restore original size */
          max-width: 770px;
        "
      >
        <!-- Left Section -->
        <div class="flex-1 md:order-1 order-2 flex md:flex-row flex-col items-center gap-8 text-center md:text-left">
          <div class="w-48 h-48 bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
            Placeholder
          </div>
          <!-- Right Section -->
          <div>
            <h2 class="font-bold text-4xl tracking-tighter mb-3 glow:text-glow/[.15]">Hi, I'm Niels Maes</h2>
            <div class="md:prose-base prose-lg prose-zinc prose-invert text-opacity-90 text-3xl">
              <span class="mr-2">I am a</span>
              <span class="text-purple-accent font-semibold glow-effect">
                {{ currentText }}
              </span>
            </div>
            <button
                class="font-semibold px-6 bg-zinc-950/50 backdrop-blur-md py-3 rounded-xl text-white/90 border-2 border-white/10 mt-6"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <!-- Glow Overlay -->
      <div class="glow-overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      positions: [
        "Developer",
        "Student Cyber Security",
        "Co-founder of Stellarnode",
      ],
      currentIndex: 0,
      currentText: "",
      typingSpeed: 100, // Typing speed in ms
    };
  },
  mounted() {
    this.startTypingAnimation();
    this.setupMouseGlow();
  },
  methods: {
    startTypingAnimation() {
      let positionIndex = 0;
      let charIndex = 0;
      const type = () => {
        if (charIndex < this.positions[positionIndex].length) {
          this.currentText += this.positions[positionIndex][charIndex];
          charIndex++;
        } else {
          setTimeout(() => {
            this.deleteText(() => {
              positionIndex = (positionIndex + 1) % this.positions.length;
              charIndex = 0;
              this.currentText = "";
              type();
            });
          }, 1500); // Pause before deleting
          return;
        }
        setTimeout(type, this.typingSpeed);
      };

      type();
    },
    deleteText(callback) {
      const deleteChar = () => {
        if (this.currentText.length > 0) {
          this.currentText = this.currentText.slice(0, -1);
          setTimeout(deleteChar, this.typingSpeed);
        } else {
          callback();
        }
      };
      deleteChar();
    },
    setupMouseGlow() {
      const box = document.querySelector(".group");
      const capture = document.querySelector(".glow-capture");

      box.addEventListener("mouseenter", () => {
        capture.style.setProperty("--glow-border-color", "#7c3aed");
      });

      box.addEventListener("mouseleave", () => {
        capture.style.setProperty("--glow-border-color", "transparent");
      });

      box.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = box.getBoundingClientRect();
        const x = ((clientX - left) / width) * 100;
        const y = ((clientY - top) / height) * 100;

        capture.style.setProperty("--glow-border-x", `${x}%`);
        capture.style.setProperty("--glow-border-y", `${y}%`);
      });
    },
  },
};
</script>

<style scoped>
.glow-effect {
  text-shadow: 0 0 8px #8b5cf6, 0 0 16px #8b5cf6, 0 0 24px #8b5cf6, 0 0 32px #8b5cf6;
}

.typing-animation {
  display: inline-block;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.glow-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  opacity: 0.5;
  transform: scale(1.05);
  border-radius: inherit;
}

.glow-capture {
  overflow: hidden;
  border-radius: inherit;
}
</style>
