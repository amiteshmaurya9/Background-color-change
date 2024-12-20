//

function bgchange(color) {
  document.body.style.backgroundColor = color;
  let text = document.getElementsByClassName("bgtext");
  if (color == "#000000") {
    for (let elmt of text) {
      elmt.style.color = "white";
    }
  } else {
    for (let elmt of text) {
      elmt.style.color = "black";
    }
  }
  if (color == "#0040ff") {
    for (let elmt of text) {
      elmt.style.color = "white";
    }
  }
}
