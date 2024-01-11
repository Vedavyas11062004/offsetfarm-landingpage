<script setup></script>

<template>
  <div class="customer_container">
    <div class="leftPart">
      <h2><span>Customer-to-Team</span> Mapping</h2>
      <ul class="points">
        <li>
          <img src="@/assets/LandingPage/ellipse.svg" alt="img.." />
          <p>
            Achieve unparalleled traceability by
            <span>mapping customer journeys directly to team actions ,</span>
            ensuring every voice is heard and every action accounted for.
          </p>
        </li>
        <li>
          <img src="@/assets/LandingPage/ellipse.svg" alt="img.." />
          <p>
            Align your customer interactions with <span>team activities</span> ,
            providing complete <span>transparency and accountability .</span>
          </p>
        </li>
        <li>
          <img src="@/assets/LandingPage/ellipse.svg" alt="img.." />
          <p>
            Ensure responsibility with a system that tracks and assigns customer
            feedback to relevant team members.
          </p>
        </li>
      </ul>
    </div>
    <div class="rightPart">
      <img src="@/assets/LandingPage/customer-mapping.svg" alt="customerMapping.." />
    </div>
  </div>
</template>

<style scoped>
.customer_container {
  margin-inline: 77px;
  display: flex;
  gap: 76px;
  align-items: center;
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
