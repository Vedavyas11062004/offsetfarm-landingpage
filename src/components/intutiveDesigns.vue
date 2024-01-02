<script setup>
import { ref } from "vue";
import contentCard from "./contentCard.vue";
import cloudOffImage from "@/assets/cloud_off.svg"; // Import the image URLs
import widgetsBlackImage from "@/assets/widgets_black.svg";

const data = ref([
  {
    title: "Offline Capabilities",
    description:
      "Our robust offline features ensure no customer is left behind, regardless of internet connectivity.",
    imageUrl: cloudOffImage, // Assign imported image URL
  },
  {
    title: "Simplified User Journey",
    description:
      "A clean, intuitive interface designed to minimize learning curves and maximize productivity.",
    imageUrl: widgetsBlackImage, // Assign imported image URL
  },
]);
</script>

<template>
  <div class="features_container">
    <div class="leftPart">
      <div class="leftContent">
        <h2><span>Intuitive</span> Designs</h2>
        <p>
          User-friendly at its core, the platform is designed for simplicity,
          enabling you to focus on what you do best: making an impact.
        </p>
      </div>
      <div class="leftFrames">
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
    <div class="rightPart">
      <img src="@/assets/Gifs/Intutive-Designs.gif" alt="img.." />
    </div>
  </div>
</template>

<style scoped>
.features_container {
  display: flex;
  align-items: center;
  /* gap: 30px; */
  margin-left: 79px;
  width: 90%;
  justify-content: space-between;
  margin-top: 50px;
}

.leftPart {
  width: 50%;
}

.leftContent > h2 {
  width: 388px;
  color: var(--vt-c-heading-color);
  font-family: Lato;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.583px;
  padding-bottom: 18px;
}
.leftContent > h2 > span {
  color: var(--vt-c-action-color);
  font-weight: 600;
}

.leftContent > p {
  color: var(--vt-c-paragraph-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.583px;
}

.leftFrames {
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.contentCard {
  width: 448px;
}

.rightPart{
  background-image: url('@/assets/Gifs/Vector.svg');
  background-repeat: no-repeat;
  width: 626.846px;
  background-position: bottom;
  display: flex;
  justify-content: center;
}

.rightPart > img {
  width: 432px;
  height: 707px;
}
</style>
