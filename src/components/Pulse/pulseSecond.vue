<script setup></script>

<template>
  <div class="second_container">
    <h2>Why Choose <span>Pulse</span>?</h2>
    <p>
      Empower projects with real-time dashboards, aligning with SDGs for
      confident leadership and precise flexibility in tracking financials,
      impact, and progress.
    </p>
    <div class="grid_container">
      <div class="item">
        <img src="@/assets/Pulse/icon-1.svg" alt="img-1" />
        <div>
          <h3>Impact Tracking & SDG Alignment</h3>
          <p>
            Visualize the difference your projects make in the world, directly
            aligned with global goals.
          </p>
        </div>
      </div>
      <div class="item">
        <img src="@/assets/Pulse/icon-2.svg" alt="img-2" />
        <div>
          <h3>Financial Oversight</h3>
          <p>
            Maintain comprehensive control over your project finances, from
            budgets to expenditures.
          </p>
        </div>
      </div>
      <div class="item">
        <img src="@/assets/Pulse/icon-3.svg" alt="img-3" />
        <div>
          <h3>Dynamic Reporting</h3>
          <p>
            Generate crisp, management-level reports that encapsulate project
            performance.
          </p>
        </div>
      </div>
      <div class="item">
        <img src="@/assets/Pulse/icon-1.svg" alt="img-1" />
        <div>
          <h3>Project Status Updates</h3>
          <p>
            Provide instant snapshots of where each project stands at any given
            moment.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.second_container {
  width: 90%;
  margin-inline: auto;
  padding-block: 50px;
}
.second_container > h2 {
  color: #303030;
  font-family: Lato;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.2%; /* 53.28px */
  text-transform: capitalize;
  padding-bottom: 10px;
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
}
.grid_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 60px;
  row-gap: 60px;
}
.item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.item > img {
  width: 48px;
}
.item > div > h3 {
  color: #1e2f3f;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
  padding-bottom: 5px;
}
.item > div > p {
  color: #4e4e4e;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 32px */
}

@media (max-width: 1200px) {
  .second_container {
    padding-block: 0px;
  }
  .grid_container {
    grid-template-columns: 1fr;
  }
  .second_container > h2 {
    color: var(--Secondary-1ST-FontTT-color, #303030);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 133.2%; /* 31.968px */
    text-transform: capitalize;
  }
  .second_container > p {
    color: var(--2nd-font-color, #4e4e4e);
    text-align: justify;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
  }
  .item > img {
    width: 28px;
    height: 28px;
  }
  .item > div > h3 {
    color: var(--Secondary-1ST-FontTT-color, #343434);
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 166.667% */
  }
}
</style>
