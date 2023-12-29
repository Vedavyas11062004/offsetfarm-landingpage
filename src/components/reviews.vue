<script setup>
import { ref } from "vue";
import testimonials from "./testimonials.vue";
const data = ref([
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl integer scelerisque in tortor sagittis erat massa. Varius facilisis ornare dictumst sem lobortis vitae lacus in in.",
    name: "Sophie Moore",
    imageUrl: "src/assets/memoji-1.svg",
    designation: "Head of Marketing",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl integer scelerisque in tortor sagittis erat massa. Varius facilisis ornare dictumst sem lobortis vitae lacus in in.",
    name: "Sophie More",
    imageUrl: "src/assets/memoji-1.svg",
    designation: "Product Manager at Infosys",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl integer scelerisque in tortor sagittis erat massa. Varius facilisis ornare dictumst sem lobortis vitae lacus in in.",
    name: "Adam Gwadyr",
    imageUrl: "src/assets/memoji-2.svg",
    designation: "Entrepreneur",
  },
]);
</script>

<template>
  <div class="reviews_container">
    <h2>Hear what our clients says</h2>
    <p>
      See how our products and services have made a positive impact on our
      customers' lives.
    </p>
    <div class="testimonials_container">
      <testimonials
        v-for="(card, index) in data"
        :key="index"
        :content="card.content"
        :designation="card.designation"
        :imageUrl="card.imageUrl"
        :name="card.name"
      />
    </div>
    <div class="dots">
        <img src="@/assets/dots.png" alt="dots.."/>
    </div>
  </div>
</template>

<style scoped>

.reviews_container{
    background: #F3F5FF;
    padding-block: 72px;
}
.reviews_container > h2 {
  color: var(--vt-c-action-color);
  text-align: center;
  font-family: Lato;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.583px;
  padding-bottom: 10px;
}
.reviews_container > p {
  width: 550.661px;
  color: rgba(91, 112, 175, 0.8);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 166.667% */
  margin-inline: auto;
}

.testimonials_container{
    display: inline-flex;
    overflow: hidden;
    gap: 32px;
    transform: translateX(-5%);
    padding-block: 40px;
}

.dots{
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
