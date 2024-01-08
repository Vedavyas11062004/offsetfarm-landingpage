<template>
  <div class="reviews_container">
    <h2>Hear what our clients say</h2>
    <p>
      See how our products and services have made a positive impact on our
      customers' lives.
    </p>

    <div class="testimonials_container">
      <div
        class="carousel"
        ref="carouselRef"
        @mouseenter="stopCarousel"
        @mouseleave="startCarousel"
      >
        <div
          class="cards-container"
          :style="{ transform: `translateX(${offset}px)` }"
        >
          <testimonials
            v-for="(card, index) in cards"
            :key="index"
            :content="card.content"
            :designation="card.designation"
            :imageUrl="card.imageUrl"
            :name="card.name"
            class="card"
          />
        </div>
      </div>
    </div>

    <!-- <div class="dots">
      <img src="@/assets/dots.png" alt="dots.." />
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import testimonials from "./testimonials.vue";
import memoji1Image from "@/assets/LandingPage/memoji-1.svg"; // Import the image URLs
import memoji2Image from "@/assets/LandingPage/memoji-2.svg";

const cards = ref([
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl integer scelerisque in tortor sagittis erat massa. Varius facilisis ornare dictumst sem lobortis vitae lacus in in.",
    name: "Sophie Moore",
    imageUrl: memoji1Image,
    designation: "Head of Marketing",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl integer scelerisque in tortor sagittis erat massa. Varius facilisis ornare dictumst sem lobortis vitae lacus in in.",
    name: "Sophie More",
    imageUrl: memoji1Image,
    designation: "Product Manager at Infosys",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl integer scelerisque in tortor sagittis erat massa. Varius facilisis ornare dictumst sem lobortis vitae lacus in in.",
    name: "Adam Gwadyr",
    imageUrl: memoji2Image,
    designation: "Entrepreneur",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl integer scelerisque in tortor sagittis erat massa. Varius facilisis ornare dictumst sem lobortis vitae lacus in in.",
    name: "Sophie Moore",
    imageUrl: memoji1Image,
    designation: "Head of Marketing",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl integer scelerisque in tortor sagittis erat massa. Varius facilisis ornare dictumst sem lobortis vitae lacus in in.",
    name: "Sophie More",
    imageUrl: memoji1Image,
    designation: "Product Manager at Infosys",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl integer scelerisque in tortor sagittis erat massa. Varius facilisis ornare dictumst sem lobortis vitae lacus in in.",
    name: "Adam Gwadyr",
    imageUrl: memoji2Image,
    designation: "Entrepreneur",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl integer scelerisque in tortor sagittis erat massa. Varius facilisis ornare dictumst sem lobortis vitae lacus in in.",
    name: "Sophie Moore",
    imageUrl: memoji1Image,
    designation: "Head of Marketing",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl integer scelerisque in tortor sagittis erat massa. Varius facilisis ornare dictumst sem lobortis vitae lacus in in.",
    name: "Sophie More",
    imageUrl: memoji1Image,
    designation: "Product Manager at Infosys",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl integer scelerisque in tortor sagittis erat massa. Varius facilisis ornare dictumst sem lobortis vitae lacus in in.",
    name: "Adam Gwadyr",
    imageUrl: memoji2Image,
    designation: "Entrepreneur",
  },
  // Repeat the pattern for the number of cards you want initially
]);

const offset = ref(0);
let intervalId = null;
const carouselRef = ref(null);
const cardWidth = ref(512);

const startCarousel = () => {
  intervalId = setInterval(() => {
    offset.value -= cardWidth.value; // Adjust card width as needed
    if (offset.value <= -((cards.value.length - 2) * cardWidth.value)) {
      offset.value = 0;
    }
  }, 2000);
};

const stopCarousel = () => {
  clearInterval(intervalId);
};

const updateCardWidth = () => {
  if (window.innerWidth <= 800) {
    cardWidth.value = 364;
  } else {
    cardWidth.value = 512;
  }
};

onMounted(() => {
  startCarousel();
  updateCardWidth();
  window.addEventListener("resize", updateCardWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateCardWidth);
});
</script>

<style scoped>
.carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
  height: fit-content; /* Adjust height as needed */
}

.cards-container {
  display: flex;
  transition: transform 1s ease; /* Adjust transition duration */
}

.card {
  flex: 0 0 auto;
  margin: 0 10px;
  padding: 20px;
  border-radius: 8px;
}
.reviews_container {
  background: #f3f5ff;
  padding-block: 72px;
  overflow: hidden;
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
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 166.667% */
  margin-inline: auto;
}

.testimonials_container {
  display: inline-flex;
  overflow: hidden;
  gap: 32px;
  padding-block: 40px;
}

.dots {
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (max-width: 1000px) {
  .reviews_container {
    margin-top: 50px;
  }
  .reviews_container > h2 {
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.583px;
    width: 90%;
    margin-inline: auto;
  }
  .reviews_container > p {
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    width: 90%;
    margin-inline: auto;
  }
}
</style>
