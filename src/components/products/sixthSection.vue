<script setup></script>

<template>
  <div class="last_container">
    <div class="leftPart">
      <div class="topPart">
        <h3>Payment and Inventory Tracking</h3>
        <p>
          Maintaining effective payment and inventory tracking is vital for
          streamlined operations. Real-time updates ensure optimal stock levels,
          allowing businesses to respond promptly to demand changes and enhance
          overall inventory management.
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
    </div>
    <div class="rightPart">
      <img src="@/assets/products/connect-last.svg" alt="img.." />
    </div>
  </div>
</template>

<style scoped>
.last_container {
  width: 90%;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  gap: 50px;
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
.topPart{
    margin-bottom: 54px;
}
.topPart > h3 {
  color: var(--Secondary-1ST-FontTT-color, #343434);
  font-family: Lato;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; /* 138.462% */
  margin-bottom: 21px;
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

.rightPart>img{
   width: 700px;
}

@media (max-width:1200px)
{
  .last_container{
    flex-direction: column;
    gap: 20px;
  }
  .topPart{
    margin-bottom: 15px;
  }
}

@media (max-width:600px)
{
  .rightPart>img{
    width: 344.023px;
height: 204.893px;
  }
}
</style>
