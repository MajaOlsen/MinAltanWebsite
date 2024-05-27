document.querySelector("#galleri_knap").addEventListener("click", changeSlide);

let currentSlide = 1;

function changeSlide(){
    console.log("changeSlide", currentSlide);

    if (currentSlide === 1){
    document.querySelector("#galleri_img1").classList.remove("change_image1")
    document.querySelector("#galleri_img1").classList.add("change_image2")
    document.querySelector("#galleri_img2").classList.remove("change_image2")
    document.querySelector("#galleri_img2").classList.add("change_image3")
    document.querySelector("#galleri_img3").classList.remove("change_image3")
    document.querySelector("#galleri_img3").classList.add("change_image4")
    currentSlide = 2;
}
    else if (currentSlide === 2){
    document.querySelector("#galleri_img1").classList.remove("change_image2")
    document.querySelector("#galleri_img1").classList.add("change_image3")
    document.querySelector("#galleri_img2").classList.remove("change_image3")
    document.querySelector("#galleri_img2").classList.add("change_image4")
    document.querySelector("#galleri_img3").classList.remove("change_image4")
    document.querySelector("#galleri_img3").classList.add("change_image1")
    currentSlide = 3;
}
    else if (currentSlide === 3){
    document.querySelector("#galleri_img1").classList.remove("change_image3")
    document.querySelector("#galleri_img1").classList.add("change_image4")
    document.querySelector("#galleri_img2").classList.remove("change_image4")
    document.querySelector("#galleri_img2").classList.add("change_image1")
    document.querySelector("#galleri_img3").classList.remove("change_image1")
    document.querySelector("#galleri_img3").classList.add("change_image2")
    currentSlide = 4;
}
    else if (currentSlide === 4){
    document.querySelector("#galleri_img1").classList.remove("change_image4")
    document.querySelector("#galleri_img1").classList.add("change_image1")
    document.querySelector("#galleri_img2").classList.remove("change_image1")
    document.querySelector("#galleri_img2").classList.add("change_image2")
    document.querySelector("#galleri_img3").classList.remove("change_image2")
    document.querySelector("#galleri_img3").classList.add("change_image3")
    currentSlide = 1;
}

}
