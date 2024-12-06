<template>
  <div class="bg-darkest-blue text-white min-h-screen flex items-center justify-center">
    <div class="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
      <!-- Left Section: Placeholder Image -->
      <div>
        <div class="w-48 h-48 bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
          Placeholder
        </div>
      </div>

      <!-- Right Section: Name and Typing Animation -->
      <div>
        <h1 class="text-5xl font-bold mb-4">Hi, I'm Niels Maes</h1>
        <div class="text-2xl">
          <!-- Static Prefix -->
          <span class="mr-2">I am a</span>
          <!-- Typing Animation -->
          <span class="text-purple-accent font-semibold glow-effect">
            {{ currentText }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      positions: [
        'Developer',
        'Student Cyber Security',
        'Co-founder of Stellarnode',
      ],
      currentIndex: 0,
      currentText: '',
      typingSpeed: 100, // Typing speed in ms
    };
  },
  mounted() {
    this.startTypingAnimation();
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
              this.currentText = '';
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
</style>
