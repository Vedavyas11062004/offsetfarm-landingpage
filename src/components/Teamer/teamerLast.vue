<script setup></script>

<template>
  <div class="last_container">
    <div class="left_part">
      <h3>Productivity Enhancement</h3>
      <p>
        Optimize team efficiency with our streamlined platform,<span
          >eliminating redundancies</span
        >
        and <span>enhancing task</span> completion rates. Clear task delineation
        ensures focused team efforts, driving heightened productivity.
      </p>
    </div>
    <div class="right_part">
      <img src="@/assets/Teamer/lastPart.svg" alt="last.." />
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
.left_part>p>span{
  color: var(--vt-c-action-color);
}
@media (max-width: 1200px) {
  .last_container {
    flex-direction: column;
  }
  .left_part > h3 {
    color: var(--2nd-font-color, #575353);
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px; /* 150% */
  }
  .left_part > p {
    color: var(--2nd-font-color, #737373);
    text-align: justify;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }
  .right_part > img {
    width: 350px;
  }
}
</style>
