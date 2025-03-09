<template>
  <div>
    <!-- Main View Section -->
    <div class="bg-darkest-blue text-white min-h-screen flex flex-col items-center justify-center relative">
      <!-- Main Box -->
      <div
          class="group relative bg-zinc-900/50 rounded-2xl p-10 shadow-lg shadow-black/80 flex md:flex-row flex-col md:items-start items-center justify-center gap-6 backdrop-blur-md glow-box-container"
          style="width: 770px; max-width: 770px;"
      >
        <!-- Left Section -->
        <div class="flex-1 flex md:flex-row flex-col items-center gap-8 text-center md:text-left">
          <!-- Image Placeholder -->
          <div class="w-48 h-48  rounded-full flex items-center justify-center text-2xl font-bold">
            <img src="../assets/images/portfoliofoto.png" alt="">
          </div>
          <!-- Right Section -->
          <div>
            <h2 class="font-bold text-4xl tracking-tighter mb-3">Hi, I'm Niels Maes</h2>
            <div class="text-3xl">
              <span class="mr-2">I am a</span>
              <span class="text-purple-accent font-semibold glow-effect">
                {{ currentText }}
              </span>
            </div>
            <!-- Glow Button -->
            <button class="glow-button font-semibold px-6 bg-zinc-950/50 backdrop-blur-md py-3 rounded-xl text-white/90 border-[2px] border-gray-700 mt-6">
              <a href="#about">Learn more</a>
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Wave Divider -->
      <div class="custom-shape-divider-bottom-1733577957">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>

    <!-- About Me Section -->
    <div id="about">
      <AboutMe />
    </div>
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe.vue";

export default {
  name: "HomeView",
  components: {
    AboutMe,
  },
  data() {
    return {
      positions: [
        "Developer",
        "Student Cyber Security",
        "Co-founder of Stellarnode",
      ],
      currentText: "",
      typingSpeed: 100,
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
              this.currentText = "";
              type();
            });
          }, 1500);
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
/* Glow Effect for Main Box */
.glow-box-container {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
}

.glow-box-container::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 3px solid rgba(124, 58, 237, 0.5); /* Glow border */
  border-radius: inherit;
  pointer-events: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.glow-box-container:hover::before {
  border-color: #7c3aed;
  box-shadow: 0 0 15px #7c3aed;
}

/* Glow Button */
.glow-button {
  position: relative;
  border: 2px solid #4a5568; /* Default gray border */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.glow-button::before {
  content: "";
  position: absolute;
  inset: -2px; /* Adjust to cover the border */
  border-radius: inherit;
  pointer-events: none;
  transition: box-shadow 0.3s ease;
}

.glow-button:hover {
  border-color: #7c3aed; /* Glow color */
}

.glow-button:hover::before {
  box-shadow: 0 0 15px #7c3aed;
}

/* Glow Effect for Text */
.glow-effect {
  text-shadow: 0 0 8px #7c3aed, 0 0 16px #7c3aed;
}

/* Bottom Wave Divider */
.custom-shape-divider-bottom-1733577957 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1733577957 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.custom-shape-divider-bottom-1733577957 .shape-fill {
  fill: #6A0DAD;
}

/* Background Colors */
.bg-darkest-blue {
  background-color: #1E1E3F;
}

.bg-lightest-blue {
  background-color: #F3F4F6;
}
</style>
