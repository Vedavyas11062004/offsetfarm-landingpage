<script setup></script>

<template>
  <div class="third_container">
    <div class="leftPart">
      <span>FINANCIAL MASTERY WITH PULSE</span>
      <h2>Navigating Project Finances with Precision and Efficiency</h2>
      <div class="content_container">
        <div class="item">
          <div>
            <img src="@/assets/Pulse/icon-4.1.svg" alt="img-4.1" />
            <h3>Monitor Budgets</h3>
          </div>
          <p>
            Keep a close eye on your financials with dynamic tracking of
            projected versus actual spend.
          </p>
        </div>
        <div class="item">
          <div>
            <img src="@/assets/Pulse/icon-4.2.svg" alt="img-4.2" />
            <h3>Optimize Spending</h3>
          </div>
          <p>
            Identify financial trends and make adjustments to ensure fiscal
            responsibility and efficiency.
          </p>
        </div>
      </div>
    </div>
    <div class="rightPart">
      <img src="@/assets/Pulse/section-4.svg" alt="img-4" />
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
  gap: 219px;
  margin-block: 80px;
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

.content_container {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 24px;
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
  font-weight: 600;
  line-height: 160%; /* 28.8px */
}
.item > p {
  overflow: hidden;
  color: #575353;
  text-overflow: ellipsis;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
}

@media (max-width: 1200px) {
  .third_container {
    flex-direction: column;
    gap: 20px;
  }
  .rightPart > img {
    width: 320px;
  }
  .leftPart > span {
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.583px;
  }
  .leftPart > h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
  .leftPart > p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
}
</style>
