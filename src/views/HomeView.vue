<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import companies from '@/components/companies.vue';
import products from '@/components/products.vue';
import features from '@/components/features.vue';
import dynamicAssesment from '@/components/dynamicAssesment.vue';
</script>

<template>
  <main>
    <TheWelcome />
    <companies />
    <products />
    <features />
    <dynamicAssesment /> 
  </main>
</template>
