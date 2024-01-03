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
    <div class="leftContent">
      <h2><span>Intuitive</span> Designs</h2>
      <p>
        User-friendly at its core, the platform is designed for simplicity,
        enabling you to focus on what you do best: making an impact.
      </p>
    </div>
    <div class="rightPart">
      <img src="@/assets/Gifs/Intutive-Designs.gif" alt="img.." />
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
</template>

<style scoped>
.features_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  margin-left: 79px;
  width: 90%;
  margin-top: 50px;
}

.leftContent {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  height: fit-content;
  align-self: self-end;
}

.leftFrames {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  align-self: self-start;
}

.rightPart {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
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

.rightPart {
  background-image: url("@/assets/Gifs/Vector.svg");
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

@media (max-width: 800px) {
  .features_container {
    margin-left: 0%;
    grid-template-columns: 1fr;
    width: 90%;
    margin-inline: auto;
    /* overflow: hidden; */
  }
  .rightPart {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  .leftContent > h2 {
    font-size: 28px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.583px;
    text-align: center;
  }
  .leftContent > p {
    width: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* text-align: center; */
  }
  .rightPart{
    width: 90%;
    margin-inline: auto;
    background-size: contain;
  }
  .rightPart > img {
    width: 197.355px;
    height: 339.488px;
  }
  .contentCard{
    width: auto;
  }
  /* .leftFrames{
    width: 90%;
    margin-inline: auto;
  } */
}
</style>
