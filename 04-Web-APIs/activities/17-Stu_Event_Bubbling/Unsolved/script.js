var images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
    "https://picsum.photos/300/203"
  ];

// start index at 0! this is our starting point
var index = 0;

// this is the current image
var currentImage;



var prevEl = document.getElementById("prev");
var nextEl = document.getElementById("next");
// var imgEL = ;
var carouselEl = document.getElementById(".carouselBox");


function imgScroll() {
  if (
  // if the nextEl is clicked
    ) {
        // move to the next index in the images array
    }
    else if () {

    }
}


// remember to add stopPropagation to button clicks


prevEl.addEventListener("click", function () {

    //   move one image back in the array

  for (var i = 0; i < images.length; i--)
    if (imgIndex !== 0) {
    //   move to the prev image in the array
    } else {
    //   move to the last image of the array
    }
});

nextEl.addEventListener("click", function () {
//   move one image forward in the array
  for (var i = 0; i < images.length; i++)
    if (imgIndex !== 3) {
//   move to the next image in the array
    } else {
//   move to the first image of the array
    }

});



