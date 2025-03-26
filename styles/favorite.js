// function getFavorites() {
//   return JSON.parse(localStorage.getItem("favorites")) || [];
// }

// function saveFavorites(favorites) {
//   localStorage.setItem("favorites", JSON.stringify(favorites));
// }

// function renderFavorites() {
//   const itemWonders = document.querySelector(".list");
//   itemWonders.innerHTML = "";

//   const favorites = getFavorites();

//   if (favorites.length === 0) {
//     itemWonders.innerHTML = "<p>Нет избранных мест.</p>";
//     return;
//   }

//   favorites.forEach((wonder) => {
//     const item = document.createElement("li");
//     item.classList.add("item");

//     item.innerHTML = `
//       <img class="wrap-img" src="${wonder.image}" alt="">
//       <div>
//         <h3 class="title">${wonder.title}</h3>
//         <p class="text">${wonder.description}</p>
//       </div>
//       <button class="remove-btn" data-id="${wonder.id}">Удалить</button>
//     `;

//     itemWonders.appendChild(item);
//   });

//   document.querySelectorAll(".remove-btn").forEach((button) => {
//     button.addEventListener("click", function () {
//       removeFavorite(this.dataset.id);
//       renderFavorites();
//     });
//   });
// }

// function removeFavorite(id) {
//   let favorites = getFavorites();
//   favorites = favorites.filter((fav) => fav.id !== id);
//   saveFavorites(favorites);
// }

// renderFavorites();

// function getFavorites() {
//   return JSON.parse(localStorage.getItem("favorites")) || [];
// }

// function saveFavorites(favorites) {
//   localStorage.setItem("favorites", JSON.stringify(favorites));
// }

// // Функция отрисовки избранных карточек
// function renderFavorites() {
//   const itemWonders = document.querySelector(".list");
//   itemWonders.innerHTML = "";

//   const favorites = getFavorites();

//   if (favorites.length === 0) {
//     itemWonders.innerHTML = "<p>Нет избранных мест.</p>";
//     return;
//   }

//   favorites.forEach((wonder) => {
//     const item = document.createElement("li");
//     item.classList.add("item");

//     item.innerHTML = `
//       <img class="wrap-img" src="${wonder.image}" alt="">
//       <div>
//         <h3 class="title">${wonder.title}</h3>
//         <p class="text">${wonder.description}</p>
//       </div>
//       <button class="remove-btn" data-id="${wonder.id}">Удалить</button>
//     `;

//     itemWonders.appendChild(item);
//   });

//   document.querySelectorAll(".remove-btn").forEach((button) => {
//     button.addEventListener("click", function () {
//       removeFavorite(this.dataset.id);
//       renderFavorites();
//     });
//   });
// }

// // Функция удаления из избранного
// function removeFavorite(id) {
//   let favorites = getFavorites();
//   favorites = favorites.filter((fav) => fav.id !== id);
//   saveFavorites(favorites);
// }

// renderFavorites();

