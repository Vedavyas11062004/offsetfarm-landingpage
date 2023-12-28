<script setup>
import { ref } from "vue";
const expanded = ref(false);
const productsExpanded = ref(false);

const toggleAction = () => {
  expanded.value = !expanded.value;
};

const productsToggle = () => {
  productsExpanded.value = !productsExpanded.value;
};
</script>

<template>
  <div class="header__container" :data-expanded="expanded">
    <div class="logo">
      <img src="@/assets/logo.svg" />
    </div>
    <div :data-expanded="expanded" class="toggle-button" @click="toggleAction">
      <img v-if="!expanded" src="@/assets/menu.svg" alt="toggle_button" />
      <img v-else src="@/assets/cross.svg" alt="toggle_button" />
    </div>
    <div :data-expanded="expanded" class="list_div">
      <ul class="list" name="list">
        <li>Home</li>
        <li>
          <div
            class="products_div"
            :data-expanded="productsExpanded"
            @click="productsToggle"
          >
            <div class="products">
              <span>Products</span>
              <img src="@/assets/downArrow.svg" alt="downarrow.." />
            </div>
            <ul class="products_list">
              <li>
                <img src="@/assets/connect-img.svg" alt="connect" />
                <span>Connect</span>
                <img src="@/assets/sideArrow.svg" alt="sideArrow" class="sidearrow" />
              </li>
              <li>
                <img src="@/assets/Trace-img.svg" alt="trace" />
                <span>Trace</span>
                <img src="@/assets/sideArrow.svg" alt="sideArrow" class="sidearrow"/>
              </li>
              <li>
                <img src="@/assets/Teamer-img.svg" alt="teamer" />
                <span>Teamer</span>
                <img src="@/assets/sideArrow.svg" alt="sideArrow" class="sidearrow"/>
              </li>
              <li>
                <img src="@/assets/Pulse-img.svg" alt="pulse" />
                <span>Pulse</span>
                <img src="@/assets/sideArrow.svg" alt="sideArrow" class="sidearrow"/>
              </li>
              <li>
                <img src="@/assets/snap-img.svg" alt="snap" />
                <span>Snap</span>
                <img src="@/assets/sideArrow.svg" alt="sideArrow" class="sidearrow" />
              </li>
            </ul>
          </div>
        </li>
        <li>Testimonials</li>
        <li>Industries</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header__container {
  display: flex;
  align-items: center;
  width: 875px;
  position: relative;
  justify-content: space-between;
  margin-left: 77px;
  margin-block: 2rem;
}

.toggle-button {
  display: none;
}
.toggle-button:hover {
  cursor: pointer;
}

/* .logo {
  position: absolute;
  left: 2.5%;
} */

.list {
  list-style: none;
  padding: 0%;
  display: flex;
  gap: 44px;
  margin-left: 10%;
}
.list > li {
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.58px;
  padding-block: 0.5rem;
  font-weight: 500;
  color: var(--vt-c-text-color);
}

.list > li:hover {
  cursor: pointer;
  color: var(--vt-c-action-color);
}

.list > li:nth-child(2) {
  cursor: pointer;
  color: var(--vt-c-text-color);
}
.products_div {
  position: relative;
}

.products_div[data-expanded="true"] > .products_list {
  list-style: none;
  position: absolute;
  padding: 0%;
  display: block;
  margin-block: 0.5rem;
  border: 1px solid #EFF0F6;
  width: 221px;
  height: 250px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-block: 21px;
  padding-left: 19px;
  background-color: white;
}
.products {
  display: flex;
  gap: 1rem;
}

.products:hover > span{
  color: var(--vt-c-action-color);
}
.products_list { 
  display: none;
}
.products_list > li {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.sidearrow{
  display: none;
}
.products_list>li:hover{
 color: var(--vt-c-action-color);
}
.products_list>li:hover .sidearrow{
  display: block;
  cursor: pointer;
}

@media (max-width: 800px) {
  .header__container {
    margin-left: 0px;
    width: 100%;
    justify-content: space-between;
    margin-top: 0%;
  }
  .header__container[data-expanded="true"] >.logo {
    display: none;
  }
  .logo {
    margin-right: 20px;
    margin-top: 20px;
    margin-left: 10px;
  }
  .toggle-button[data-expanded="false"] {
    display: block;
    margin-right: 20px;
    margin-top: 20px;
  }
  .toggle-button[data-expanded="true"] {
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 9999;
    background-color: white;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .toggle-button[data-expanded="true"] > img {
    width: 10px;
    height: 12px;
  }
  .list_div[data-expanded="false"] {
    display: none;
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #279de0;
  }
  .list_div[data-expanded="true"] {
    display: block;
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #279de0;
  }
  .list {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
  }
}
</style>
