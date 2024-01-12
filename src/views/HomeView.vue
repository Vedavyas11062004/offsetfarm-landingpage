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
import { ref, onMounted } from "vue";
import Navbar from "@/components/LandingPage/Navbar.vue";

const reviewsSectionRef = ref(null);
const industriesSectionRef = ref(null);
const heroSectionRef = ref(null);

onMounted(() => {
  // Set the reviewsSectionRef to the reviews section element after the component is mounted
  reviewsSectionRef.value = document.getElementById('reviews-section');
  industriesSectionRef.value = document.getElementById('industries-section');
  heroSectionRef.value = document.getElementById('hero-section');
});

const scrollToReviews = () => {
  console.log("hello");
  if (reviewsSectionRef.value) {
    reviewsSectionRef.value.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToIndustries = () =>{
  console.log("hello");
  if (industriesSectionRef.value) {
    industriesSectionRef.value.scrollIntoView({ behavior: 'smooth' });
  }
}

const scrollToHome = () =>{
  // if (heroSectionRef.value) {
  //   heroSectionRef.value.scrollIntoView({ behavior: 'smooth'});
  // }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <main>
    <Navbar @scrollToReviews="scrollToReviews" @scrollToIndustries="scrollToIndustries"/>
    <TheWelcome id="hero-section"/>
    <companies />
    <products />
    <features />
    <dynamicAssesment />
    <customerMapping />
    <intutiveDesign />
    <reporting />
    <reviews id="reviews-section"/>
    <industries id="industries-section" />
    <footerContainer />
    <div class="btn" @click="scrollToHome">
      <img src="@/assets/LandingPage/upArrow.svg" alt="arrow" />
    </div>
  </main>
</template>

<style scoped>
.btn {
  position: fixed;
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
