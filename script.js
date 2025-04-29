// ✅ Buy Now Function
function buyNow(fileName) {
  alert("You selected: " + fileName + "\nRedirecting to Instagram for payment...");
  window.location.href = "https://www.instagram.com/sk_8220_?igsh=MTVlNjlycmJ4NGtyYQ==";

  // Simulate unlock after payment
  setTimeout(() => {
    showDownload(fileName, "files/" + fileName.replace(/ /g, "_").toLowerCase() + ".zip");
  }, 2000);
}

// ✅ Toggle Dark/Light Theme
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
}

// ✅ Load saved theme
window.onload = () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }
};

// ✅ File Preview
function previewFile(fileImage, description) {
  const preview = document.getElementById("filePreview");
  preview.innerHTML = `
    <img src="${fileImage}" style="width:100%; border-radius:10px; margin-top:10px;" />
    <p>${description}</p>
  `;
}

// ✅ Download Button Area
function showDownload(fileName, fileLink) {
  const area = document.getElementById("downloadArea");
  area.innerHTML = `
    <h3>Thanks for purchasing ${fileName}!</h3>
    <a href="${fileLink}" download class="download-btn">Download Now</a>
  `;
}
