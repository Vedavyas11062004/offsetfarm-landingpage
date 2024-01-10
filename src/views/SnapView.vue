<script setup>
import Navbar from "@/components/LandingPage/Navbar.vue";
import footerContainer from "@/components/LandingPage/footerContainer.vue";
import heroSection from '@/components/Snap/heroSection.vue'
import snapSecond from '@/components/Snap/snapSecond.vue';
import snapThird from '@/components/Snap/snapThird.vue';
import snapFourth from '@/components/Snap/snapFourth.vue';
import snapLast from '@/components/Snap/snapLast.vue';
</script>

<template>
  <Navbar />
  <heroSection/>
  <snapSecond/>
  <snapThird />
  <snapFourth />
  <snapLast />
  <footerContainer />
</template>

<style scoped></style>
