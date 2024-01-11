<script setup></script>

<template>
  <div class="hero_contianer">
    <div class="hero_leftPart">
      <h2>Tailor your Monitoring with <span>TRACE</span></h2>
      <p>
        Empower your field MRV operations with TRACE, the essential tool for
        conducting and managing surveys with ease—even offline. TRACE simplifies
        complex data collection, offering a robust solution for organizations to
        manage surveys and trace customer engagements with efficiency. Its
        offline capabilities and streamlined processes ensure that no data is
        lost.
      </p>
    </div>
    <div class="hero_rightPart">
      <img src="@/assets/products/MacBookAir.svg" alt="img.." />
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
  font-size: 48px;
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

@media (max-width: 1200px) {
  .hero_contianer {
    flex-direction: column;
    gap: 20px;
  }
  .hero_rightPart > img {
    width: 351px;
  }
  .hero_leftPart > h2 {
    color: var(--2nd-font-color, #575353);
    font-family: Lato;
    font-size: 34px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.583px;
  }
}
</style>
