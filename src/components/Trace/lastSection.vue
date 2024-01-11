<script setup></script>
<template>
  <div class="lastSection_container">
    <!-- <img src="@/assets/Trace/Container.svg" alt="last container" /> -->
  </div>
</template>

<style scoped>
.lastSection_container {
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  background-image: url("@/assets/Trace/Container.svg");
  background-repeat: no-repeat;
  background-position: center;
}

@media (max-width: 1200px) {
  .lastSection_container {
    background-image: url("@/assets/Trace/trace-last.svg");
    background-repeat: no-repeat;
    background-position: center;
    height: 650px;

  }
}
</style>
