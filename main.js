onload = () => {
  document.body.classList.remove("container");
  console.log("Container class removed, animations should start");
};

// Modal functionality for images
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalText = document.getElementById("imageText");
const closeBtn = document.getElementsByClassName("close")[0];

// Get all gallery images
const galleryImages = document.querySelectorAll(".gallery-image");

// Add click event to each image
galleryImages.forEach(img => {
  img.onclick = function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
    modalText.textContent = this.getAttribute("data-text");
  }
});

// Close modal when clicking the close button
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close modal when clicking outside the image
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
