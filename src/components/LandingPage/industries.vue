<script setup>
import { ref } from "vue";
import contentCard from "./contentCard.vue";
import plantDuotoneImage from "@/assets/LandingPage/plant-duotone.svg"; // Import the image URLs
import leafBlackImage from "@/assets/LandingPage/leaf_black.svg";
import tipsImage from "@/assets/LandingPage/tips.svg";

const data = ref([
  {
    title: "Carbon Markets",
    description:
      "Navigate the carbon markets with precision and high quality MRV. We cater to distributed energy projects working on highly impactful outcomes.",
    imageUrl: plantDuotoneImage, // Assign imported image URL
  },
  {
    title: "Energy Access",
    description:
      "Lighting up lives with equitable energy access. Enable inclusive energy access powered by tech. Be it distributing a solar pump in a remote village, LED lights, biogas units, we cover them all.",
    imageUrl: leafBlackImage, // Assign imported image URL
  },
  {
    title: "Energy Efficiency",
    description:
      "Maximizing output with minimal input. Champion projects that redefine energy optimization. Be it energy efficiency in household cooking or buildings.",
    imageUrl: tipsImage, // Assign imported image URL
  },
]);
</script>

<template>
  <div class="industries_container">
    <div class="leftPart">
      <h2>Industries</h2>
      <p>
        Enabling sustainable solutions and catalyzing transformative impact
        where it's needed most.
      </p>
    </div>
    <div class="cards">
      <contentCard
        v-for="card in data"
        :key="card.title"
        :title="card.title"
        :description="card.description"
        :imageUrl="card.imageUrl"
        class="contentCard"
      />
    </div>
  </div>
</template>

<style scoped>
.leftPart > h2 {
  width: 388px;
  color: var(--vt-c-action-color);
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.583px;
  padding-bottom: 18px;
}

.leftPart > p {
  color: var(--vt-c-paragraph-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.583px;
  margin-bottom: 2rem;
  width: 331px;
}
.industries_container {
  display: flex;
  padding-inline: 77px;
  padding-block: 117px;
  gap: 49px;
  align-items: center;
}

.cards {
  display: flex;
  gap: 37px;
}

@media (max-width: 1200px) {
  .industries_container {
    flex-direction: column;
    padding-inline: 0px;
    gap: 10px;
    padding-block: 50px;
  }
  .cards {
    flex-direction: column;
    gap: 20px;
    width: 90%;
    margin-inline: auto;
  }
  .leftPart {
    width: 90%;
    margin-inline: auto;
  }
  .leftPart > h2 {
    width: auto;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: 0.1px;
  }
  .leftPart > p {
    width: auto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 10px;
  }
}
</style>
