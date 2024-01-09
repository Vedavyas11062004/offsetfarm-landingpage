<script setup>
import { ref } from "vue";
import contentCard from "@/components/LandingPage/contentCard.vue";
import source from "@/assets/Trace/source_black_24dp 1.svg"; // Import the image URLs
import archive from "@/assets/Trace/archive-tray-duotone 1.svg";

const data = ref([
  {
    title: "Direct Accountability",
    description:
      "Connect team members to customers, making it clear who is responsible for each client.",
    imageUrl: source,
  },
  {
    title: "Enhanced Focus",
    description:
      "Allow teams to see only the customers and tasks relevant to them, preventing information overload.",
    imageUrl: archive,
  },
]);
</script>

<template>
  <div class="features_container">
    <div class="leftContent">
      <h2>Customer-Team Mapping</h2>
    </div>
    <div class="rightPart">
      <img src="@/assets/Teamer/fourthSection.svg" alt="img.." />
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
  width: 90%;
  margin-inline:auto;
  margin-block: 80px;
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
  justify-self: self-end;
}

.leftContent > h2 {
  color: #262626;
  font-family: Lato;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 126.316% */
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


@media (max-width: 1200px) {
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
    width: auto;
  }
  .leftContent > p {
    width: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* text-align: center; */
  }
  .rightPart {
    width: 90%;
    margin-inline: auto;
    background-size: contain;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .rightPart > img {
    width: 197.355px;
    height: 339.488px;
  }
  .contentCard {
    width: auto;
    margin-inline: 0px;
  }
  .leftFrames {
    margin-top: 0%;
  }
}
</style>
