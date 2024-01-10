<script setup></script>

<template>
  <div class="last_container">
    <div class="left_part">
      <span>DYNAMIC PROJECT MONITORING</span>
      <h3>Instant Status Snapshots and Real-Time Alerts</h3>
      <p>
        Gain immediate insights into project status with real-time progress
        indicators and instant snapshots. Keep stakeholders informed through
        alerts, ensuring timely updates on critical project developments.
      </p>
    </div>
    <div class="right_part">
      <img src="@/assets/Pulse/lastPart.svg" alt="last.." />
    </div>
  </div>
</template>

<style scoped>
.last_container {
  width: 90%;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  margin-block: 50px;
}
.left_part > h3 {
  color: #262626;
  font-family: Lato;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px; /* 126.316% */
  padding-bottom: 10px;
}
.left_part > p {
  color: #737373;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
}

.left_part > span {
  color: var(--Action-color, var(--action-color, #5b70af));
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.583px;
}
</style>
