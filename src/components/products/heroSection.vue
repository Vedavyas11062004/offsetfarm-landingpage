<script setup></script>

<template>
  <div class="hero_contianer">
    <div class="hero_leftPart">
      <h2>Efficiency Unleashed: <span>CONNECT</span></h2>
      <p>
        Maximize efficiency from prospect to payment with CONNECT. Our
        comprehensive system streamlines lead acquisition and conversion. It
        also simplifies the tracking and management of orders, inventory, and
        payments. Equip your team with the tools to make informed, rapid
        decisions, even offline.
      </p>
    </div>
    <div class="hero_rightPart">
      <img src="@/assets/Gifs/real-time-reporting.gif" alt="img.." />
    </div>
  </div>
</template>

<style scoped>
.hero_contianer {
  display: flex;
  width: 90%;
  margin-inline: auto;
  align-items: center;
}
.hero_rightPart > img {
  width: 756px;
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
