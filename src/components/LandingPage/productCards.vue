<script setup>
const props = defineProps(["title", "description", "imageUrl"]);
console.log(props.imageUrl);
</script>
<template>
  <div class="card">
    <img :src="props.imageUrl" alt="cardimg" />
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
    <button>
      Learn more
      <img src="@/assets/LandingPage/sideArrow.svg" alt="sideArrow" class="sidearrow" />
    </button>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 327px;
  height: 262px;
  border-radius: 14px;
  border: 0.2px solid rgba(52, 52, 52, 0.1);
  /* border: 1px solid black; */
  margin-left: 50px;
  background: #fff;
  padding-inline: 25px;
  padding-block: 22px;
  gap: 12px;
  transition: 0.15s ease;
}

.sidearrow{
  display: none;
}

.card:hover {
  box-shadow: 0px 15px 35px 1px rgba(91, 112, 175, 0.12);
  transition-delay: 0.2s;
  /* box-shadow: 0 24px 0 0 rgba(91, 112, 175, 0.12); */
}
.card:hover .sidearrow{
  display: block;
}
.card > img {
  width: 51px;
  height: 51px;
}

.card > h3 {
  color: var(--vt-c-heading-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.583px;
}

.card > p {
  color: var(--vt-c-paragraph-color);
  text-align: justify;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.583px;
}

.card > button {
  color: var(--vt-c-action-color);
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.583px;
  text-decoration-line: underline;
  border: none;
  background-color: inherit;
  text-align: left;
  padding-inline: 0px;
  display: flex;
  align-items: center;
  gap: 5px;
}

@media(max-width:1200px)
{
  .card{
    margin-left: 0%;
  }
}
</style>
