<script setup>
import heroPage from "@/components/Trace/heroPage.vue";
import Navbar from "@/components/LandingPage/Navbar.vue";
import secondSection from "@/components/Trace/secondSection.vue";
import traceThird from '@/components/Trace/traceThird.vue';
import traceFourth from '@/components/Trace/fourthTrace.vue';
import lastSection from '@/components/Trace/lastSection.vue';
import footerContainer from "@/components/LandingPage/footerContainer.vue";
</script>

<template>
  <Navbar />
  <heroPage />
  <secondSection />
  <traceThird />
  <traceFourth />
  <lastSection />
  <footerContainer />
</template>

<style scoped></style>
