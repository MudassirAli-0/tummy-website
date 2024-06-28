////////////////////LODER/////////////////////////

let loader;
function loadingfunction() {
  loader = setTimeout(showCase, 100);
}
function showCase() {
  document.querySelector(".main").style.display = "none";
  document.querySelector("#loader").style.display = "block";
  animationAdd();
}

////////////////////NAV BAR /////////////////////

let list = document.querySelectorAll(".list");
let dropdown = document.querySelectorAll(".drop-down");

list.forEach((ele, indx) => {
  ele.addEventListener("mouseenter", function () {
    if (dropdown[indx].classList.contains("show-dropdown")) {
      dropdown[indx].classList.remove("show-dropdown");
    } else {
      list.forEach((elem, ind) => {
        dropdown[ind].classList.remove("show-dropdown");
      });

      dropdown[indx].classList.add("show-dropdown");
    }
  });
});

list.forEach((ele) => {
  ele.addEventListener("mouseenter", function () {
    {
      ele.classList.add("list-color");
    }
  });

  ele.addEventListener("mouseleave", function () {
    ele.classList.remove("list-color");
  });
});

list.forEach((ele, indx) => {
  ele.addEventListener("mouseleave", function () {
    if (dropdown[indx].classList.contains("show-dropdown")) {
      dropdown[indx].classList.remove("show-dropdown");
    } else {
      list.forEach((elem, ind) => {
        dropdown[ind].classList.remove("show-dropdown");
      });

      dropdown[indx].classList.add("show-dropdown");
    }
  });
});

////////////////////// NAV ICON /////////////////////

let searchBtn = document.querySelector(".serch-icon");
let search_drop = document.querySelector(".search-drop");
let crosss = document.querySelector(".cross");

searchBtn.addEventListener("click", function () {
  search_drop.classList.add("search-drop-js");
});

crosss.addEventListener("click", function () {
  search_drop.classList.remove("search-drop-js");
});

//////////////////SIDE BAR//////////////////////

let bag = document.querySelector(".bag-icon");
let side_dropdown = document.querySelector(".side-dropdown");
let top_div = document.querySelector(".top-div");

bag.addEventListener("click", function () {
  side_dropdown.classList.add("side-show");
});

top_div.addEventListener("click", function () {
  side_dropdown.classList.remove("side-show");
});

////////////////////////SLIDER//////////////////////

let slider = document.querySelectorAll(".slider");

let sliderBtn1 = document.querySelector(".btn-1");
let sliderBtn2 = document.querySelector(".btn-2");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box-2");

let sale_text = document.querySelector(".sale-text");
let main_heading = document.querySelector(".main-heading");
let animatedBtn = document.querySelector(".btn");
let back_circle = document.querySelector(".back-circle");
let dog_pic = document.querySelector(".dog-pic");
let animatedBtn2 = document.querySelector(".btn2");

let sale_text2 = document.querySelector(".sale-text2");
let cat_heading = document.querySelector(".cat-heading");
let detail = document.querySelector(".detail");

sliderBtn1.addEventListener("click", function () {
  if (box1.classList.contains("show-imgs")) {
    box1.classList.remove("show-imgs");
    box2.classList.add("show-imgs");

    animationRemove();
    // animationAdd();
  } else {
    box1.classList.add("show-imgs");
    box2.classList.remove("show-imgs");

    animationAdd();
    // animationRemove();
  }
});

sliderBtn2.addEventListener("click", function () {
  if (box2.classList.contains("show-imgs")) {
    box2.classList.remove("show-imgs");
    box1.classList.add("show-imgs");

    animationRemove();
    animationAdd();
  } else {
    box2.classList.add("show-imgs");
    box1.classList.remove("show-imgs");

    animationAdd();
    animationRemove();
  }
});

