<template>
  <div class="about-me-container bg-darkest-blue text-white min-h-screen flex flex-col items-center justify-center relative">
    <!-- Top Wave Divider -->
    <div class="custom-shape-divider-top-1733578886">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
        ></path>
      </svg>
    </div>

    <!-- About Me Box -->
    <div
        class="group relative bg-zinc-900/50 rounded-2xl p-10 shadow-lg shadow-black/80 flex flex-col gap-6 backdrop-blur-md box-container mt-40"
        style="width: 1000px; max-width: 90%;"
    >
      <h2 class="font-bold text-4xl tracking-tighter mb-4">About Me</h2>
      <p class="text-lg leading-8">
        Hi, I'm Niels Maes, a passionate developer and cybersecurity enthusiast. I'm currently studying Cybersecurity
        while co-founding Stellarnode. With a strong dedication to learning and creating, I aim to bring innovative
        ideas to life through my skills and expertise.
      </p>
    </div>

    <!-- Skills Box -->
    <div
        class="group relative bg-zinc-900/50 rounded-2xl p-10 shadow-lg shadow-black/80 flex flex-col gap-6 backdrop-blur-md box-container mt-8"
        style="width: 1000px; max-width: 90%;"
    >
      <h3 class="font-bold text-3xl tracking-tighter mb-4">Skills</h3>
      <!-- Grid Layout for Skills -->
      <div class="custom-grid">
        <div
            v-for="(skill, index) in visibleSkills"
            :key="index"
            class="skill-item flex items-center gap-4"
        >
          <!-- Skill Image -->
          <img :src="skill.icon" :alt="skill.name + ' icon'" class="w-10 h-10 object-contain" />
          <!-- Skill Name and Progress -->
          <div class="flex-1">
            <div class="flex justify-between mb-1">
              <span class="text-lg font-semibold">{{ skill.name }}</span>
              <span class="text-sm font-medium">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-3">
              <div
                  class="bg-purple-accent h-3 rounded-full"
                  :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <button
          @click="toggleSkills"
          class="mt-4 bg-purple-accent text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition duration-200"
      >
        {{ showAllSkills ? "Show Less" : "View More" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      allSkills: [
        { name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Python", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C#", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "Vue.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: ".NET", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
        { name: "Node.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Bootstrap", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "SQL", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Linux", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Git", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ],
      visibleSkills: [],
      showAllSkills: false,
    };
  },
  mounted() {
    this.loadInitialSkills();
  },
  methods: {
    loadInitialSkills() {
      // Load the first 6 skills initially
      this.visibleSkills = this.allSkills.slice(0, 6);
    },
    toggleSkills() {
      // Toggle between showing all skills and initial 6 skills
      if (this.showAllSkills) {
        this.visibleSkills = this.allSkills.slice(0, 6);
      } else {
        this.visibleSkills = this.allSkills;
      }
      this.showAllSkills = !this.showAllSkills;
    },
  },
};
</script>

<style scoped>
.about-me-container {
  position: relative;
}

.custom-shape-divider-top-1733578886 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-top-1733578886 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 219px;
}

.custom-shape-divider-top-1733578886 .shape-fill {
  fill: #6A0DAD;
}

/* Custom Grid Layout */
.custom-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

/* Box Glow */
.box-container {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
}

.box-container::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 3px solid rgba(124, 58, 237, 0.5);
  border-radius: inherit;
  pointer-events: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.box-container:hover::before {
  border-color: #7c3aed;
  box-shadow: 0 0 15px #7c3aed;
}

/* Progress Bar */
.skill-item {
  display: flex;
  align-items: center;
}

.bg-purple-accent {
  background-color: #7c3aed;
}
</style>
