<!-- src/components/SiteNavbar.vue -->
<template>
  <nav class="bg-blue-400 text-black px-4 py-6 flex justify-between items-center">
    <div class="text-2xl font-bold px-3">Car <span class="text-red-500">Website</span></div>
    <div class="space-x-8 px-4">
      <router-link to="/" class="font-bold ext-weight-900 hover:text-blue-800">Home</router-link>
      <router-link to="/about" class="font-bold hover:text-blue-900">About</router-link>
      <router-link to="/contact" class="font-bold hover:text-blue-900">Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SiteNavbar' // Updated component name
};
</script>
