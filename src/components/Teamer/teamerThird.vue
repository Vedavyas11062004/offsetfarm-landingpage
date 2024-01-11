<script></script>

<template>
  <div class="third_container">
    <div class="textContent">
      <h3>Virtual Team Structuring</h3>
      <p>
        Establish a virtual workspace mirroring your organization's real-world
        operations. Clearly define roles, assigning specific responsibilities to
        each team member. Implement transparent hierarchies to delineate
        reporting lines and decision-making channels, fostering clarity and
        efficiency in collaboration.
      </p>
    </div>
    <div class="leftPart">
      <div class="backgroundImage">
        <img
          src="@/assets/products/connectThird.svg"
          alt="img.."
          class="image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.third_container {
  display: flex;
  width: 90%;
  margin-inline: auto;
  gap: 100px;
  align-items: center;
  margin-block: 50px;
}

.textContent {
  flex-basis: 45%;
  max-width: 50%;
}

.textContent > h3 {
  color: #262626;
  font-family: Lato;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px; /* 126.316% */
  padding-bottom: 10px;
}
.textContent > p {
  color: #737373;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
}
.backgroundImage {
  border-radius: 26px;
  background: var(--Patel-purple, #f3f5ff);
  width: 437px;
  height: 374px;
  position: relative;
}
.image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
}

@media (max-width: 1200px) {
  .third_container {
    flex-direction: column;
    gap: 50px;
  }
  .textContent {
    max-width: 90%;
  }
  .textContent > h3 {
    color: var(--2nd-font-color, #575353);
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px; /* 150% */
  }
  .textContent > p {
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
  .image {
    width: 270px;
    left: 30%;
  }
  .backgroundImage {
    width: 260px;
    height: 291px;
    transform: translateX(-20%);
  }
}
</style>
