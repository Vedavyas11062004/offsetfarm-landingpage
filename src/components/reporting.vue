<script setup></script>

<template>
  <div class="report_container">
    <div class="leftPart">
      <h2><span>Real-time</span> Reporting</h2>
      <p>
        Build enduring trust with stakeholders through transparent, real-time
        reporting. Keep investors connected to the project's performance with
        up-to-date data and insights.
      </p>
    </div>
    <div class="rightPart">
      <img src="@/assets/Gifs/real-time-reporting.gif" alt="img.." />
    </div>
    <div class="leftContents">
      <div>
        <h3>Transparent Stakeholder Engagement</h3>
        <p>
          Equip your stakeholders with the power to make informed decisions with
          up-to-the-minute reporting on your projects
        </p>
        <button class="loadmoreBtn">
          <span>Learn more about snap</span>
          <img src="@/assets/sideArrow.svg" alt="arrow" />
        </button>
      </div>
      <div>
        <h3>Instant Insight Access</h3>
        <p>
          Real-time data visualization that keeps investors in the loop with the
          latest project developments.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.report_container {
  /* margin-left: 77px; */
  /* overflow: hidden; */
  width: 90%;
  margin-inline: auto;
  margin-block: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}
.leftPart {
  align-self: self-end;
}

.leftPart > h2 {
  width: 388px;
  color: var(--vt-c-heading-color);
  font-family: Lato;
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

.leftPart > p {
  color: var(--vt-c-paragraph-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.583px;
  margin-bottom: 2rem;
}

.leftContents {
  display: flex;
  gap: 52px;
  margin-bottom: 25px;
}

.leftContents > div > h3 {
  width: 215px;
  color: var(--vt-c-heading-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.583px;
}
.leftContents > div > p {
  width: 234px;
  color: var(--vt-c-paragraph-color);
  text-align: justify;
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.583px;
  margin-top: 10px;
}

.loadmoreBtn {
  border: none;
  background-color: inherit;
  color: var(--vt-c-action-color);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.583px;
  padding: 0%;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
}
.rightPart {
  grid-row: span 2;
}
.rightPart > img {
  width: 726.846px;
}

@media (max-width: 800px) {
  .report_container {
    grid-template-columns: 1fr;
    place-items: center;
    gap: 20px;
  }
  .rightPart {
    overflow: hidden;
    width: 90%;
    /* margin-inline: auto; */
  }
  .rightPart > img {
    height: 225px;
    width: 350px;
  }
  .leftContents {
    flex-direction: column-reverse;
    align-items: center;
  }
  .leftContents > div > h3 {
    width: auto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.583px;
  }
  .leftContents > div > p {
    width: auto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.583px;
  }
  .leftPart>h2{
    font-size: 28px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.583px;
    text-align: center;
  }
  .leftPart>p{
    width: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
}
</style>
