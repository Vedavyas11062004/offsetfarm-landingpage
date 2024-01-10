<script setup>
import Navbar from "@/components/LandingPage/Navbar.vue";
import footerContainer from "@/components/LandingPage/footerContainer.vue";
import heroSectionVue from "@/components/Pulse/heroSection.vue";
import pulseSecond from '@/components/Pulse/pulseSecond.vue'
import pulseThird from '@/components/Pulse/pulseThree.vue'
import pulseFourth from '@/components/Pulse/pulseFourth.vue'
import pulseFifth from '@/components/Pulse/pulseFifth.vue'
import pulseLastSection from '@/components/Pulse/pulseLastSection.vue'
</script>

<template>
<Navbar/>
<heroSectionVue/>
<pulseSecond/>
<pulseThird/>
<pulseFourth/>
<pulseFifth/>
<pulseLastSection/>
<footerContainer/>
</template>

<style scoped></style>