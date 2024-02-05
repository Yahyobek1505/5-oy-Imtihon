import { creatCard, creatRegion, loader } from "./function.js";
const search = document.getElementById("search");
const mainCard = document.getElementById("mainCard");
const regionAfrica = document.querySelector("#regionAfrica");
const regionAmerica = document.querySelector("#regionAmerica");
const regionAsia = document.querySelector("#regionAsia");
const regionEurope = document.querySelector("#regionEurope");
const regionOceania = document.querySelector("#regionOceania");
const infoCard = document.querySelector(".card");
const mode = document.querySelector(".mode");

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://frontend-mentor-apis-6efy.onrender.com/countries?limit=50", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.data.length) {
        data.data.forEach((countries) => {
          let card = creatCard(countries);
          mainCard.innerHTML += card;
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
const country = document.getElementsByClassName("country");
search.addEventListener("input", function () {
  Array.from(country).forEach((el) => {
    if (el.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      el.parentElement.parentElement.style.display = "grid";
    } else {
      el.parentElement.parentElement.style.display = "none";
    }
  });
});

infoCard &&
  infoCard.document.addEventListener("click", function () {
    console.log("hello");
    const nameList = document.querySelectorAll("div.card");
    nameList.forEach((item) => {
      item &&
      item.addEventListener("click", function () {
        let id = this.parentNode.parentNode.getAttribute("data-id").substring(5);
        console.log(id);
        if (id) {
          let urlManzil = window.location.href.substring(0,window.location.href.search("index")
          );
            window.location.assign(`${urlManzil}./pages/about.html?id=${id}`);
          }
        });
    });
  });

loader();
AmagiLoader.show();
setTimeout(() => {
  AmagiLoader.hide();
}, 3000);

regionAfrica &&
  regionAfrica.addEventListener("click", function () {
    fetch(
      "https://frontend-mentor-apis-6efy.onrender.com/countries?region=Africa",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        mainCard.innerHTML = "";
        if (data.data.length) {
          data.data.forEach((regions) => {
            let cards = creatRegion(regions);
            mainCard.innerHTML += cards;
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
regionAmerica &&
  regionAmerica.addEventListener("click", function () {
    fetch(
      "https://frontend-mentor-apis-6efy.onrender.com/countries?region=Americas",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        mainCard.innerHTML = "";
        if (data.data.length) {
          data.data.forEach((regions) => {
            let cards = creatRegion(regions);
            mainCard.innerHTML += cards;
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
regionAsia &&
  regionAsia.addEventListener("click", function () {
    fetch(
      "https://frontend-mentor-apis-6efy.onrender.com/countries?region=Asia",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        mainCard.innerHTML = "";
        if (data.data.length) {
          data.data.forEach((regions) => {
            let cards = creatRegion(regions);
            mainCard.innerHTML += cards;
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
regionEurope &&
  regionEurope.addEventListener("click", function () {
    fetch(
      "https://frontend-mentor-apis-6efy.onrender.com/countries?region=Europe",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        mainCard.innerHTML = "";
        if (data.data.length) {
          data.data.forEach((regions) => {
            let cards = creatRegion(regions);
            mainCard.innerHTML += cards;
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
regionOceania &&
  regionOceania.addEventListener("click", function () {
    fetch(
      "https://frontend-mentor-apis-6efy.onrender.com/countries?region=Oceania",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        mainCard.innerHTML = "";
        if (data.data.length) {
          data.data.forEach((regions) => {
            let cards = creatRegion(regions);
            mainCard.innerHTML += cards;
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
