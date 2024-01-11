<template>
  <div class="fourth_container">
    <div class="leftPart">
      <h3>Streamlined User Experience</h3>
      <p>
        Enhance team performance with a user interface that displays only the
        most relevant customer data. Optimize teamwork with customer-specific
        surveys to streamline efforts and save time on navigation. Enhance
        efficiency by tailoring interfaces for individual team members,
        minimizing distractions and maximizing productivity. Prioritize a
        focused approach to drive meaningful results.
      </p>
    </div>
    <div class="rigthPart">
      <img src="@/assets/Trace/survey stats 2.svg" alt="image.." />
    </div>
  </div>
</template>

<style scoped>
.fourth_container {
  display: flex;
  align-items: center;
  width: 90%;
  margin-inline: auto;
  margin-block: 3rem;
  justify-content: space-between;
}

.leftPart > h3 {
  color: #262626;
  font-family: Lato;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
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

@media (max-width: 1200px) {
  .fourth_container {
    flex-direction: column;
  }
  .rigthPart > img {
    width: 369px;
  }
  .leftPart > h3 {
    color: var(--2nd-font-color, #575353);
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px; /* 150% */
  }
}
</style>
