<script setup>
import content1 from "@/assets/LegalPages/LegalTerms-1.vue";
import footerContainer from "@/components/LandingPage/footerContainer.vue";
</script>

<template>
  <div class="legal_container">
    <div class="leftPart">
      <h3>Legal</h3>
      <ul>
        <li>
          <router-link to="/legal" style="text-decoration: none; color: inherit"
            >Terms of Use (Business)</router-link
          >
        </li>
        <li>
          <router-link
            to="/legal/user"
            style="text-decoration: none; color: inherit"
            >Terms of Use (Users)</router-link
          >
        </li>
        <li>
          <router-link
            to="/legal/dataPolicy"
            style="text-decoration: none; color: inherit"
            >Data Privacy Policy</router-link
          >
        </li>
        <li>
          <router-link
            to="/legal/dataProcessing"
            style="text-decoration: none; color: inherit"
            >Data Processing Agreement</router-link
          >
        </li>
      </ul>
    </div>
    <div class="rightPart">
      <div class="topPart">
        <h1>Terms of Use (Business)</h1>
        <span>Last updated: October 29, 2023</span>
        <p>
          This Privacy Policy includes important information about your personal
          data and we encourage you to read it carefully.
        </p>
      </div>
      <div class="bottomPart">
        <content1 />
      </div>
    </div>
  </div>
  <footerContainer />
</template>

<style scoped>
.legal_container {
  display: flex;
  margin-inline: 77px;
  gap: 126px;
  margin-block: 60px;
}
.leftPart {
  flex: 1;
}

.leftPart > ul {
  list-style: none;
  padding-left: 10px;
  padding-block: 20px;
}
.leftPart > ul > li {
  padding-block: 10px;
}
.rightPart {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.topPart {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.topPart > h1 {
  color: var(--Secondary-1ST-FontTT-color, #343434);
  font-family: Lato;
  font-size: 54px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.583px;
}

.topPart > span {
  color: var(--Action-color, var(--action-color, #5b70af));
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.583px;
}

.topPart > p {
  color: #575353;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.583px;
}
.bottomPart {
  height: 80vh;
  overflow: scroll;
  /* border: 1px solid black; */
}

@media (max-width: 800px) {
  .legal_container {
    flex-direction: column;
    gap: 30px;
    margin-inline: 0px;
    width: 90%;
    margin-inline: auto;
  }
  .topPart > h1 {
    color: var(--Secondary-1ST-FontTT-color, #343434);
    font-family: Lato;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.583px;
  }
}
</style>
