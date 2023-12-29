<script setup></script>
<template>
  <div class="footer_container">
    <div class="leftPart">
      <img src="@/assets/logo.svg" alt="logo.." />
      <p>Enterprise Suite for Impact</p>
      <div class="socialIcons">
        <img src="@/assets/Social_Media_Icons/Twitter.svg" alt="twitter" />
        <img src="@/assets/Social_Media_Icons/LinkedIn.svg" alt="linkdin" />
        <img src="@/assets/Social_Media_Icons/YouTube.svg" alt="youtube" />
      </div>
    </div>
    <div class="lists">
      <div class="list">
        <h3>Products</h3>
        <ul>
          <li>Connect</li>
          <li>Trace</li>
          <li>Teamer</li>
          <li>Pulse</li>
          <li>snap</li>
        </ul>
      </div>
      <div class="list">
        <h3>Resources</h3>
        <ul>
          <li>Products</li>
          <li>Testimonials</li>
          <li>Industries</li>
        </ul>
      </div>
      <div class="list">
        <h3>Contact Us</h3>
        <ul>
          <li>info@regenfi.tech</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footerend">
    <hr class="line">
    <div>
      <p>Copyright © 2023 Regenfi</p>
      <p>All Rights Reserved | <span>Legal</span></p>
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

.line{
  width: 90%;
  height: 1px;
  background: #D9DBE9;
  margin-inline:77px;
}

.footerend{
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

.footerend>div{
  padding-block: 26px;
  display: flex;
  width: 90%;
  margin-inline: 77px;
  justify-content: space-between;
}

.footerend>div>p{
  color: var(--vt-c-paragraph-color);
}

.footerend>div>p>span{
  color: var(--vt-c-action-color);
}
</style>
