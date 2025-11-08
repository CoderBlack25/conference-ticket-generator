const imageInput = document.getElementById("imageInput");
const uploadIcon = document.getElementById("uploadIcon");
const imageUploaded = document.querySelector(".imageUploaded");
const dropZone = document.getElementById("dropZone");
const imageError = document.getElementById("image-error");

let imageValid = false;

const setError = (idOrElement, message) => {
  const target =
    typeof idOrElement === "string"
      ? document.getElementById(idOrElement)
      : idOrElement;

  target.innerHTML = `
    <img src="/assets/images/icon-info.svg" alt="info-icon"
         style="width:12px; height:12px; margin-right:6px; vertical-align:middle;
                filter: invert(44%) sepia(65%) saturate(2939%) hue-rotate(340deg) brightness(99%) contrast(101%);">
    ${message}
  `;
};

const clearErrors = () => {
  ["fname-error", "email-error", "username-error"].forEach(
    (id) => (document.getElementById(id).innerHTML = "")
  );
  imageError.innerHTML = "";
};

const handleImageChange = (files) => {
  const file = (files || imageInput.files)[0];
  clearImageError();
  imageValid = false;

  if (!file) return setError(imageError, "No file selected.");
  if (!file.type.startsWith("image/"))
    return setError(imageError, "Only image files are allowed.");
  if (file.size > 512000)
    return setError(imageError, "Image size must be 500KB or less.");

  const reader = new FileReader();
  reader.onload = (e) => {
    imageUploaded.innerHTML = `
      <img src="${e.target.result}" 
           alt="Uploaded Image" 
           style="width: 100px; height: 100px; object-fit: contain;">
    `;
    imageValid = true;
  };
  reader.readAsDataURL(file);
};

const clearImageError = () => (imageError.innerHTML = "");

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragover");
  handleImageChange(e.dataTransfer.files);
});

uploadIcon.addEventListener("click", () => imageInput.click());
imageInput.addEventListener("change", () => handleImageChange());

function validateForm() {
  let valid = true;
  clearErrors();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const githubUsername = document.getElementById("githubUsername").value.trim();

  const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const githubPattern = /^@[a-zA-Z0-9-]{1,39}$/;

  if (!namePattern.test(fullName)) {
    setError(
      "fname-error",
      "Name must contain only letters and single spaces between words."
    );
    valid = false;
  }

  if (!emailPattern.test(email)) {
    setError("email-error", "Please enter a valid email address.");
    valid = false;
  }

  if (!githubPattern.test(githubUsername)) {
    setError("username-error", "Please enter a valid GitHub address.");
    valid = false;
  }

  if (!imageValid) {
    setError(
      imageError,
      "Please upload a valid image before submitting the form."
    );
    valid = false;
  }

  return valid;
}

document.getElementById("ticketForm").addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    localStorage.setItem(
      "fullName",
      document.getElementById("fullName").value.trim()
    );
    localStorage.setItem(
      "email",
      document.getElementById("email").value.trim()
    );
    localStorage.setItem(
      "github",
      document.getElementById("githubUsername").value.trim()
    );

    const imgTag = imageUploaded.querySelector("img");
    if (imgTag) {
      localStorage.setItem("uploadedImage", imgTag.src);
    }

    window.location.href = "ticket.html";
  }
});
