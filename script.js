document.addEventListener("DOMContentLoaded", () => {
  loadWonders();
});

async function loadWonders() {
  try {
    const response = await fetch("./wonders.json");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    renderWonders(data.wonders);
  } catch (error) {
    console.error("Fehler beim Laden der Daten:", error);
    document.querySelector(".list").innerHTML =
      "<p class='error-message'>Daten konnten nicht geladen werden. Versuchen Sie es erneut.</p>";
  }
}

function renderWonders(wonders) {
  const itemWonders = document.querySelector(".list");
  itemWonders.innerHTML = ""; 

  wonders.forEach((wonder) => {
    const item = document.createElement("li");
    item.classList.add("item");

    item.innerHTML = `
      <img class="wrap-img" src="${wonder.image}" alt="${wonder.title}"
           onerror="this.onerror=null; this.src='./img/turizm.jpg';">
      <div class="wrap-container">
        <h3 class="title">${wonder.title}</h3>
        <p class="text">${wonder.description}</p>
         <button class="delete-btn" data-id="${wonder.id}">Entfernen</button>
      </div>
      <div class="wrap-actions">
      <img class="icon like-icon" src="./img/heart-outline-icon.svg" alt="Like" data-title="${wonder.title}">
      </div>
    `;




    const deleteButton = item.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
      item.remove();
    });

    itemWonders.appendChild(item);
  });

   document.querySelectorAll(".like-icon").forEach((icon) => {
     icon.addEventListener("click", () => {
       openModal(icon.dataset.title);
     });
   });
  
  const modalOverlay = document.querySelector(".modal-overlay")
  const closeModalBtn = document.querySelector(".close-modal")

  function openModal(title) {
    modalOverlay.classList.add("active")
    document.body.classList.add("no-scroll")

    document.querySelector(
      ".modal h4"
    ).textContent = `Holen Sie sich einen Coupon für  "${title}"`;
  }

  function closeModal() {
    modalOverlay.classList.remove("active")
    document.body.classList.remove("no-scroll")
    
  }

  closeModalBtn.addEventListener("click", closeModal)

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal()
    }
  })
}
