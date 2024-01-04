<script setup>
import { ref } from "vue";

const isDialogEnabled = ref(false);
const toggleDialog = () => {
  isDialogEnabled.value = !isDialogEnabled.value;
};
</script>

<template>
  <main>
    <div class="backgroundImg"></div>
    <div class="welcome_container">
      <div class="leftPart">
        <span>IMPACT ENGINE</span>
        <h1>ENTERPRISE SUITE FOR IMPACT</h1>
        <p>
          Unleash the impact potential of your projects in emerging markets.
          Seamlessly deploy assets, monitor with precision, and virtualize teams
          for real-time insights. Tailored for grassroot organisations and
          financiers desiring transparent impact.
        </p>
        <button @click="toggleDialog">Get Started</button>
      </div>
      <div class="rightPart">
        <img
          src="@/assets/Gifs/hero-page-animations-[1copy].gif"
          alt="hero-img"
        />
      </div>
      <div class="dialog-overlay" v-if="isDialogEnabled">
        <div class="dialog">
          <img
            src="@/assets/close_black.svg"
            alt="cross"
            class="cross"
            @click="toggleDialog"
          />
          <form class="dialog_form">
            <h2>Contact Us</h2>
            <p>We are here for you! How can we help?</p>
            <input type="text" placeholder="Enter your name" class="name" />
            <input
              type="text"
              placeholder="Enter your Email address"
              class="email"
            />
            <label class="messageLabel"> Message </label>
            <input
              type="text"
              placeholder="Go ahead,we are listening.."
              class="message"
            />
            <button class="submit_button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.backgroundImg {
  width: 100%;
  height: 747px;
  background: var(
    --Regnfi-gradient,
    conic-gradient(
      from 107deg at 48.77% 49.04%,
      rgba(193, 204, 236, 0.35) 177.7819526195526deg,
      rgba(238, 235, 243, 0.66) 227.16967105865479deg,
      rgba(236, 231, 243, 0.63) 298.1310725212097deg,
      rgba(233, 226, 244, 0.72) 360deg
    )
  );
  position: absolute;
  width: 100%;
  top: 0%;
  left: 0%;
  z-index: -1;
}
.welcome_container {
  width: 90%;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.leftPart {
  width: 50%;
  margin-top: 77px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.leftPart > span {
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.58px;
  text-align: left;
  color: var(--vt-c-action-color);
}

.leftPart > h1 {
  font-size: 54px;
  font-weight: 700;
  line-height: 65px;
  letter-spacing: 0.58px;
  text-align: left;
  color: var(--vt-c-heading-color);
}

.leftPart > p {
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.58px;
  color: var(--vt-c-paragraph-color);
}

.leftPart > button {
  width: 112px;
  height: 40px;
  padding: 10px, 20px, 10px, 20px;
  border-radius: 4px;
  background-color: var(--vt-c-action-color);
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: white;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog {
  width: 461px;
  height: 576px;
  border-radius: 20px;
  border: 1px;
  background-color: white;
  position: relative;
}

.cross {
  position: absolute;
  right: 20px;
  top: 20px;
}

.dialog_form {
  display: flex;
  flex-direction: column;
  margin-block: 50px;
  margin-inline: 43px;
}

.dialog_form > h2 {
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--vt-c-heading-color);
}
.dialog_form > p {
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.58px;
  text-align: left;
  color: var(--vt-c-paragraph-color);
  padding-top: 0.25rem;
  padding-bottom: 1.5rem;
}

.name,
.email {
  width: 375px;
  height: 52px;
  padding-inline: 16px;
  border-radius: 8px;
  gap: 10px;
  border: none;
  background-color: var(--vt-c-input-color);
  margin-bottom: 24px;
}

.messageLabel {
  font-size: 13px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--vt-c-heading-color);
  padding-bottom: 0.5rem;
}

.message {
  width: 375px;
  height: 125px;
  padding-inline: 16px;
  border-radius: 8px;
  border: none;
  background-color: var(--vt-c-input-color);
  margin-bottom: 24px;
  position: relative;
}
.message::placeholder {
  position: absolute;
  top: 16px;
}

.submit_button {
  width: 375px;
  height: 58px;
  padding: 17px, 16px, 17px, 16px;
  border-radius: 12px;
  background-color: var(--vt-c-action-color);
  color: white;
  border: none;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
}


.rightPart > img {
  max-width: 774px;
  height: 472px;
  width: 55vw;
}

@media (max-width: 1000px) {
  main {
    width: 90%;
    margin-inline: auto;
  }
  .backgroundImg {
    width: 100%;
    height: 730px;
    background: var(
      --Regnfi-gradient,
      conic-gradient(
        from 107deg at 48.77% 49.04%,
        rgba(193, 204, 236, 0.35) 177.7819526195526deg,
        rgba(238, 235, 243, 0.66) 227.16967105865479deg,
        rgba(236, 231, 243, 0.63) 298.1310725212097deg,
        rgba(233, 226, 244, 0.72) 360deg
      )
    );
  }
  .rightPart {
    display: none;
  }

  .leftPart {
    width: 100%;
  }

  .leftPart > h1 {
    font-size: 34px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.583px;
  }
}
</style>
