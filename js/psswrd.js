function ConfirmPass() {
  let ekiska = document.getElementById("ekis1");
  let circle = document.getElementById("circle1");
  let pass1 = document.getElementById("turn1").value;
  let pass2 = document.getElementById("turn2").value;

  if (pass1 == null || pass1 == "" || pass2 == null || pass2 == "") {
    circle.style.visibility = "hidden";
    ekiska.style.display = "flex";
    ekiska.style.visibility = "visible";
    ekiska.style.position = "relative";
    ekiska.style.left = "-10px";
  } else if (pass2 === pass1 || pass1 === pass2) {
    circle.style.visibility = "visible";
    ekiska.style.visibility = "hidden";
  } else if (pass1 !== pass2 || pass2 !== pass1) {
    circle.style.visibility = "hidden";
    ekiska.style.display = "flex";
    ekiska.style.visibility = "visible";
    ekiska.style.position = "relative";
    ekiska.style.left = "-10px";
  }
}
