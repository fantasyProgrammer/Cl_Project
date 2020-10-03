//Global Variables
let store_objects;

//DOM selections
let card_title = document.querySelectorAll(".card-title");
let card_text = document.querySelectorAll(".card-text");
let card_images = document.querySelectorAll(".card-img-top");
let card_btns = document.querySelectorAll(".btn");
let modal_img = document.querySelector(".modal-img");
let modal_text = document.querySelector(".modal-text");
let modal_price = document.querySelector(".modal-price");


//async function + use of callbacks
let retrieve_data = async function(e) {
  e.preventDefault();
  const res = await fetch("data.json");
  store_objects = await res.json();
  display_data();
}

let display_data = function() {
  for(let i = 0; i < card_title.length; i++){
    card_title[i].textContent = store_objects[i].title;
  }

  for(let i = 0; i < card_title.length; i++){
    card_text[i].textContent = store_objects[i].description;
  }

  for(let i = 0; i < card_images.length; i++){
    card_images[i].src = store_objects[i].img;
    card_images[i].classList += "card-img-top product mx-auto mt-4";
  }
}

let display_modal = function() {

}

//Event listeners
window.addEventListener("load", retrieve_data);
for(let i = 0; i < card_btns.length; i++){
  card_btns[i].addEventListener("click", () => {
    modal_img.src = store_objects[i].img;
    modal_text.textContent = store_objects[i].description;
    modal_price.textContent = "price: " + store_objects[i].price;
  });
}
