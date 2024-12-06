<template>
  <nav class="bg-darkest-blue text-white fixed w-full z-10">
    <div class="container mx-auto px-4 flex items-center h-16 relative">
      <!-- Site Name -->
      <div class="logo border-b-4 border-purple-accent">
        <router-link to="/" class="text-white text-xl font-bold">Portfolio Niels</router-link>
      </div>
      <!-- Centered Links -->
      <div class="absolute left-1/2 transform -translate-x-1/2 mt-4">
        <div class="border-4 border-purple-accent rounded-full py-2 px-6 flex flex-wrap justify-center space-x-6">
          <router-link
              to="/"
              class="hover:text-purple-accent transition duration-300"
          >
            Home
          </router-link>
          <router-link
              to="/about"
              class="hover:text-purple-accent transition duration-300"
          >
            About
          </router-link>
          <router-link
              to="/projects"
              class="hover:text-purple-accent transition duration-300"
          >
            Projects
          </router-link>
          <router-link
              to="/contact"
              class="hover:text-purple-accent transition duration-300"
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