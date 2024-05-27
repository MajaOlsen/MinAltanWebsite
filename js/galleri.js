document.querySelector("#galleri_knap").addEventListener("click", changeSlide);

let currentSlide = 1;

function changeSlide() {
  console.log("changeSlide", currentSlide);

  if (currentSlide === 1) {
    document.querySelector("#galleri_img1").classList.remove("change_image1");
    document.querySelector("#galleri_img1").classList.add("change_image2");
    document.querySelector("#galleri_img2").classList.remove("change_image2");
    document.querySelector("#galleri_img2").classList.add("change_image3");
    document.querySelector("#galleri_img3").classList.remove("change_image3");
    document.querySelector("#galleri_img3").classList.add("change_image4");
    document.querySelector("#galleri_img4").classList.remove("change_image4");
    document.querySelector("#galleri_img4").classList.add("change_image5");
    document.querySelector("#galleri_img5").classList.remove("change_image5");
    document.querySelector("#galleri_img5").classList.add("change_image6");
    document.querySelector("#galleri_img6").classList.remove("change_image6");
    document.querySelector("#galleri_img6").classList.add("change_image2");
    currentSlide = 2;
  } else if (currentSlide === 2) {
    document.querySelector("#galleri_img1").classList.remove("change_image2");
    document.querySelector("#galleri_img1").classList.add("change_image3");
    document.querySelector("#galleri_img2").classList.remove("change_image3");
    document.querySelector("#galleri_img2").classList.add("change_image4");
    document.querySelector("#galleri_img3").classList.remove("change_image4");
    document.querySelector("#galleri_img3").classList.add("change_image5");
    document.querySelector("#galleri_img4").classList.remove("change_image5");
    document.querySelector("#galleri_img4").classList.add("change_image6");
    document.querySelector("#galleri_img5").classList.remove("change_image6");
    document.querySelector("#galleri_img5").classList.add("change_image1");
    document.querySelector("#galleri_img6").classList.remove("change_image1");
    document.querySelector("#galleri_img6").classList.add("change_image3");
    currentSlide = 3;
  } else if (currentSlide === 3) {
    document.querySelector("#galleri_img1").classList.remove("change_image3");
    document.querySelector("#galleri_img1").classList.add("change_image4");
    document.querySelector("#galleri_img2").classList.remove("change_image4");
    document.querySelector("#galleri_img2").classList.add("change_image5");
    document.querySelector("#galleri_img3").classList.remove("change_image5");
    document.querySelector("#galleri_img3").classList.add("change_image6");
    document.querySelector("#galleri_img4").classList.remove("change_image6");
    document.querySelector("#galleri_img4").classList.add("change_image1");
    document.querySelector("#galleri_img5").classList.remove("change_image1");
    document.querySelector("#galleri_img5").classList.add("change_image2");
    document.querySelector("#galleri_img6").classList.remove("change_image2");
    document.querySelector("#galleri_img6").classList.add("change_image4");
    currentSlide = 4;
  } else if (currentSlide === 4) {
    document.querySelector("#galleri_img1").classList.remove("change_image4");
    document.querySelector("#galleri_img1").classList.add("change_image5");
    document.querySelector("#galleri_img2").classList.remove("change_image5");
    document.querySelector("#galleri_img2").classList.add("change_image6");
    document.querySelector("#galleri_img3").classList.remove("change_image6");
    document.querySelector("#galleri_img3").classList.add("change_image1");
    document.querySelector("#galleri_img4").classList.remove("change_image1");
    document.querySelector("#galleri_img4").classList.add("change_image2");
    document.querySelector("#galleri_img5").classList.remove("change_image2");
    document.querySelector("#galleri_img5").classList.add("change_image3");
    document.querySelector("#galleri_img6").classList.remove("change_image3");
    document.querySelector("#galleri_img6").classList.add("change_image5");
    currentSlide = 5;
  } else if (currentSlide === 5) {
    document.querySelector("#galleri_img1").classList.remove("change_image5");
    document.querySelector("#galleri_img1").classList.add("change_image6");
    document.querySelector("#galleri_img2").classList.remove("change_image6");
    document.querySelector("#galleri_img2").classList.add("change_image1");
    document.querySelector("#galleri_img3").classList.remove("change_image1");
    document.querySelector("#galleri_img3").classList.add("change_image2");
    document.querySelector("#galleri_img4").classList.remove("change_image2");
    document.querySelector("#galleri_img4").classList.add("change_image3");
    document.querySelector("#galleri_img5").classList.remove("change_image3");
    document.querySelector("#galleri_img5").classList.add("change_image4");
    document.querySelector("#galleri_img6").classList.remove("change_image4");
    document.querySelector("#galleri_img6").classList.add("change_image6");
    currentSlide = 6;
  } else if (currentSlide === 6) {
    document.querySelector("#galleri_img1").classList.remove("change_image6");
    document.querySelector("#galleri_img1").classList.add("change_image1");
    document.querySelector("#galleri_img2").classList.remove("change_image1");
    document.querySelector("#galleri_img2").classList.add("change_image2");
    document.querySelector("#galleri_img3").classList.remove("change_image2");
    document.querySelector("#galleri_img3").classList.add("change_image3");
    document.querySelector("#galleri_img4").classList.remove("change_image3");
    document.querySelector("#galleri_img4").classList.add("change_image4");
    document.querySelector("#galleri_img5").classList.remove("change_image4");
    document.querySelector("#galleri_img5").classList.add("change_image5");
    document.querySelector("#galleri_img6").classList.remove("change_image5");
    document.querySelector("#galleri_img6").classList.add("change_image6");
    currentSlide = 1;
  }
}

