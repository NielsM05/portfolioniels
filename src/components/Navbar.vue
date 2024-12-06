<template>
  <nav class="bg-dark-blue text-white fixed w-full z-10">
    <div class="container mx-auto px-4 flex items-center h-16 relative">
      <!-- Site Name -->
      <div class="logo">
        <router-link to="/" class="text-white text-xl font-bold">Portfolio Niels</router-link>
      </div>
      <!-- Centered Links -->
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <div class="flex space-x-6">
          <router-link
              to="/"
              class="hover:text-blue-accent transition duration-300"
          >
            Home
          </router-link>
          <router-link
              to="/about"
              class="hover:text-blue-accent transition duration-300"
          >
            About
          </router-link>
          <router-link
              to="/projects"
              class="hover:text-blue-accent transition duration-300"
          >
            Projects
          </router-link>
          <router-link
              to="/contact"
              class="hover:text-blue-accent transition duration-300"
          >
            Contact
          </router-link>
        </div>
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