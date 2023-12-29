<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import companies from "@/components/companies.vue";
import products from "@/components/products.vue";
import features from "@/components/features.vue";
import dynamicAssesment from "@/components/dynamicAssesment.vue";
import customerMapping from "@/components/customerMapping.vue";
import intutiveDesign from "@/components/intutiveDesigns.vue";
import reporting from "@/components/reporting.vue";
import reviews from "@/components/reviews.vue";
import industries from "@/components/industries.vue";
import footerContainer from "@/components/footerContainer.vue";
import { ref } from "vue";

const scrollToHero = () => {
  window.scrollTo(0, 0);
};
</script>

<template>
  <main>
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
      <img src="@/assets/upArrow.svg" alt="arrow" />
    </div>
  </main>
</template>

<style scoped>
.btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.btn:hover {
  cursor: pointer;
}
</style>
