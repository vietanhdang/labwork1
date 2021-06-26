<template>
  <div class="container">
    <div class="row">
      <div class="col-auto mr-auto">
        <h4>Recent</h4>
      </div>
      <div class="col-auto">
        <a href="#">View All ></a>
      </div>
    </div>
    <div>
      <ul class="cards">
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img
                src="https://file1.qdnd.vn/data/images/0/2020/09/02/vanphong/dt%20cong%20binh%20vn.jpg"
                class="card-img-top"
              />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card 1</h2>
              <p class="card_text">Content</p>
              <button class="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img
                src="https://file1.qdnd.vn/data/images/0/2020/09/02/vanphong/dt%20cong%20binh%20vn.jpg"
              />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card 2</h2>
              <p class="card_text">Content</p>
              <button class="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img
                src="https://file1.qdnd.vn/data/images/0/2020/09/02/vanphong/dt%20cong%20binh%20vn.jpg"
              />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card 3</h2>
              <p class="card_text">Content</p>
              <button class="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img
                src="https://file1.qdnd.vn/data/images/0/2020/09/02/vanphong/dt%20cong%20binh%20vn.jpg"
                class="card-img-top"
              />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card 4</h2>
              <p class="card_text">Content</p>
              <button class="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-auto mr-auto">
        <h4>Suggest</h4>
      </div>
      <div class="col-auto">
        <a href="#">View All ></a>
      </div>
    </div>
    <div>
      <ul class="cards">
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img
                src="https://file1.qdnd.vn/data/images/0/2020/09/02/vanphong/dt%20cong%20binh%20vn.jpg"
              />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card 5</h2>
              <p class="card_text">Content</p>
              <button class="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img
                src="https://file1.qdnd.vn/data/images/0/2020/09/02/vanphong/dt%20cong%20binh%20vn.jpg"
              />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card 6</h2>
              <p class="card_text">Content</p>
              <button class="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img
                src="https://file1.qdnd.vn/data/images/0/2020/09/02/vanphong/dt%20cong%20binh%20vn.jpg"
              />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card 7</h2>
              <p class="card_text">Content</p>
              <button class="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img
                src="https://file1.qdnd.vn/data/images/0/2020/09/02/vanphong/dt%20cong%20binh%20vn.jpg"
              />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card 8</h2>
              <p class="card_text">Content</p>
              <button class="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.col-auto {
  top: 50px;
}
.mr-auto {
  top: 40px;
}
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,700");

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-family: "Quicksand", serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 0.5rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 64rem) {
  .cards_item {
    width: 25%;
  }
}

.card {
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  text-align: center;
  /* background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%); */
}

.card_title {
  color: blue;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card_text {
  color: black;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
</style>
