function showContent(letter) {
  // Hide all content sections
  hideAllContent();

  // Display the selected content section
  document.getElementById(`content-${letter}`).style.display = "block";
}

function hideContent(letter) {
  // Hide the specific content section
  document.getElementById(`content-${letter}`).style.display = "none";
}

function hideAllContent() {
  // Hide all content sections (A, B, C)
  document.getElementById("content-A").style.display = "none";
  document.getElementById("content-B").style.display = "none";
  document.getElementById("content-C").style.display = "none";
}
