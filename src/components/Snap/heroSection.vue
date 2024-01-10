<script setup></script>

<template>
  <div class="hero_contianer">
    <div class="hero_leftPart">
      <h2>Unveiling Performance with <span>SNAP</span></h2>
      <p>
        Boost investor trust with SNAP's real-time updates on project
        performance. Deliver immediate insights and a clear view of the impact
        of their contributions, fostering engagement and transparency.
      </p>
    </div>
    <div class="hero_rightPart">
      <img src="@/assets/snap/snap-hero.svg" alt="img.." />
    </div>
  </div>
</template>

<style scoped>
.hero_contianer {
  display: flex;
  width: 90%;
  margin-inline: auto;
  align-items: center;
  margin-bottom: 50px;
}
.hero_rightPart > img {
  width: 741px;
}
.hero_leftPart {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.hero_leftPart > h2 {
  font-size: 54px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.583px;
  color: rgba(87, 83, 83, 1);
}
.hero_leftPart > h2 > span {
  color: var(--vt-c-action-color);
}
.hero_leftPart > p {
  color: var(--2nd-font-color, #575353);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.583px;
}
</style>
