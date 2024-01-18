<script setup></script>
<template>
  <div class="footer_container">
    <div class="leftPart">
      <img src="@/assets/LandingPage/logo.svg" alt="logo.." />
      <p>Enterprise Suite for Impact</p>
      <div class="socialIcons">
        <a href="https://twitter.com/offsetfarm">
          <img src="@/assets/Social_Media_Icons/Twitter.svg" alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/company/offsetfarm/">
          <img src="@/assets/Social_Media_Icons/LinkedIn.svg" alt="linkdin" />
        </a>
        <!-- <img src="@/assets/Social_Media_Icons/YouTube.svg" alt="youtube" /> -->
      </div>
    </div>
    <div class="lists">
      <div class="list left">
        <h3>Products</h3>
        <ul>
          <li>
            <router-link
              to="/products/connect"
              style="text-decoration: none; color: inherit"
              >Connect</router-link
            >
          </li>
          <li>
            <router-link
              to="/products/trace"
              style="text-decoration: none; color: inherit"
              >Trace</router-link
            >
          </li>
          <li>
            <router-link
              to="/products/teamer"
              style="text-decoration: none; color: inherit"
              >Teamer</router-link
            >
          </li>
          <li>
            <router-link
              to="/products/pulse"
              style="text-decoration: none; color: inherit"
              >Pulse</router-link
            >
          </li>
          <li>
            <router-link
              to="/products/snap"
              style="text-decoration: none; color: inherit"
              >Snap</router-link
            >
          </li>
        </ul>
      </div>
      <div class="list rightTop">
        <h3>Resources</h3>
        <ul>
          <li>Products</li>
          <li>Testimonials</li>
          <li>Industries</li>
        </ul>
      </div>
      <div class="list rightBottom">
        <h3>Contact Us</h3>
        <ul>
          <li>info@regenfi.tech</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footerend">
    <hr class="line" />
    <div>
      <p>Copyright © 2023 Regenfi</p>
      <p>
        All Rights Reserved |
        <span
          ><router-link
            to="/legal"
            style="text-decoration: none; color: inherit"
            >Legal</router-link
          ></span
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.footer_container {
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
  display: flex;
  padding-left: 77px;
  padding-top: 70px;
  padding-right: 168px;
  /* gap: 300px; */
  padding-bottom: 100px;
  justify-content: space-between;
}
.leftPart > p {
  color: var(--vt-c-paragraph-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.583px;
  padding-top: 8px;
}

.socialIcons {
  display: inline-flex;
  align-items: center;
  gap: 22px;
  padding-top: 24px;
}
.lists {
  display: flex;
  gap: 105px;
}
.list > ul {
  list-style: none;
  padding-left: 0%;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.list > ul > li {
  color: var(--vt-c-heading-color);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.583px;
}
.list > h3 {
  color: var(--vt-c-action-color);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.583px;
  text-transform: uppercase;
}

.line {
  width: 90%;
  height: 1px;
  background: #d9dbe9;
  margin-inline: 77px;
  opacity: 0.5;
}

.footerend {
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

.footerend > div {
  padding-block: 26px;
  display: flex;
  width: 90%;
  margin-inline: 77px;
  justify-content: space-between;
}

.footerend > div > p {
  color: var(--vt-c-paragraph-color);
}

.footerend > div > p > span {
  color: var(--vt-c-action-color);
}

@media (max-width: 1200px) {
  .footer_container {
    margin-left: 0%;
    flex-direction: column;
    gap: 30px;
    padding-left: 0%;
    padding-right: 0%;
  }
  .leftPart {
    width: 90%;
    margin-inline: auto;
  }
  .lists {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 20px;
    width: 90%;
    margin-inline: auto;
  }
  .left {
    grid-column: 1/2;
    grid-row: span 2;
  }
  .line {
    margin-inline: auto;
  }
  .footerend > div {
    margin-inline: auto;
  }
}
</style>
