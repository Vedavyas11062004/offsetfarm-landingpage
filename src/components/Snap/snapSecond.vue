<script setup></script>

<template>
  <div class="second_container">
    <span>HOW IT WORKS</span>
    <h2>Simple, yet powerful features</h2>
    <p>
      Real-time transparency tool for investors, providing instant data access,
      customisable dashboards, and robust reporting on financial integrity and
      project impact.
    </p>
    <div class="grid_container">
      <div class="item">
        <div>
          <img src="@/assets/snap/icon-1.1.svg" alt="img-1" />
          <h3>Real-Time Investment Insights</h3>
        </div>
        <p>
          Offer investors a live feed of their impact, turning data into trust.
        </p>
      </div>
      <div class="item">
        <div>
          <img src="@/assets/snap/icon-1.2.svg" alt="img-2" />
          <h3>Transparent Financial Reporting</h3>
        </div>
        <p>
          Communicate the financial health and resource allocation of projects
          succinctly and accurately.
        </p>
      </div>
      <div class="item">
        <div>
          <img src="@/assets/snap/icon-1.3.svg" alt="img-3" />
          <h3>Engagement and Reporting Tools</h3>
        </div>
        <p>
          Simplify reporting processes and enhance investor relations with tools
          designed for engagement.
        </p>
      </div>
      <div class="item">
        <div>
          <img src="@/assets/snap/icon-1.4.svg" alt="img-1" />
          <h3>Impact Verification</h3>
        </div>
        <p>
          Reassure investors with verifiable, concrete evidence of the social
          and environmental impact of their investments.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.second_container {
  width: 90%;
  margin-inline: auto;
  padding-block: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.second_container > h2 {
  color: var(--Secondary-1ST-FontTT-color, #343434);
  font-family: Lato;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px; /* 126.316% */
  padding-bottom: 10px;
}
.second_container > span {
  color: var(--action-color, #5b70af);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.583px;
}
.second_container > h2 > span {
  color: var(--Action-color, #5b70af);
}
.second_container > p {
  color: #4e4e4e;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 28.8px */
  padding-bottom: 30px;
  width: 60%;
  text-align: center;
  margin-bottom: 20px;
}
.grid_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 60px;
  row-gap: 60px;
}
.item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  flex-direction: column;
}
.item > img {
  width: 24px;
}
.item > div {
  display: flex;
  gap: 10px;
}
.item > div > h3 {
  color: var(--Secondary-1ST-FontTT-color, #343434);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
}
.item > p {
  color: #4e4e4e;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 32px */
}
</style>
