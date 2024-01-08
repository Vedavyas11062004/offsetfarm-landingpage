<script setup></script>

<template>
  <div class="companys">
    <h2>Trusted by</h2>
    <div class="companyImages">
      <img src="@/assets/LandingPage/Infosys_logo 1.svg" alt="company1" />
      <img src="@/assets/LandingPage/company2.svg" alt="company2" />
      <img src="@/assets/LandingPage/company3.svg" alt="company3" />
      <img src="@/assets/LandingPage/company4.svg" alt="company4" />
    </div>
  </div>
</template>

<style scoped>
.companys {
  width: 65%;
  margin-inline: auto;
  margin-top: 200px;
  margin-bottom: 100px;
  text-align: center;
}
.companys > h2 {
  color: var(--vt-c-action-color);
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.583px;
  margin-bottom: 21px;
}
.companyImages {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

@media (max-width:12000px) {

  .companys{
    width: 90%;
    margin-inline: auto;
    padding-block: 30px;
    margin-bottom: 50px;

  }
  .companyImages{
    width: 90%;
    margin-inline: auto;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }
}

@media (min-width: 550px) and (max-width: 820px) {
  .companys{
    margin-top: 300px;
    margin-bottom: 50px;
  }
}

</style>
