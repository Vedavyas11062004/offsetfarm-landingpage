<script setup></script>

<template>
  <div class="backgroundImg">
    <div class="customer_container">
      <h2>Transparent Financial Reporting</h2>
      <ul class="points">
        <li>
          <img src="@/assets/snap/icon-4.1.svg" alt="img.." />
          <h3>Financial Transparency</h3>
          <p>
            Transparently detail project finances, disclosing investments and
            expenses for clear fund allocation.
          </p>
        </li>
        <li>
          <img src="@/assets/snap/icon-4.2.svg" alt="img.." />
          <h3>Budget Analysis</h3>
          <p>
            Monitor financial performance, highlighting milestones and comparing
            projected versus actual spending.
          </p>
        </li>
        <li>
          <img src="@/assets/snap/icon-4.3.svg" alt="img.." />
          <h3>Resource Efficiency</h3>
          <p>
            Provide concise insight into the project's fiscal health and
            resource utilization.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.backgroundImg {
  background-image: url("@/assets/snap/backgroundImg.svg");
  padding-block: 60px;
  margin-bottom: 30px;
  background-repeat: no-repeat;
  background-position: center;
}
.customer_container {
  width: 90%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 76px;
  padding-block: 50px;
  align-items: center;
  /* margin-bottom: 50px; */
}

.customer_container > h2 {
  color: var(--Secondary-1ST-FontTT-color, #343434);
  font-family: Lato;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px; /* 126.316% */
}

.points {
  list-style: none;
  padding: 0px;
  display: flex;
  gap: 50px;
  justify-content: center;
}

.points > li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  flex-basis: 30%;
}
.points > li > img {
  margin-top: 5px;
}
.points > li > h3 {
  color: var(--Action-color, var(--action-color, #5b70af));
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 127.273% */
}
.points > li > p {
  color: var(--vt-c-paragraph-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.583px;
  text-align: center;
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
  .backgroundImg {
    background-image: url("@/assets/snap/background-2.svg");
    padding-block: 60px;
    margin-bottom: 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 50px;
  }
  .customer_container {
    margin-inline: 0px;
    width: 90%;
    margin-inline: auto;
    padding-block: 0px;
    flex-direction: column;
    gap: 20px;
  }
  .customer_container > h2 {
    color: var(--Secondary-1ST-FontTT-color, #343434);
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 200% */
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
  .points {
    flex-direction: column;
    gap: 30px;
    width: 80%;
  }
}
</style>
