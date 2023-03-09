let wHeight = $(window).height();
let wWidth = $(window).width();

let player = {}; // this is all things "this" player

let canvas = document.querySelector("#the-canvas");
let context = canvas.getContext("2d"); // context tells us how we are going to draw on the canvas

canvas.width = wWidth;
canvas.height = wHeight;

$(window).load(() => {
  $("#loginModal").modal("show");
});

$(".name-form").submit((event) => {
  event.preventDefault();
  // console.log("Submitted!")
  player.name = document.querySelector("#name-input").value;
  $("#loginModal").modal("hide");
  $("#spawnModal").modal("show");
  document.querySelector(".player-name").innerHTML = player.name;
});
