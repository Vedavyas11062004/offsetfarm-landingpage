<script setup></script>

<template>
  <div class="second_container">
    <div class="top_part">
      <h3>Get an overview of the <span>Teamer</span> platform</h3>
      <p>
        Optimize <span>team coordination </span> and
        <span>enhance accountability</span> with TEAMER, the nucleus of your
        virtual team's structure and activity.
      </p>
    </div>
    <div class="bottom_part">
      <div class="first_div">
        <img src="@/assets/Teamer/Icon.svg" alt="icon-1" />
        <div>
          <h3>Customer-Team Mapping</h3>
          <p>
            Link your teams directly to customers for personalized and efficient
            service.
          </p>
        </div>
      </div>
      <div class="second_div">
        <div>
          <img src="@/assets/Teamer/Icon-2.svg" alt="icon-2" />
          <h3>Virtual Team Structuring</h3>
          <p>
            Craft a clear virtual workspace that reflects your organization's
            real-world operations.
          </p>
        </div>
        <img src="@/assets/Teamer/image-2.svg" alt="img-2" />
      </div>
      <div class="third_div">
        <div>
          <img src="@/assets/Teamer/Icon-3.svg" alt="icon-3" />
          <h3>Centralized Oversight</h3>
          <p>
            Maintain a bird's-eye view of your entire organization's operations
            from a single point.
          </p>
        </div>
        <img src="@/assets/Teamer/Image-3.svg" alt="img-3" />
      </div>
      <div class="fourth_div">
        <img src="@/assets/Teamer/Icon-4.svg" alt="icon-4" />
        <div>
          <h3>Productivity Enhancement</h3>
          <p>
            Drive team efficiency with a platform designed for visibility and
            streamlined workflows.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.second_container {
  margin-block: 3rem;
}
.top_part {
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-inline: auto;
  align-items: center;
  margin-bottom: 25px;
}
.top_part > h3 {
  color: #303030;
  font-family: Lato;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.2%; /* 53.28px */
  text-transform: capitalize;
}
.top_part > p {
  color: #4e4e4e;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 28.8px */
}
.top_part span {
  color: var(--Action-color, #5b70af);
}
.bottom_part {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  width: 90%;
  margin-inline: auto;
  row-gap: 32px;
  column-gap: 18px;
}
.first_div {
  grid-column: 1/2;
  border-radius: 30px;
  background: #f8f8f8;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 34px;
}
.second_div {
  grid-column: 2/4;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  background: #f8f8f8;
  padding: 32px;
}
.third_div {
  grid-column: 1/3;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  background: #f8f8f8;
  padding: 32px;
  gap:20px;
}
.third_div>div,.second_div>div{
  display: flex;
  flex-direction: column;
}
.third_div>div>img,.second_div>div>img{
  width: 214px;
  padding-bottom: 34px;
}
.third_div>div>h3,.second_div>div>h3{
  color: #303030;
  font-family: Lato;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 133.2%; /* 37.296px */
  text-transform: capitalize;
  padding-bottom: 10px;
}
.third_div>div>p,.second_div>div>p{
  color: #4e4e4e;
  text-align: justify;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
.fourth_div {
  grid-column: 3/4;
  border-radius: 30px;
  background: #f8f8f8;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 34px;
}
.fourth_div > img,.first_div > img{
  width: 214px;
}
.fourth_div > div > h3,.first_div > div > h3{
  color: #303030;
  font-family: Lato;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 133.2%; /* 37.296px */
  text-transform: capitalize;
  padding-bottom: 10px;
}
.fourth_div > div > p,.first_div > div >p{
  color: #4e4e4e;
  text-align: justify;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
}
</style>
