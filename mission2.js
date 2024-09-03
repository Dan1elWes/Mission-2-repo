const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const chosenImage = document.getElementById("chosen-image");
const listItems = document.querySelectorAll(".list-item");
// console.log(listItems);

const galleryImages = [
  { src: "Gallery-Images/dagger.png" },
  { src: "Gallery-Images/shortsword.png" },
  { src: "Gallery-Images/longsword.png" },
  { src: "Gallery-Images/greatsword2.png" },
  { src: "Gallery-Images/rapier.png" },
  { src: "Gallery-Images/frozen-needle.png" },
  { src: "Gallery-Images/uchigatana.png" },
  { src: "Gallery-Images/rivers-of-blood.png" },
  { src: "Gallery-Images/maliketh.png" },
  { src: "Gallery-Images/milos.png" },
];

let galleryIndex = 0;

const activeColor = "#a52a2a";
let currentActiveItem;

function updateImage() {
  chosenImage.src = galleryImages[galleryIndex].src;
}
updateImage();
// console.log(chosenImage.src);
// console.log(galleryImages[3]);

function nextItem() {
  galleryIndex++;
  //   console.log("next item");
  //   console.log(galleryIndex);
  if (galleryIndex === galleryImages.length) {
    galleryIndex = 0;
  }
  updateImage();
  updateActiveImage();
}

function previousItem() {
  galleryIndex--;
  //   console.log("prev item");
  //   console.log(galleryIndex);
  if (galleryIndex < 0) {
    galleryIndex = galleryImages.length - 1;
  }
  updateImage();
  updateActiveImage();
}

function updateActiveImage() {
  if (currentActiveItem) {
    currentActiveItem.style.backgroundColor = "";
  }

  currentActiveItem = listItems[galleryIndex];
  currentActiveItem.style.backgroundColor = activeColor;
  //   console.log(currentActiveItem);
  //   console.log(galleryIndex);
}
updateActiveImage();

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (currentActiveItem) {
      currentActiveItem.style.backgroundColor = "";
    }
    item.style.backgroundColor = activeColor;
    currentActiveItem = item;
    // console.log(currentActiveItem);

    // these 2 lines took me an embarrissing amount of time to get to this solution, and all it was, was adding a new parameter and calling the function again.....
    galleryIndex = index;
    updateImage();
    // console.log(galleryIndex);
  });
});

leftArrow.addEventListener("click", previousItem);

rightArrow.addEventListener("click", nextItem);
