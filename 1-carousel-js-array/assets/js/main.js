// ===== VARIABLE DECLARATION ============================================================= //
const DB_IMG = ["./assets/img/01.webp", "./assets/img/02.webp", "./assets/img/03.webp", "./assets/img/04.webp", "./assets/img/05.webp"];
const el_Images = document.querySelector(".ms_images");
const el_Thumbnails = document.querySelector(".ms_thumbnails");
const el_BtnUp = document.querySelector("#up");
const el_BtnDown = document.querySelector("#down");
let imgActive = 0;

// ===== MAIN ============================================================================= //
// Popolate DOM first time
for (let i = 0; i < DB_IMG.length; i++) {
  appendImg_images(DB_IMG[i]);
  appenCell_thumbnails();
}
popolateThumbnails(rotateRight(rotateRight(DB_IMG)));
el_Images.children[imgActive].classList.add("active");
el_Thumbnails.children[2].classList.remove("ms_opacity");

// ===== EVENT ========================================================================= //
el_BtnUp.onclick = function () {
  el_Images.children[imgActive].classList.remove("active");
  imgActive--;
  if (imgActive < 0) {
    imgActive = DB_IMG.length - 1;
  }
  el_Images.children[imgActive].classList.add("active");
  popolateThumbnails(rotateRight(DB_IMG));
};

el_BtnDown.onclick = function () {
  el_Images.children[imgActive].classList.remove("active");
  imgActive++;
  if (imgActive >= DB_IMG.length) {
    imgActive = 0;
  }
  el_Images.children[imgActive].classList.add("active");
  popolateThumbnails(rotateLeft(DB_IMG));
};

// ===== FUNCTION ========================================================================= //
function rotateLeft(array) {
  let first = array.shift();
  array.push(first);
  return array;
}

function rotateRight(array) {
  let last = array.pop();
  array.unshift(last);
  return array;
}

function popolateThumbnails(DB_IMG) {
  for (let i = 0; i < DB_IMG.length; i++) {
    const el_Img = document.createElement("img");
    el_Img.src = DB_IMG[i];
    el_Thumbnails.children[i].innerHTML = "";
    el_Thumbnails.children[i].append(el_Img);
  }
}

function appendImg_images(urlImg) {
  const el_Img = document.createElement("img");
  el_Img.src = urlImg;
  el_Images.append(el_Img);
}

function appenCell_thumbnails() {
  const el_ThumbnailsCell = document.createElement("div");
  el_ThumbnailsCell.classList.add("ms_thumbnails_cell", "ms_opacity");
  el_Thumbnails.append(el_ThumbnailsCell);
}
