<script setup>
import Navbar from "@/components/LandingPage/Navbar.vue";
import footerContainer from "@/components/LandingPage/footerContainer.vue";
import heroSectionVue from "@/components/Teamer/heroSection.vue";
import teamerSecond from "@/components/Teamer/teamerSecond.vue";
import teamerThird from "@/components/Teamer/teamerThird.vue";
import teamerFourth from "@/components/Teamer/teamerFourth.vue";
import teamerFifth from "@/components/Teamer/teamerFifth.vue";
import teamerLast from "@/components/Teamer/teamerLast.vue";
</script>

<template>
  <Navbar />
  <heroSectionVue />
  <teamerSecond />
  <teamerThird/>
  <teamerFourth />
  <teamerFifth />
  <teamerLast/>
  <footerContainer />
</template>

<style scoped></style>
