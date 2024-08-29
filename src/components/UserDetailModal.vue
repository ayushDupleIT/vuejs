<!-- src/components/UserDetailModal.vue -->
<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-red-100 p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h2 class="text-xl font-bold mb-4">{{ user.name }}</h2>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Phone:</strong> {{ user.phone }}</p>
      <button @click="$emit('close')" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDetailModal',
  props: {
    user: Object
  }
};
</script>
<!-- src/components/UserDetailModal.vue -->
<style scoped>
.fixed {
  z-index: 50; /* Ensure the modal is above other content */
}
</style>
