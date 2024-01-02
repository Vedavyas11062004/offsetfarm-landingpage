<script setup>
import { ref } from "vue";
import contentCard from "./contentCard.vue";
import languageImage from "@/assets/language.svg";
import subtitlesImage from "@/assets/subtitles.svg";

const data = ref([
  {
    title: "Adaptive Language",
    description:
      "Break down language barriers and speak the language of your customers, even in remote areas.",
    imageUrl: languageImage, // Use the imported image URL
  },
  {
    title: "Global Reach, Local Touch",
    description: "Connect in your local language with a global product.",
    imageUrl: subtitlesImage, // Use the imported image URL
  },
]);
</script>

<template>
  <div class="features_div">
    <div class="product_content">
      <h2>Features</h2>
      <p>
        Our suite of tools is designed to empower organizations to make a real
        difference and amplify impact.
      </p>
    </div>
    <div class="features_container">
      <div class="leftPart">
        <div class="leftContent">
          <h2>Seamless <span>Multilingual</span> Communication</h2>
          <p>
            Communicate effortlessly in any language. Our platform adapts to
            meet your customers wherever they are, even offline.
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
        <img src="@/assets/Gifs/Multilingual-language.gif" alt="img.." />
      </div>
    </div>
  </div>
</template>

<style scoped>
.features_div {
  margin-block: 80px;
}
.features_container {
  display: flex;
  align-items: center;
  width: 85%;
  justify-content: space-between;
  /* gap: 166px; */
}
.product_content {
  width: 80%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.product_content > h2 {
  color: var(--vt-c-action-color);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.583px;
}

.product_content > p {
  width: 550.661px;
  color: var(--vt-c-paragraph-color);
  margin-inline: auto;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
}

.features_container {
  margin-left: 79px;
  margin-top: 74px;
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
  background-image: url('@/assets/Gifs/Ellipse.svg');
  background-repeat: no-repeat;
  width: 470px;
  background-position: bottom;
  display: flex;
  justify-content: center;
}

.rightPart > img {
  width: 367px;
  height: 569px;
}
</style>
