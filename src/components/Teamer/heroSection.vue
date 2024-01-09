<script setup></script>

<template>
  <div class="hero_contianer">
    <div class="hero_leftPart">
      <h2>Enhance teamwork and accountability with <span>TEAMER</span></h2>
      <p>
        TEAMER aligns team members with customers through defined roles and
        hierarchies, fostering an efficient workforce dedicated to
        organizational goals. Its streamlined management framework cuts through
        complexity, ensuring performance and strict oversight.
      </p>
    </div>
    <div class="hero_rightPart">
      <img src="@/assets/Teamer/heroImage.svg" alt="img.." />
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
</style>
