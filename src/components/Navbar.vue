<template>
  <nav class="bg-darkest-blue text-white fixed w-full z-10">
    <div class="container mx-auto px-4 flex items-center h-16 justify-between">
      <!-- Site Name -->
      <div class="logo border-b-4 border-purple-accent">
        <router-link to="/" class="text-white text-xl font-bold">Portfolio Niels</router-link>
      </div>
      <!-- Right Aligned Links -->
      <div class="flex space-x-6">
        <router-link
            to="/"
            class="nav-link transition duration-300"
        >
          Home
        </router-link>
        <a
            href="#about"
            class="nav-link transition duration-300"
        >
          About
        </a>
        <router-link
            to="/projects"
            class="nav-link transition duration-300"
        >
          Projects
        </router-link>
        <router-link
            to="/contact"
            class="nav-link transition duration-300"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.nav-link {
  position: relative;
  color: white;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 4px;
  bottom: -4px;
  left: 0;
  background-color: #6a0dad;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}
</style>