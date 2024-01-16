<template>
  <div class="success-popup">
    <div class="leftPart">
      <img src="@/assets/LandingPage/popUp.svg" alt="popup" />
    </div>
    <div class="rightPart">
      <h3>Successful!</h3>
      <p>Thank you for reaching out. Expect a reply soon.</p>
    </div>
    <button @click="closePopup" class="close_btn">
      <img src="@/assets/LandingPage/cross.svg" alt="cross.." />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$emit("close");
    },
  },
  mounted() {
    setTimeout(() => {
      this.$emit("close");
    }, 1500);
  },
};
</script>

<style scoped>
.success-popup {
  position: fixed;
  display: flex;
  top: 18%;
  right: 0%;
  transform: translate(-10%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--Stroke-light, #dee2e6);
  background: var(---Gray-White, #fff);
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.08),
    0px 0px 2px 0px rgba(0, 0, 0, 0.12);
  width: 512px;
  max-width: 80vw;
}
.rightPart > h3 {
  color: var(--Action-color, var(--action-color, #5b70af));
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.rightPart > p {
  color: rgba(84, 89, 94, 0.6);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  margin-top: 8px;
}
.close_btn {
  position: fixed;
  background-color: inherit;
  border: none;
  right: 10px;
  top: 13px;
}
</style>