document.querySelector("#galleri_knap").addEventListener("click", changeSlide);

let currentslide = 1;

function changeslide() {
  console.log("changeslide", currentslide);

  if (currentSlide === 1) {
    document.querySelector("#galleri_img1").classList.remove("change_img1");
    document.querySelector("#galleri_img1").classList.add("change_img2");
    document.querySelector("#galleri_img2").classList.remove("change_img2");
    document.querySelector("#galleri_img2").classList.add("change_img3");
    document.querySelector("#galleri_img3").classList.remove("change_img3");
    document.querySelector("#galleri_img3").classList.add("change_img4");
    currentslide = 2;
  } else if (currentslide === 2) {
    document.querySelector("#galleri_img1").classList.remove("change_img2");
    document.querySelector("#galleri_img1").classList.add("change_img3");
    document.querySelector("#galleri_img2").classList.remove("change_img3");
    document.querySelector("#galleri_img2").classList.add("change_img4");
    document.querySelector("#galleri_img3").classList.remove("change_img4");
    document.querySelector("#galleri_img3").classList.add("change_img1");
    currentslide = 3;
  } else if (currentslide === 3) {
    document.querySelector("#galleri_img1").classList.remove("change_img3");
    document.querySelector("#galleri_img1").classList.add("change_img4");
    document.querySelector("#galleri_img2").classList.remove("change_img4");
    document.querySelector("#galleri_img2").classList.add("change_img1");
    document.querySelector("#galleri_img3").classList.remove("change_img1");
    document.querySelector("#galleri_img3").classList.add("change_img2");
    currentslide = 4;
  } else if (currentslide === 4) {
    document.querySelector("#galleri_img1").classList.remove("change_img4");
    document.querySelector("#galleri_img1").classList.add("change_img1");
    document.querySelector("#galleri_img2").classList.remove("change_img1");
    document.querySelector("#galleri_img2").classList.add("change_img2");
    document.querySelector("#galleri_img3").classList.remove("change_img2");
    document.querySelector("#galleri_img3").classList.add("change_img3");
    currentslide = 1;
  }
}
