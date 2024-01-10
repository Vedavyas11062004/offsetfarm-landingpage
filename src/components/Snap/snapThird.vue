<script setup></script>

<template>
  <div class="third_container">
    <div class="leftPart">
      <span>INVESTOR EMPOWERMENT</span>
      <h2>Real-time Impact Metrics, Personalized Dashboards</h2>
      <p>
        Offer investors real-time access to financials and impact metrics via
        personalized dashboards, promoting transparency and trust in data.
        Customization of key indicators strengthens the investor-investment
        relationship for informed decision-making.
      </p>
    </div>
    <div class="rightPart">
      <img src="@/assets/snap/third.svg" alt="img-3" />
    </div>
  </div>
</template>

<style scoped>
.third_container {
  width: 90%;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 250px;
  margin-block: 50px;
}
.leftPart > span {
  color: var(--Action-color, var(--action-color, #5b70af));
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.583px;
  margin-bottom: 12px;
}
.leftPart > h2 {
  color: #262626;
  font-family: Lato;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 126.316% */
  margin-bottom: 12px;
}
.leftPart > p {
  color: #737373;
  text-align: justify;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
}
</style>
