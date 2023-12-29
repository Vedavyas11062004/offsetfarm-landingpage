<script setup>
const props = defineProps(["content", "name", "imageUrl", "designation"]);
</script>

<template>
  <div class="card">
    <img src="@/assets/stars.png" alt="stars.." />
    <p>{{ props.content }}</p>
    <div class="details">
      <div>
        <img :src="props.imageUrl" alt="icon.." />
        <span>{{ props.name }}</span>
      </div>
      <span>{{ props.designation }}</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 512px;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 16px;
  background: #fefefe;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
}

.details{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.details>div{
    display: flex;
    align-items: center;
    gap: 16px;
}
</style>
