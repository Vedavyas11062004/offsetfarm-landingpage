<script setup>
import { ref, onUnmounted } from "vue";
import emailjs from "@emailjs/browser";
import popup from "@/components/LandingPage/popup.vue";

const formRef = ref(null);

const isDialogEnabled = ref(false);
const isSubmissionSuccessful = ref(false);
const toggleDialog = () => {
  isDialogEnabled.value = !isDialogEnabled.value;
  updateBodyStyles();
};

onUnmounted(() => {
  document.body.style.width = "";
  document.body.style.height = "";
  document.body.style.overflow = "";
});

const updateBodyStyles = () => {
  if (isDialogEnabled.value) {
    document.body.style.width = "100%";
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.width = "";
    document.body.style.height = "";
    document.body.style.overflow = "";
  }
};

const sendEmail = () => {
  emailjs
    .sendForm(
      "service_d0xnen5",
      "template_ejn736b",
      formRef.value,
      "mlYiijjit7187EZMQ"
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
        isDialogEnabled.value = false;
        isSubmissionSuccessful.value = true;
        updateBodyStyles();
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
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
          Unleash the impact potential of community centric projects. Tailored
          for grassroots organisations, impact investors and corporate
          sustainability initiatives. Seamlessly deploy assts, monitor with
          precision and transparency, and manage teams virtually for real-time
          insights.
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
            src="@/assets/LandingPage/close_black.svg"
            alt="cross"
            class="cross"
            @click="toggleDialog"
          />
          <form class="dialog_form" ref="formRef" @submit.prevent="sendEmail">
            <h2>Contact Us</h2>
            <p>We are here for you! How can we help?</p>
            <input
              type="text"
              placeholder="Enter your name"
              class="name"
              name="user_name"
            />
            <input
              type="text"
              placeholder="Enter your Email address"
              class="email"
              name="user_email"
            />
            <label class="messageLabel"> Message </label>
            <input
              type="text"
              placeholder="Go ahead,we are listening.."
              class="message"
              name="message"
            />
            <button class="submit_button">Submit</button>
          </form>
        </div>
      </div>
      <popup
        v-if="isSubmissionSuccessful"
        @close="isSubmissionSuccessful = false"
      />
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
  margin-top: 77px;
}

.leftPart {
  width: 50%;
  /* margin-top: 77px; */
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
  text-align: justify;
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
  overflow: hidden;
}
.dialog {
  width: 461px;
  height: 576px;
  border-radius: 20px;
  border: 1px;
  background-color: white;
  position: relative;
  max-width: 90%;
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
  max-width: 100%;
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
  max-width: 100%;
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
  max-width: 100%;
}

.rightPart {
  display: flex;
  align-self: center;
}
.rightPart > img {
  max-width: 800px;
  height: 552px;
  width: 65vw;
}

@media (max-width: 1000px) {
  main {
    width: 90%;
    margin-inline: auto;
  }
  .welcome_container {
    margin-top: 127px;
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
