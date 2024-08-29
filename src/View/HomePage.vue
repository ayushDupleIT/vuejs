<!-- src/views/HomePage.vue -->
<template>
  <div>
    <!-- Updated component name -->
    <SiteNavbar />

    <!-- Hero Section -->
    <section class="hero bg-cover bg-center h-[34rem] flex items-center justify-left" style="background-image: url('https://img.freepik.com/free-photo/blue-car-speed-motion-stretch-style_53876-126850.jpg?ga=GA1.2.1080027314.1724925686&semt=ais_hybrid');">
      <div class="bg-white bg-opacity-70 p-12 rounded">
        <h1 class="text-4xl font-bold mb-2">Welcome to Car website</h1>
        <h2 class="text-2xl font-bold text-red-500">Find, book or  rent a car - <br /> quickly and easily! </h2>
        <p class="text-lg py-6 mt-6">Find your dream car with us today!</p>
      </div>
    </section>

    <!-- Car Cards Section -->
    <section class="p-4 px-4 pb-10">
      <h2 class="text-3xl font-bold mb-4 flex justify-center text-blue-900 py-6">Our Featured Cars</h2>
      <div class="flex overflow-x-auto space-x-4 justify-center ">
        <div v-for="car in cars" :key="car.id" class="car-card w-80 bg-white shadow-lg rounded-lg p-4 ">
          <img :src="car.image" alt="Car Image" class="w-full h-60 object-cover rounded-t-md">
          <h3 class="text-xl font-bold mt-2">{{ car.name }}</h3>
          <p class="text-gray-700">Price: {{ car.price }}</p>
          <p class="text-gray-700">Model: {{ car.model }}</p>
          <p class="text-gray-700">Country: {{ car.country }}</p>
        </div>
      </div>
    </section>

<!-- Additional Content Sections -->
<section class="p-8 bg-gray-100 pb-20">
  <h2 class="text-3xl font-bold mb-4 flex justify-center text-blue-900 py-3">Customer Testimonials</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="testimonial bg-white p-6 rounded-lg shadow-md">
      <p class="text-gray-700 italic mb-4">"I had an amazing experience with this car rental service. The car was in great condition, and the process was smooth and hassle-free!"</p>
      <div class="flex items-center">
        <img class="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Customer photo">
        <div>
          <h3 class="font-bold">John Doe</h3>
          <p class="text-sm text-gray-500">Rented a BMW X5</p>
        </div>
      </div>
    </div>
    <div class="testimonial bg-white p-6 rounded-lg shadow-md">
      <p class="text-gray-700 italic mb-4">"I found my dream car on this website and bought it with ease. The customer service was outstanding!"</p>
      <div class="flex items-center">
        <img class="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/2.jpg" alt="Customer photo">
        <div>
          <h3 class="font-bold">Jane Smith</h3>
          <p class="text-sm text-gray-500">Bought a Tesla Model S</p>
        </div>
      </div>
    </div>
    <div class="testimonial bg-white p-6 rounded-lg shadow-md">
      <p class="text-gray-700 italic mb-4">"Great selection of cars and the website is very user-friendly. Highly recommend to anyone looking for a car!"</p>
      <div class="flex items-center">
        <img class="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/3.jpg" alt="Customer photo">
        <div>
          <h3 class="font-bold">Michael Lee</h3>
          <p class="text-sm text-gray-500">Rented a Mercedes-Benz G-Class</p>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Footer -->
  <!-- Footer Section -->
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
    &copy; 2024 Car Website. All rights reserved. | Designed by Ayush Panday
  </div>
</footer>

  </div>
</template>

<script>
import SiteNavbar from '../components/SiteNavbar.vue'; // Updated import

export default {
  name: 'HomePage',
  components: {
    SiteNavbar // Updated component registration
  },
  data() {
    return {
      cars: [
        { id: 1, name: 'Tesla Model S', price: '$80,000', model: '2024', country: 'USA', image: 'https://img.freepik.com/free-photo/blue-jeep-photo-shooting-sunset_114579-4043.jpg?ga=GA1.2.1080027314.1724925686&semt=ais_hybrid' },
        { id: 2, name: 'BMW X5', price: '$60,000', model: '2023', country: 'Germany', image: 'https://img.freepik.com/premium-photo/speeding-cars-urban-highway-dynamic-traffic-scene_1155708-22847.jpg?ga=GA1.2.1080027314.1724925686&semt=ais_hybrid' },
        { id: 2, name: 'Mercedes XL5', price: '$70,000', model: '2023', country: 'Russia', image: 'https://img.freepik.com/premium-photo/silver-suv-with-license-plate-that-says-g-lg_1230717-129422.jpg?ga=GA1.2.1080027314.1724925686&semt=ais_hybrid' },
        { id: 2, name: 'Toyota Fortuner', price: '$30,000', model: '2021', country: 'India', image: 'https://img.freepik.com/premium-photo/fortuner-s-car-is-parked-sandy-beach-with-waves-crashing-background-ai-generated_921540-7500.jpg?ga=GA1.2.1080027314.1724925686&semt=ais_hybrid' },
        // Add more car objects here
      ]
    };
  }
};
</script>
