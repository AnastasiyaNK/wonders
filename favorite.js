const images = [
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  "https://images.unsplash.com/photo-1520986606214-8b456906c813",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
];


const root = document.getElementById("root")

let sliderIndex = 0;

const frame = document.createElement("div");
const cards = document.createElement("div");
const roundContainer = document.createElement("div");
const triggers = document.createElement("div");
const leftBtn = document.createElement("button")
const rightBtn = document.createElement("button");


frame.classList.add("frame");
cards.classList.add("cards");
roundContainer.classList.add("rounds");
triggers.classList.add("triggers");

leftBtn.innerText = "❮";
rightBtn.innerText = "❯";

triggers.append(leftBtn, rightBtn);

images.forEach((image, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    console.log(image);
    card.style.backgroundImage = `url("${image}")`
    cards.append(card);

    const roundBtn = document.createElement("button");
    if (index === 0) {
        roundBtn.classList.add("acent");
    }
    roundContainer.append(roundBtn);

    roundBtn.addEventListener("click", () => {
        sliderIndex = index;
        updateSlider(); 

    })
    
})

frame.append(cards, roundContainer, triggers)
root.append(frame)

function updateSlider() {
    cards.style.transform = `translateX(${-sliderIndex * 500}px)`;

    document.querySelectorAll(".rounds button").forEach((btn, i) => {
        btn.classList.toggle("acent", i === sliderIndex)
    })
}

function goleft() {
    if (sliderIndex > 0) {
        sliderIndex--;
    } else {
        sliderIndex = images.length - 1;
    }
    updateSlider(); 
}
function goRight() {
    if (sliderIndex < images.length - 1) {
        sliderIndex++;
    } else {
        sliderIndex = 0;
    }
      updateSlider(); 
}
leftBtn.addEventListener("click", goleft);
rightBtn.addEventListener("click", goRight);