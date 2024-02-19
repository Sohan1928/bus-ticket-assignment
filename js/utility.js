

function getId(id) {
  return document.getElementById(id);
}

function alterInnerText(id, theText) {
  getId(id).innerText = theText;
}

function removeDisabled(id) {
  getId(id).removeAttribute("disabled");
  getId(id).classList.remove("cursor-not-allowed");
}

function addDisabled(id) {
  getId(id).setAttribute("disabled", true);
  getId(id).classList.add("cursor-not-allowed");
}

function checkInput(id, checkInput) {
  if (getId(id).value.toUpperCase() === checkInput.toUpperCase()) return true;
  return false;
}

function createdLI(id, theText, classAdd) {
  const li = document.createElement("li");
  li.innerText = theText;
  if (classAdd === "right") li.className = "text-right";
  else if (classAdd === "center") li.className = "text-center";
  else if (classAdd === "end") li.className = "place-self-end";
  getId(id).append(li);
}