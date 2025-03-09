<template>
  <div class="bg-darkest-blue text-white min-h-screen flex flex-col items-center justify-center relative">
    <div
        v-for="project in projects"
        :key="project.id"
        class="group relative bg-zinc-900/50 rounded-2xl p-10 shadow-lg shadow-black/80 flex md:flex-row flex-col md:items-start items-center justify-center gap-20 backdrop-blur-md box-container"
        style="width: 1000px; max-width: 1000px; margin-bottom: 40px;"
    >
      <!-- Left Section -->
      <div class="flex-1 flex md:flex-row flex-col items-center gap-8 text-center md:text-left">
        <!-- Image Placeholder -->
        <div class="w-64 h-64 bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
          <img :src="project.imageSrc" alt="Project Screenshot" class="w-full h-full object-cover" />
        </div>
        <!-- Right Section -->
        <div>
          <h2 class="font-bold text-4xl tracking-tighter mb-3">{{ project.title }}</h2>
          <div class="text-3xl">
            <span class="mr-2">{{ project.description }}</span>
          </div>
          <!-- Glow Button -->
          <button class="glow-button font-semibold px-6 bg-zinc-950/50 backdrop-blur-md py-3 rounded-xl text-white/90 border-[2px] border-gray-700 mt-6">
            View Project
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectView",
  data() {
    return {
      projects: [
        {
          id: 1,
          imageSrc: "path/to/project-image-1.jpg",
          title: "Project Title 1",
          description: "Project Description 1",
        },
        {
          id: 2,
          imageSrc: "path/to/project-image-2.jpg",
          title: "Project Title 2",
          description: "Project Description 2",
        },
        // Add more project objects as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Box Glow */
.box-container {
  position: relative;
}

.box-container::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 3px solid #4a5568; /* Default gray border */
  border-radius: inherit;
  pointer-events: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.box-container:hover::before {
  border-color: #7c3aed; /* Glow color */
  box-shadow: 0 0 15px #7c3aed;
}

/* Disable Glow on Box when Button is Hovered */
.glow-button:hover ~ .box-container::before {
  border-color: #4a5568; /* Reset to default gray */
  box-shadow: none; /* Remove the glow */
}

/* Button Glow Effect */
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

/* Glow effect for the text */
.glow-effect {
  text-shadow: 0 0 8px #7c3aed, 0 0 16px #7c3aed;
}

/* Background Colors */
.bg-darkest-blue {
  background-color: #1E1E3F;
}

.bg-lightest-blue {
  background-color: #F3F4F6;
}
</style> 