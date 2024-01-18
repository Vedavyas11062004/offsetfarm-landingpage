<script setup>
import contentCard from "@/components/LandingPage/contentCard.vue";
import img1 from "@/assets/Pulse/icon-5.1.svg";
import img2 from "@/assets/Pulse/icon-5.2.svg";
</script>

<template>
  <div class="thirdSection_container">
    <div class="leftPart">
      <div class="backgroundImage">
        <img src="@/assets/Pulse/Chart.svg" alt="img.." class="image" />
      </div>
    </div>
    <div class="rightPart">
      <div class="section_leftPart">
        <div class="leftContent">
          <span>INSTANT INSIGHTS</span>
          <h3>Simplify Management with Automated, Tailored Reports</h3>
        </div>
        <div class="contentCards_container">
          <contentCard
            :imageUrl="img1"
            title="Automated Report Generation"
            description="Produce detailed reports with a click, saving time and increasing accuracy."
          />
          <contentCard
            :imageUrl="img2"
            title="Customizable Data Views"
            description="Tailor reports to stakeholder needs, highlighting key figures and insights."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thirdSection_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  /* width: 90%; */
  /* margin-inline: auto; */
  position: relative;
  align-items: center;
  margin-block: 5rem;
}
.leftPart {
  width: 50%;
}
.rightPart {
  width: 90%;
}
.backgroundImage {
  border-radius: 26px;
  background: var(--Patel-purple, #f3f5ff);
  width: 479.454px;
  height: 628px;
  position: relative;
}

.image {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translateY(-50%);
}
.topPart {
  margin-bottom: 27px;
}
.topPart > h3 {
  color: var(--Secondary-1ST-FontTT-color, #343434);
  font-family: Lato;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.583px;
}

.topPart > p {
  color: var(--2nd-font-color, #575353);
  text-align: justify;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 129%; /* 23.22px */
}
.card_content {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}
.card_content > img {
  margin-top: 8px;
}
.content_text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.content_text > h3 {
  color: var(--action-color, #5b70af);
  font-family: Lato;
  font-size: 20.813px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 153.754% */
  letter-spacing: 0.1px;
}

.content_text > p {
  color: var(--vt-c-paragraph-color);
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.583px;
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
  padding-block: 6px;
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
.contentCards_container {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 70%;
}

@media (max-width: 1200px) {
  .thirdSection_container {
    width: 90%;
    margin-inline: auto;
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .leftContent > span {
    color: var(--Action-color, var(--action-color, #5b70af));
    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.583px;
  }
  .leftContent > h3 {
    color: var(--Secondary-1ST-FontTT-color, #343434);
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
  }
  .content_text > h3 {
    color: var(--Secondary-1ST-FontTT-color, #343434);
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: 0.2px;
  }
  .content_text > p {
    color: var(--2nd-font-color, #575353);
    text-align: justify;
    font-family: Lato;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    letter-spacing: 0.2px;
  }
  .contentCards_container{
    width: 100%;
    gap: 20px;
  }
  .leftPart{
    grid-row: 2/3;
  }
}
@media (max-width: 600px) {
  .image {
    width: 270px;
    left: 30%;
  }
  .backgroundImage {
    width: 260px;
    height: 291px;
    transform: translateX(-20%);
  }
}
</style>
