document.querySelector("#galleri_knap1").addEventListener("click", changeSlide1);

let currentSlide1 = 1;
let currentSlide2 = 1;

function changeSlide1() {
  console.log("changeSlide", currentSlide1);
  if (currentSlide1 === 1) {
    document.querySelector("#galleri_image1").classList.remove("change_image1");
    document.querySelector("#galleri_image1").classList.add("change_image2");
    document.querySelector("#galleri_image2").classList.remove("change_image2");
    document.querySelector("#galleri_image2").classList.add("change_image3");
    document.querySelector("#galleri_image3").classList.remove("change_image3");
    document.querySelector("#galleri_image3").classList.add("change_image4");
    document.querySelector("#galleri_image4").classList.remove("change_image4");
    document.querySelector("#galleri_image4").classList.add("change_image1");
    currentSlide1 = 2;
  } else if (currentSlide1 === 2) {
    document.querySelector("#galleri_image1").classList.remove("change_image2");
    document.querySelector("#galleri_image1").classList.add("change_image3");
    document.querySelector("#galleri_image2").classList.remove("change_image3");
    document.querySelector("#galleri_image2").classList.add("change_image4");
    document.querySelector("#galleri_image3").classList.remove("change_image4");
    document.querySelector("#galleri_image3").classList.add("change_image1");
    document.querySelector("#galleri_image4").classList.remove("change_image1");
    document.querySelector("#galleri_image4").classList.add("change_image2");

    currentSlide1 = 3;
  } else if (currentSlide1 === 3) {
    document.querySelector("#galleri_image1").classList.remove("change_image3");
    document.querySelector("#galleri_image1").classList.add("change_image4");
    document.querySelector("#galleri_image2").classList.remove("change_image4");
    document.querySelector("#galleri_image2").classList.add("change_image1");
    document.querySelector("#galleri_image3").classList.remove("change_image1");
    document.querySelector("#galleri_image3").classList.add("change_image2");
    document.querySelector("#galleri_image4").classList.remove("change_image2");
    document.querySelector("#galleri_image4").classList.add("change_image3");
    currentSlide1 = 4;
  } else if (currentSlide1 === 4) {
    document.querySelector("#galleri_image1").classList.remove("change_image4");
    document.querySelector("#galleri_image1").classList.add("change_image1");
    document.querySelector("#galleri_image2").classList.remove("change_image1");
    document.querySelector("#galleri_image2").classList.add("change_image2");
    document.querySelector("#galleri_image3").classList.remove("change_image2");
    document.querySelector("#galleri_image3").classList.add("change_image3");
    document.querySelector("#galleri_image4").classList.remove("change_image3");
    document.querySelector("#galleri_image4").classList.add("change_image4");
    currentSlide1 = 1;
}
}

document.querySelector("#galleri_knap2").addEventListener("click", changeSlide2);

function changeSlide2() {
  console.log("changeslide", currentSlide2);

  if (currentSlide2 === 1) {
    document.querySelector("#galleri_img1").classList.remove("change_img1");
    document.querySelector("#galleri_img1").classList.add("change_img2");
    document.querySelector("#galleri_img2").classList.remove("change_img2");
    document.querySelector("#galleri_img2").classList.add("change_img3");
    document.querySelector("#galleri_img3").classList.remove("change_img3");
    document.querySelector("#galleri_img3").classList.add("change_img4");
    document.querySelector("#galleri_img4").classList.remove("change_img4");
    document.querySelector("#galleri_img4").classList.add("change_img1");
    currentSlide2 = 2;
  } else if (currentSlide2 === 2) {
    document.querySelector("#galleri_img1").classList.remove("change_img2");
    document.querySelector("#galleri_img1").classList.add("change_img3");
    document.querySelector("#galleri_img2").classList.remove("change_img3");
    document.querySelector("#galleri_img2").classList.add("change_img4");
    document.querySelector("#galleri_img3").classList.remove("change_img4");
    document.querySelector("#galleri_img3").classList.add("change_img1");
    document.querySelector("#galleri_img4").classList.remove("change_img1");
    document.querySelector("#galleri_img4").classList.add("change_img2");
    currentSlide2 = 3;
  } else if (currentSlide2 === 3) {
    document.querySelector("#galleri_img1").classList.remove("change_img3");
    document.querySelector("#galleri_img1").classList.add("change_img4");
    document.querySelector("#galleri_img2").classList.remove("change_img4");
    document.querySelector("#galleri_img2").classList.add("change_img1");
    document.querySelector("#galleri_img3").classList.remove("change_img1");
    document.querySelector("#galleri_img3").classList.add("change_img2");
    document.querySelector("#galleri_img4").classList.remove("change_img2");
    document.querySelector("#galleri_img4").classList.add("change_img3");
    currentSlide2 = 4;
  } else if (currentSlide2 === 4) {
    document.querySelector("#galleri_img1").classList.remove("change_img4");
    document.querySelector("#galleri_img1").classList.add("change_img1");
    document.querySelector("#galleri_img2").classList.remove("change_img1");
    document.querySelector("#galleri_img2").classList.add("change_img2");
    document.querySelector("#galleri_img3").classList.remove("change_img2");
    document.querySelector("#galleri_img3").classList.add("change_img3");
    document.querySelector("#galleri_img4").classList.remove("change_img3");
    document.querySelector("#galleri_img4").classList.add("change_img4");
    currentSlide2 = 1;
  }
}
