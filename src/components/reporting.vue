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
      <div class="leftContents">
        <div>
          <h3>Transparent Stakeholder Engagement</h3>
          <p>
            Equip your stakeholders with the power to make informed decisions
            with up-to-the-minute reporting on your projects
          </p>
        </div>
        <div>
          <h3>Instant Insight Access</h3>
          <p>
            Real-time data visualization that keeps investors in the loop with
            the latest project developments.
          </p>
        </div>
      </div>
      <button class="loadmoreBtn">
        <span>Learn more about snap</span>
        <img src="@/assets/sideArrow.svg" alt="arrow" />
      </button>
    </div>
    <div class="rightPart">
        <img src="@/assets/Gifs/real-time-reporting.gif" alt="img.."/>
    </div>
  </div>
</template>

<style scoped>
.report_container {
  margin-left: 77px;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 90%;
  justify-content: space-between;
  margin-block: 80px;
}
.leftPart {
  width: 50%;
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
}

.rightPart>img{
  width: 726.846px;
}
</style>
