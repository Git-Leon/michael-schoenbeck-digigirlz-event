document.querySelector
function changeColor(cell) {
  var box = document.getElementById(cell);
  var style = getComputedStyle(box);
  var backgroundColor = style.backgroundColor;
  console.log(backgroundColor);

  switch (backgroundColor) {
    case "rgb(0, 0, 255)":
      box.style.backgroundColor = "purple";
      break;
    case "rgb(128, 0, 128)":
      box.style.backgroundColor = "green";
      break;
    default:
      box.style.backgroundColor = "blue";
  }
}
