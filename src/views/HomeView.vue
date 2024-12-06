<template>
  <div class="bg-dark-blue text-white min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p class="text-lg mb-8">Explore my projects and learn more about me.</p>
      <router-link to="/projects" class="bg-blue-accent text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        More about me
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
/* Add any additional styles here */
</style>