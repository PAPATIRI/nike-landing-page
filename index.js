let slideIndex = 0;
let slider = document.getElementById("slider");
let slides = slider.getElementsByClassName("slide");

let slideControl = document.getElementById("slide-control");
let slideControlItems =
  slideControl.getElementsByClassName("slide-control-item");

slider.style.marginTop = "-" + slideIndex + "00vh";
setTimeout(() => {
  slideControlItems[slideIndex].classList.add("active");
  slides[slideIndex].classList.add("active");
}, 500);

// functon choose product
let chooseProduct = (index) => {
  if (index === slideIndex) return;

  slideIndex = index;

  let currentSlideControl = slideControl.querySelector(
    ".slide-control-item.active"
  );

  currentSlideControl.classList.remove("active");

  let currentSlide = slider.querySelector(".slide.active");
  currentSlide.classList.remove("active");

  setTimeout(() => {
    slider.style.marginTop = "-" + slideIndex + "00vh";
    slideControlItems[slideIndex].classList.add("active");
    slides[slideIndex].classList.add("active");
  }, 1000);
};

Array.from(slideControlItems).forEach((el, index) => {
  el.addEventListener("click", function () {
    chooseProduct(index);
  });
});

// modal handler
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("modal-close");

closeBtn.onclick = () => {
  modal.style.display = "none";
};

let moreImages = document.getElementsByClassName("more-images-item");
let previewImages = document.getElementsByClassName("img-preview");

Array.from(moreImages).forEach((el) => {
  console.log(el);
  el.onclick = () => {
    let imgItems = el.parentElement.getElementsByTagName("img");

    Array.from(imgItems).forEach((item, index) => {
      previewImages[index].src = item.src;
    });

    let img = el.querySelector("img");
    modal.style.display = "block";

    let modalContent = modal.querySelector(".modal-content");
    modalContent.src = img.src;

    let temp = modalContent.cloneNode(true);
    modalContent.parentNode.replaceChild(temp, modalContent);
  };
});
