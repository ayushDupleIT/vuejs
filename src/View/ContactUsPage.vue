<template>
  <div>
    <!-- Navbar Component -->
    <SiteNavbar />

    <!-- Contact Section -->
    <section class="p-8 bg-gray-100">
      <div class="container mx-auto max-w-2xl bg-white shadow-md rounded-lg p-8">
        <h2 class="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
              required
            />
          </div>
          <div class="mb-4">
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              v-model="formData.subject"
              class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Subject"
              required
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="5"
              class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>

    <!-- Footer Component -->
    <footer class="bg-gray-800 text-white p-8">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About Section -->
        <div>
          <h3 class="text-xl font-bold mb-4">About Us</h3>
          <p class="text-gray-400 text-sm">
            We are a leading car rental and sales platform, offering a wide range of vehicles to meet every need and budget. Whether you want to rent a car for a day or purchase your dream vehicle, we have the perfect solution for you.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="text-gray-400 text-sm space-y-2">
            <li><router-link to="/" class="hover:text-blue-400">Home</router-link></li>
            <li><router-link to="/about" class="hover:text-blue-400">About Us</router-link></li>
            <li><router-link to="/contact" class="hover:text-blue-400">Contact Us</router-link></li>
            <li><router-link to="/services" class="hover:text-blue-400">Our Services</router-link></li>
            <li><router-link to="/blog" class="hover:text-blue-400">Blog</router-link></li>
          </ul>
        </div>

        <!-- Contact Information -->
        <div>
          <h3 class="text-xl font-bold mb-4">Contact Us</h3>
          <ul class="text-gray-400 text-sm space-y-2">
            <li>Email: <a href="mailto:info@carwebsite.com" class="hover:text-blue-400">info@carwebsite.com</a></li>
            <li>Phone: <a href="tel:+1234567890" class="hover:text-blue-400">+1 234 567 890</a></li>
            <li>Address: 123 Car Street, Motor City, Country</li>
          </ul>
        </div>

        <!-- Follow Us Section -->
        <div>
          <h3 class="text-xl font-bold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-blue-400"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-gray-400 hover:text-blue-400"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-gray-400 hover:text-blue-400"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-gray-400 hover:text-blue-400"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      
      <!-- Bottom Footer -->
      <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; 2024 Car Website. All rights reserved. | Designed by Your Company
      </div>
    </footer>
  </div>
</template>

<script>
import SiteNavbar from '../components/SiteNavbar.vue';

export default {
  name: 'ContactPage',
  components: {
    SiteNavbar
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      alert('Message sent successfully!');
      // Clear the form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
};
</script>
