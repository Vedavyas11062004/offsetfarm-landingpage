<script setup></script>

<template>
  <div class="backgroundImg">
    <div class="customer_container">
      <div class="leftPart">
        <h2>Transparent Financial Reporting</h2>
        <ul class="points">
          <li>
            <img src="@/assets/LandingPage/ellipse.svg" alt="img.." />
            <p>
              <span>Transparently</span> detail project finances, disclosing
              investments and expenses for clear fund allocation.
            </p>
          </li>
          <li>
            <img src="@/assets/LandingPage/ellipse.svg" alt="img.." />
            <p>
              Monitor financial performance, highlighting milestones and
              comparing
              <span>projected versus actual spending.</span>
            </p>
          </li>
          <li>
            <img src="@/assets/LandingPage/ellipse.svg" alt="img.." />
            <p>
              Provide <span>concise insight</span> into the project's fiscal
              health and resource utilization.
            </p>
          </li>
        </ul>
      </div>
      <div class="rightPart"></div>
    </div>
  </div>
</template>

<style scoped>

.backgroundImg{
    background-image: url('@/assets/snap/backgroundImg.svg');
    padding-block:60px;
    margin-bottom: 30px;
}
.customer_container {
  width: 90%;
  margin-inline: auto;
  display: flex;
  gap: 76px;
  padding-block: 50px;
  /* margin-bottom: 50px; */
}
.leftPart {
  width: 50%;
}
.leftPart > h2 {
  color: var(--vt-c-heading-color);
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.583px;
  padding-bottom: 18px;
}

.leftPart > h2 > span {
  color: var(--vt-c-action-color);
  font-weight: 600;
}

.points {
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 31px;
}

.points > li {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}
.points > li > img {
  margin-top: 5px;
}
.points > li > p {
  color: var(--vt-c-paragraph-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.583px;
}

.points > li > p > span {
  color: var(--vt-c-action-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.583px;
}

@media (max-width: 1200px) {
  .customer_container {
    margin-inline: 0px;
    width: 90%;
    margin-inline: auto;
    flex-direction: column;
  }
  .leftPart {
    width: auto;
  }
  .leftPart > h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.583px;
  }
  .rightPart {
    margin-inline: auto;
  }
  .rightPart > img {
    /* width: 297.731px; */
    height: 249.749px;
    margin-inline: auto;
  }
  .points > li > p {
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.583px;
  }
}
</style>
