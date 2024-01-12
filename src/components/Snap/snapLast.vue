<script setup></script>

<template>
  <div class="last_container">
    <div class="left_part">
      <h3>Engagement and Reporting Tools</h3>
      <p>
        Optimize reporting processes and elevate investor relations with
        interactive reporting tools for dynamic engagement. Provide consistent
        updates through scheduled reports, fostering transparency and
        maintaining effective communication with investors.
      </p>
    </div>
    <div class="right_part">
      <img src="@/assets/snap/snap-last.svg" alt="last.." />
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

.left_part{
    width:60%;
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

@media (max-width: 1200px) {
  .last_container {
    flex-direction: column;
  }
  .left_part{
    width: 100%;
  }
  .left_part > h3 {
    color: var(--2nd-font-color, #575353);
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
  }
  .left_part > span {
    color: var(--Action-color, var(--action-color, #5b70af));
    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.583px;
  }
  .left_part > p {
    color: var(--2nd-font-color, #575353);
    text-align: justify;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }
}

@media (max-width: 600px) {
  .right_part > img {
    width: 359px;
  }
}
</style>