function animationAdd() {
  sale_text.classList.add("sale-animation");
  main_heading.classList.add("main-animation");
  animatedBtn.classList.add("btn-animation");
  back_circle.classList.add("back-animation");
  dog_pic.classList.add("dog_pic");

  sale_text2.classList.remove("sale2-animation");
  cat_heading.classList.remove("cat-animation");
  detail.classList.remove("detial-animation");
  animatedBtn2.classList.remove("btn-animation2");
}
function animationRemove() {
  sale_text.classList.remove("sale-animation");
  main_heading.classList.remove("main-animation");
  animatedBtn.classList.remove("btn-animation");
  back_circle.classList.remove("back-animation");
  dog_pic.classList.remove("dog_pic");

  sale_text2.classList.add("sale2-animation");
  cat_heading.classList.add("cat-animation");
  detail.classList.add("detial-animation");
  animatedBtn2.classList.add("btn-animation2");
}

//////////////////////SECTION1/////////////////

let pet_box = document.querySelectorAll(".pet-box");
let circle = document.querySelectorAll(".circle");
let pet_name = document.querySelectorAll(".pet-name");

pet_box.forEach((ele, indx) => {
  ele.addEventListener("mouseenter", function () {
    if (circle[indx].classList.contains("circle-animation")) {
      circle[indx].classList.remove("circle-animation");
      pet_name[indx].classList.remove("clr");
    } else {
      circle[indx].classList.add("circle-animation");
      pet_name[indx].classList.add("clr");
    }
  });

  ele.addEventListener("mouseleave", function () {
    if (circle[indx].classList.contains("circle-animation")) {
      circle[indx].classList.remove("circle-animation");
      pet_name[indx].classList.remove("clr");
    } else {
      circle[indx].classList.add("circle-animation");
      pet_name[indx].classList.add("clr");
    }
  });
});

///////////////////////////FILTER METHOD//////////////

let sec2_list = document.querySelectorAll(".sec2-li");
let sec2_box_parent = document.querySelector(".sec2-box-parent");

let arrayData = [
  { img: "./images/1 (1).jpeg", name: "Joust Duffle Bag", price: "$20.19" },
  { img: "./images/2 (1).jpeg", name: "Endeavor Daytripa", price: "$35.00" },
  { img: "./images/3.jpeg", name: "Impulse Duffle", price: "$65.00" },
  { img: "./images/4.jpeg", name: "Driven Backpack", price: "$25.00" },
  { img: "./images/5.jpeg", name: "Fusion Backpack", price: "$45.00" },
  { img: "./images/6.jpeg", name: "Savvy Shoulder Tote", price: "$0.00" },
  { img: "./images/7.jpeg", name: "Voyage Yoga Bag", price: "$39.00" },
  { img: "./images/8.jpeg", name: "Wayfarer Messenger Bag", price: "$50.00" },
];

