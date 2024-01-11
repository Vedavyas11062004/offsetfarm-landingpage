<script setup></script>

<template>
  <div class="thirdSection_container">
    <div class="leftPart">
      <div class="backgroundImage">
        <img
          src="@/assets/products/connectThird.svg"
          alt="img.."
          class="image"
        />
      </div>
    </div>
    <!-- <div class="rightPart"> -->
    <div class="topPart">
      <h3>Rapid Customer Qualification</h3>
      <p>
        Speed up the journey from potiential lead to confirmed customer with our
        simplified process. We've made it easy to qualify customers rapidly,
        minimizing delays in the transition. Our smart validation system ensures
        that the onboarding process is not only quick but also maintains high
        standards.
      </p>
    </div>
    <div class="bottomPart">
      <div class="card_content">
        <img src="@/assets/LandingPage/pseudo-line.svg" alt="line" />
        <div class="content_text">
          <h3>Unlock a 90%</h3>
          <p>
            reduction in decision-making time! Experience a revolutionary
            approach to approval processes as we introduce a method that
            streamlines the entire experience.
          </p>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<style scoped>
.thirdSection_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  width: 90%;
  margin-inline: auto;
  position: relative;
  align-items: center;
  margin-block: 2rem;
  row-gap: 20px;
}
.leftPart {
  width: 50%;
  grid-row: 1/3;
  grid-column: 1/2;
}
.backgroundImage {
  border-radius: 26px;
  background: var(--Patel-purple, #f3f5ff);
  width: 437px;
  height: 374px;
  position: relative;
}

.image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
}
.topPart {
  align-self: self-end;
}
.topPart > h3 {
  color: var(--Secondary-1ST-FontTT-color, #343434);
  font-family: Lato;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.583px;
  padding-bottom: 10px;
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

.bottomPart {
  grid-column: 2/3;
  align-self: self-start;
}

@media (max-width: 1200px) {
  .thirdSection_container {
    grid-template-columns: 1fr;
    width: 100%;
  }
  .leftPart {
    grid-column: 1/2;
    grid-row: 2/3;
    /* transform: translateX(-40%); */
    width: 90%;
    margin-inline: auto;
  }
  .bottomPart {
    grid-column: 1/2;
    width: 90%;
    margin-inline: auto;
  }
  .topPart {
    grid-column: 1/2;
    grid-row: 1/2;
    width: 90%;
    margin-inline: auto;
  }
  .content_text > h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.583px;
  }
  .content_text > p {
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.583px;
  }
}

@media (max-width: 600px) {
  .image {
    width: 300px;
  }
  .backgroundImage {
    width: 260px;
    height: 291px;
    transform: translateX(-20%);
  }
}
</style>
