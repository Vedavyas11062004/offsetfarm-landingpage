<script setup>
import { ref } from "vue";
import productCard from "@/components/productCards.vue";
import image1 from "@/assets/connect-img.svg";
import image2 from "@/assets/Trace-img.svg";
import image3 from "@/assets/Teamer-img.svg";
import image4 from "@/assets/Pulse-img.svg";
import image5 from "@/assets/snap-img.svg";
const data = ref([
  {
    title: "CONNECT",
    description:
      "For the first connect with customers and beneficiaries. From dynamic lead generation, orders, to seamless inventory management, automate essential processes with CONNECT",
    imageUrl: image1,
  },
  {
    title: "TRACE",
    description:
      "Robust project MRV and customer traceability. Dynamic forms enable efficient customer monitoring and grievance handling with TRACE",
    imageUrl: image2,
  },
  {
    title: "TEAMER",
    description:
      "Craft virtual teams with purpose. Designate roles, hierarchies, and assign impactful projects effortlessly with TEAMER.",
    imageUrl: image3,
  },
  {
    title: "PULSE",
    description:
      "Navigate your project's pulse. From SDG impacts, milestone snapshots to financial insights, PULSE is a comprehensive project dashboard.",
    imageUrl: image4,
  },
  {
    title: "SNAP",
    description:
      "Real-time communication, real-time trust. Keep your investors informed and engaged with transparent, up-to-the-minute data reporting.",
    imageUrl: image5,
  },
]);
</script>

<template>
  <div>
    <div class="product_content">
      <h2>Product <span>Overview</span></h2>
      <p>
        Empower your enterprise with technology to generate actionable data,
        insights and metrics. Drive impactful climate action and SDGs!
      </p>
    </div>
    <div class="cardsContainer">
      <productCard
        v-for="card in data"
        :key="card.title"
        :title="card.title"
        :description="card.description"
        :imageUrl="card.imageUrl"
      />
    </div>
  </div>
</template>

<style scoped>
.product_content {
  width: 80%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 18px;
  gap: 10px;
}

.product_content > h2 {
  color: var(--vt-c-heading-color);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.583px;
}

.product_content > h2 > span {
  color: var(--vt-c-action-color);
  font-weight: 700;
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
.cardsContainer {
  width: 80%;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 42px;
}

@media (max-width: 800px) {
  .product_content {
    width: 90%;
    margin-inline: auto;
    overflow: hidden;
  }
  .product_content > h2 {
    font-size: 28px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.583px;
  }
  .product_content > p {
    width: auto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .cardsContainer{
    width: 90%;
  }
}
</style>
