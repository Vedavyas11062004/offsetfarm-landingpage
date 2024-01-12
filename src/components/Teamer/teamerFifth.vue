<template>
  <div class="background_container">
    <div class="fifth_container">
      <div class="topPart">
        <span
          >Maintain a bird's-eye view of your entire organization's operations
          from a single point.</span
        >
        <h2>Centralized Oversight</h2>
      </div>
      <div class="bottomPart">
        <div class="leftPart">
          <div>
            <img src="@/assets/Teamer/div.service-icon.svg" alt="img1" />
            <div class="left_content">
              <h3>Real-Time Visibility</h3>
              <p>
                Gain instant insights into team activities and customer
                engagement levels.
              </p>
            </div>
          </div>
          <div>
            <img src="@/assets/Teamer/div.service-icon.svg" alt="img1" />
            <div class="left_content">
              <h3>Ensure Compliance</h3>
              <p>
                Monitor team adherence to processes and protocols, reducing
                errors and ensuring quality standards.
              </p>
            </div>
          </div>
        </div>
        <div class="rightPart">
          <img src="@/assets/Teamer/TeamerFive.svg" alt="img2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.topPart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
}
.topPart > span {
  color: #374c8b;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.3px;
  text-transform: uppercase;
  text-align: center;
}

.topPart > h2 {
  color: #321370;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px; /* 116.667% */
  letter-spacing: -2px;
}
.fifth_container {
  width: 90%;
  margin-inline: auto;
  /* display: flex; */
}
.background_container {
  width: 100%;
  background: var(
    --linearr,
    linear-gradient(0deg, #e9e9f9 0.76%, rgba(225, 226, 255, 0) 100%)
  );
  margin-block: 4rem;
  padding-block: 80px;
}
.bottomPart {
  display: flex;
  align-items: center;
  gap: 80px;
}
.rightPart > img {
  width: 655.358px;
}

.leftPart {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.leftPart > div {
  display: flex;
  gap: 18px;
}

.left_content > h3 {
  color: var(--action-color, #5b70af);
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.4px;
}
.left_content > p {
  color: #7b88a8;
  text-align: justify;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
}

@media (max-width: 1200px) {
  .bottomPart {
    flex-direction: column;
  }
  .rightPart > img {
    width: 320px;
  }

  .leftPart > div > img {
    width: 24px;
    align-self: flex-start;
    margin-top: 5px;
  }
  .topPart > h2 {
    color: #321370;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px; /* 233.333% */
    letter-spacing: -2px;
  }
  .topPart > span {
    color: #374c8b;
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 184.615% */
    letter-spacing: -0.3px;
    text-transform: uppercase;
  }
}
</style>
