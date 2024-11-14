function showFeature(letter) {
  document.getElementById(`result-${letter}`).classList.remove("hidden");
}

function hideFeature(letter) {
  document.getElementById(`result-${letter}`).classList.add("hidden");
}
