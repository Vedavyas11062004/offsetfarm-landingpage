<script setup></script>

<template>
  <div class="thirdSection_container">
    <div class="leftPart">
      <div class="backgroundImage">
        <img
          src="@/assets/products/connectFive.svg"
          alt="img.."
          class="image"
        />
      </div>
    </div>
    <div class="rightPart">
      <div class="topPart">
        <h3>Integrated Document Management</h3>
        <p>
          It automates the generation of crucial documents, such as delivery
          notes and invoices, ensuring swift production upon order confirmation.
          This instantaneous documentation not only accelerates processes but
          also reduces the risk of manual entry errors. By automating agreements
          and invoices, businesses enhance efficiency and maintain accuracy in
          their transactions. The streamlined approach contributes to error
          reduction, ultimately optimizing overall workflow.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thirdSection_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  width: 90%;
  margin-inline: auto;
  position: relative;
  align-items: center;
  margin-block: 2rem;
}
.leftPart {
  width: 50%;
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
  left: 20%;
  transform: translateY(-50%);
}
.topPart {
  margin-bottom: 27px;
  display: flex;
  flex-direction: column;
  gap: 27px;
}
.topPart > h3 {
  color: var(--Secondary-1ST-FontTT-color, #343434);
  font-family: Lato;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.583px;
}

.topPart > p {
  color: var(--2nd-font-color, #575353);
  text-align: justify;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 129%; /* 23.22px */
}

@media (max-width: 1200px) {
  .thirdSection_container {
    grid-template-columns: 1fr;
  }
  .rightPart {
    grid-row: 1/2;
    grid-column: 1/2;
  }
}

@media (max-width: 600px) {
  .image {
    width: 283.554px;
    height: 287.237px;
  }
  .backgroundImage {
  border-radius: 26px;
  background: var(--Patel-purple, #f3f5ff);
  width: 247.092px;
  height: 211.47px;
}
}
</style>
