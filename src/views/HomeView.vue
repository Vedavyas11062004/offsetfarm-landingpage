<script setup>
import TheWelcome from "@/components/LandingPage/TheWelcome.vue";
import companies from "@/components/LandingPage/companies.vue";
import products from "@/components/LandingPage/products.vue";
import features from "@/components/LandingPage/features.vue";
import dynamicAssesment from "@/components/LandingPage/dynamicAssesment.vue";
import customerMapping from "@/components/LandingPage/customerMapping.vue";
import intutiveDesign from "@/components/LandingPage/intutiveDesigns.vue";
import reporting from "@/components/LandingPage/reporting.vue";
import reviews from "@/components/LandingPage/reviews.vue";
import industries from "@/components/LandingPage/industries.vue";
import footerContainer from "@/components/LandingPage/footerContainer.vue";
import { ref } from "vue";
import Navbar from "@/components/LandingPage/Navbar.vue";

const scrollToHero = () => {
  window.scrollTo(0, 0);
};
</script>

<template>
  <main>
    <Navbar/>
    <TheWelcome />
    <companies />
    <products />
    <features />
    <dynamicAssesment />
    <customerMapping />
    <intutiveDesign />
    <reporting />
    <reviews />
    <industries />
    <footerContainer />
    <div class="btn" @click="scrollToHero">
      <img src="@/assets/LandingPage/upArrow.svg" alt="arrow" />
    </div>
  </main>
</template>

<style scoped>
.btn {
  position: fixed;
  /* bottom: 20px; */
  top: 658px;
  right: 20px;
}
.btn:hover {
  cursor: pointer;
}

@media(max-width: 1200px){
  .btn{
    display: none;
  }
}
</style>
