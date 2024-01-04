<script setup>
import { ref } from "vue";
import contentCard from "./contentCard.vue";
import insightsImage from "@/assets/insights.svg";
import analyticsImage from "@/assets/analytics.svg";

const data = ref([
  {
    title: "Data-Driven Relationships",
    description:
      "Generate a nuanced understanding of your customers through advanced lead generation, turning data into relationships",
    imageUrl: insightsImage,
  },
  {
    title: "Advanced Customer Insights",
    description:
      "Generate a nuanced understanding of your customers through advanced lead generation, turning data into relationships",
    imageUrl: analyticsImage,
  },
]);
</script>

<template>
  <div class="assesment">
    <div class="assesment_content">
      <h2><span>Dynamic</span> Lead Assessment</h2>
      <p>
        Generate a nuanced understanding of your customers through advanced lead
        generation, turning data into relationships
      </p>
    </div>
    <div class="assesment_container">
      <div class="leftPart">
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
      <div class="rightPart">
        <img
          src="@/assets/Gifs/DYNAMIC LEAD ASSESMENT.gif"
          alt="dynamic assesment"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.assesment {
  margin-left: 77px;
  margin-bottom: 142px;
}
.assesment_container {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}
.leftPart {
  width: 55%;
}
.assesment_content {
  margin-bottom: 26px;
}
.assesment_content > h2 {
  color: var(--vt-c-heading-color);
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.583px;
  padding-bottom: 18px;
}

.assesment_content > h2 > span {
  color: var(--vt-c-action-color);
  font-weight: 600;
}

.assesment_content > p {
  color: var(--vt-c-paragraph-color);
  /* margin-inline: auto; */
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  width: 50%;
}

.cards {
  display: flex;
  gap: 80px;
}

.rightPart > img {
  width: 656px;
}

@media (max-width: 1200px) {
  .assesment {
    margin-left: 0%;
    margin-bottom: 50px;
  }
  .assesment_content > h2 {
    font-size: 28px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.583px;
  }
  .assesment_content > p {
    width: auto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .assesment_content {
    width: 90%;
    margin-inline: auto;
    overflow: hidden;
  }
  .assesment_container {
    flex-direction: column-reverse;
    width: 90%;
    margin-inline: auto;
    align-items: start;
  }

  .rightPart{
    margin-inline: auto;
  }
  .rightPart > img {
    width: 336px;
    height: 208px;
    margin-inline: auto;
  }
  .cards{
    flex-direction: column;
    gap: 25px;
  }
  .leftPart{
    width: auto;
  }
  .contentCard{
    width: auto;
  }
}
</style>
