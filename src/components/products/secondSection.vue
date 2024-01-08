<script setup>
import contentCard from "@/components/LandingPage/contentCard.vue";
import img1 from "@/assets/products/contentCard1.svg";
import img2 from "@/assets/products/contentCard2.svg";
</script>
<template>
  <div class="section_container">
    <div class="container">
      <div class="section_leftPart">
        <div class="leftContent">
          <span>OFFLINE LEAD COLLECTION</span>
          <h3>Effortless Offline-to-Online Lead Management</h3>
          <p>Efficiently capture and manage leads anywhere, at any time.</p>
        </div>
        <div class="contentCards_container">
          <contentCard
            :imageUrl="img1"
            title="Never Miss a Lead"
            description="Collect lead data offline, ensuring you capture potential customers in every environment."
          />
          <contentCard
            :imageUrl="img2"
            title="Sync with Ease"
            description="Automatically update your database once online, ensuring no lead is overlooked."
          />
        </div>
      </div>
    </div>
    <div class="section_rightPart"></div>
  </div>
</template>

<style scoped>
.section_container {
  display: flex;
  padding-block: 126px;
  background-image: url("@/assets/products/second_section_background.svg");
  margin-block: 50px;
}
.container {
  width: 90%;
  margin-inline: auto;
}
.section_leftPart {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.leftContent > span {
  color: var(--action-color, #5b70af);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
  letter-spacing: 0.2px;
}
.leftContent > h3 {
  color: var(--Secondary-1ST-FontTT-color, #343434);
  font-family: Lato;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px; /* 126.316% */
  letter-spacing: -0.2px;
  padding-block:6px;
}
.leftContent > p {
  color: var(--2nd-font-color, #575353);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
  letter-spacing: 0.2px;
}
.contentCards_container{
    flex-basis:50%;
    max-width:50%;
    display:flex;
    flex-direction:column;
    gap:48px;
}
</style>
