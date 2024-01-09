<script setup>
import { ref } from "vue";
import contentCard from "@/components/LandingPage/contentCard.vue";
import truckImage from "@/assets/products/local_shipping_black_24dp 1.svg";
import analyticsImage from "@/assets/products/track_changes_black_24dp 1.svg";

const data = ref([
  {
    title: "Accelerate Order Fulfillment",
    description:
      "Increase order processing speed by 90% with simplified workflows.",
    imageUrl: truckImage,
  },
  {
    title: "Track Dispatches Efficiency",
    description:
      "Gain real-time visibility into order status, reducing errors.",
    imageUrl: analyticsImage,
  },
]);
</script>

<template>
  <div class="assesment">
    <div class="assesment_content">
      <h2>Automated Order to Dispatch</h2>
      <p>
        Simplify the order lifecycle with automated processing and tracking.
      </p>
    </div>
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
        src="@/assets/products/fourthSection.svg"
        alt="connect fourth Section"
      />
    </div>
  </div>
</template>

<style scoped>
.assesment {
  /* margin-left: 77px; */
  /* margin-bottom: 142px; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  width: 90%;
  margin-inline: auto;
  position: relative;
  align-items: center;
  margin-block: 5rem;
}

.leftPart {
  grid-column: 1/2;
  align-self: self-start;
}

.cards{
  display: flex;
  align-self:flex-start;
}
.assesment_content {
  margin-bottom: 26px;
  align-self: self-end;
}
.assesment_content > h2 {
  color: var(--Secondary-1ST-FontTT-color, #343434);
  font-family: Lato;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.583px;
}

.assesment_content > h2 > span {
  color: var(--vt-c-action-color);
  font-weight: 600;
}

.assesment_content > p {
  color: var(--2nd-font-color, #575353);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: 0.2px;
}

.rightPart {
  grid-column: 2/3;
  grid-row: 1/3;
  justify-self: self-end;
}
.rightPart > img {
  /* width: 656px; */
  max-width: 100%; /* Ensure the image doesn't exceed the container */
  height: auto;
  display: block; 
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

  .rightPart {
    margin-inline: auto;
  }
  .rightPart > img {
    width: 336px;
    height: 208px;
    margin-inline: auto;
  }
  .cards {
    flex-direction: column;
    gap: 25px;
  }
  .leftPart {
    width: auto;
  }
  .contentCard {
    width: auto;
  }
}
</style>
