<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import companies from '@/components/companies.vue';
import products from '@/components/products.vue';
import features from '@/components/features.vue';
import dynamicAssesment from '@/components/dynamicAssesment.vue';
import customerMapping from '@/components/customerMapping.vue';
import intutiveDesign from '@/components/intutiveDesigns.vue';
import reporting from '@/components/reporting.vue'
import reviews from '@/components/reviews.vue';
import industries from '@/components/industries.vue';
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
    <reviews/>
    <industries/>
  </main>
</template>