console.log(arrayData);
let filteredArray;
sec2_list.forEach((ele, indx) => {
  ele.addEventListener("click", function () {
    sec2_list.forEach((elem) => {
      elem.classList.remove("border");
    });
    ele.classList.add("border");

    if (ele.innerHTML === "ALL") {
      filteredArray = arrayData.filter((ele, indx) => {
        return indx <= 7;
      });
    }
    if (ele.innerHTML === "NEW") {
      filteredArray = arrayData.filter((ele, indx) => {
        return indx <= 3;
      });
    }

    if (ele.innerHTML === "BEST SELLERS") {
      filteredArray = arrayData.filter((ele, indx) => {
        return indx >= 4 && indx <= 7;
      });
    }

    if (ele.innerHTML === "FEATURED") {
      filteredArray = arrayData.filter((ele, indx) => {
        return indx <= 3;
      });
    }

    if (ele.innerHTML === "ON SALE") {
      filteredArray = arrayData.filter((ele, indx) => {
        return indx >= 4 && indx <= 7;
      });
    }

    update(filteredArray);
  });
});
update();
function update(filteredArray) {
  sec2_box_parent.innerHTML = "";
  if (filteredArray) {
    filteredArray.forEach((ele, indx) => {
      sec2_box_parent.innerHTML += `
      <div class="sec2-box">
              <div class="box-img">
                <div class="img-icn">
                  <div class="hrt">
                    <i class="fa-regular fa-heart"></i>
                  </div>
  
                  <div class="sh-bag">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </div>
                  <div class="eye">
                    <i class="fa-regular fa-eye"></i>
                  </div>
                </div>
                <img src = '${ele.img}'>
              </div>
  
              <p class="name">${ele.name}</p>
              <p class="price">${ele.price}</p>
            </div>
  
      
      `;
    });
  } else {
    arrayData.forEach((ele, indx) => {
      sec2_box_parent.innerHTML += `
      <div class="sec2-box">
              <div class="box-img">
                <div class="img-icn">
                  <div class="hrt">
                    <i class="fa-regular fa-heart"></i>
                  </div>
  
                  <div class="sh-bag">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </div>
                  <div class="eye">
                    <i class="fa-regular fa-eye"></i>
                  </div>
                </div>
                <img src = '${ele.img}'>
              </div>
  
              <p class="name">${ele.name}</p>
              <p class="price">${ele.price}</p>
            </div>
  
      
      `;
    });
  }
  ///////////////////////
  let hrt = document.querySelectorAll(".hrt");

  hrt.forEach((ele) => {
    ele.addEventListener("click", function () {
      back_clr.classList.add("back-clr-show");
      frnt_div.classList.add("frnt-div-show");
      let getname =
        ele.parentElement.parentElement.nextElementSibling.innerHTML;
      let getimg = ele.parentElement.nextElementSibling.src;

      // console.log(ele.parentElement.nextElementSibling.src);
      console.log(getimg);

      f1_img.src = getimg;
      f1_name.innerHTML = getname;

      // console.log(ele.parentElement.nextElementSibling);
    });
  });

  ////////////////////////////

  let sh_bag = document.querySelectorAll(".sh-bag");
  let back_clr = document.querySelector(".f1-added-back-color");
  let frnt_div = document.querySelector(".f1-added-div");
  let crs = document.querySelector(".top");
  let f1_name = document.querySelector(".f1-name");
  let f1_img = document.querySelector(".f1-img");

  sh_bag.forEach((ele) => {
    ele.addEventListener("click", function () {
      back_clr.classList.add("back-clr-show");
      frnt_div.classList.add("frnt-div-show");
      let getname =
        ele.parentElement.parentElement.nextElementSibling.innerHTML;
      let getimg = ele.parentElement.nextElementSibling.src;

      // console.log(ele.parentElement.nextElementSibling.src);
      console.log(getimg);

      f1_img.src = getimg;
      f1_name.innerHTML = getname;

      // console.log(ele.parentElement.nextElementSibling);
    });
  });

  crs.addEventListener("click", function () {
    back_clr.classList.remove("back-clr-show");
    frnt_div.classList.remove("frnt-div-show");
  });

  let eyeBtn = document.querySelectorAll(".eye");
  let eyeDiv = document.querySelector(".f2-eye-added-div");
  let cancelBtn = document.querySelector(".cancel-btn");
  let f2_img = document.querySelector(".f2-img");
  let f2_heading = document.querySelector(".f2-heading");
  let f2_price = document.querySelector(".f2-price");

  eyeBtn.forEach((ele) => {
    ele.addEventListener("click", function () {
      back_clr.classList.add("back-clr-show");
      eyeDiv.classList.add("eye-show");

      let getimg2 = ele.parentElement.nextElementSibling.src;
      let getname2 =
        ele.parentElement.parentElement.nextElementSibling.innerHTML;
      let getprice =
        ele.parentElement.parentElement.nextElementSibling.nextElementSibling
          .innerHTML;

      f2_heading.innerHTML = getname2;
      f2_price.innerHTML = getprice;

      f2_img.src = getimg2;
    });

    cancelBtn.addEventListener("click", function () {
      back_clr.classList.remove("back-clr-show");
      eyeDiv.classList.remove("eye-show");
    });
  });
}

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");

let count = document.querySelector(".count");

let counter = 1;

minus.addEventListener("click", function () {
  counter = 0;
  count.innerHTML = counter;
});
plus.addEventListener("click", function () {
  counter++;

  if (counter < 10) {
    count.innerHTML = "0" + counter;
  } else {
    count.innerHTML = counter;
  }
});

///////////////////////////////////////////
