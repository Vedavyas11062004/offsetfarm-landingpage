<script setup>
import { ref } from "vue";
import contentCard from "./contentCard.vue";
const data = ref([
  {
    title: "Data-Driven Relationships",
    description:
      "Generate a nuanced understanding of your customers through advanced lead generation, turning data into relationships",
    imageUrl: "src/assets/insights.svg",
  },
  {
    title: "Advanced Customer Insights",
    description:
      "Generate a nuanced understanding of your customers through advanced lead generation, turning data into relationships",
    imageUrl: "src/assets/analytics.svg",
  },
]);
</script>

<template>
  <div class="assesment_container">
    <div class="leftPart">
      <div class="assesment_content">
        <h2><span>Dynamic</span> Lead Assessment</h2>
        <p>
          Generate a nuanced understanding of your customers through advanced
          lead generation, turning data into relationships
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
  </div>
</template>

<style scoped>
.assesment_container {
  margin-inline: 77px;
  margin-bottom: 142px;
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
  margin-inline: auto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
}

.cards{
    display: flex;
    gap: 80px;
}
</style>
