<script setup>
const props = defineProps(["title", "description", "imageUrl"]);
</script>

<template>
  <div class="card_container">
    <img :src="props.imageUrl" alt="img.." />
    <div class="card_content">
      <img src="@/assets/pseudo-line.svg" alt="line" />
      <div class="content_text">
        <h3>{{ props.title }}</h3>
        <p>{{ props.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card_container > img {
  margin-left: 15px;
}
.card_content {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}
.card_content > img {
  margin-top: 2px;
}
.content_text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.content_text > h3 {
  color: var(--vt-c-heading-color);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.583px;
}

.content_text > p {
  color: var(--vt-c-paragraph-color);
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.583px;
}

@media (max-width: 1200px) {
  
  .content_text > h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.583px;
  }
  .content_text > p {
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.583px;
  }
}
</style>
