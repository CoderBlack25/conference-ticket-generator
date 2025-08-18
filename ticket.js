document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ticketName").forEach((el) => {
    el.textContent = localStorage.getItem("fullName");
  });

  document.getElementById("ticketEmail").textContent =
    localStorage.getItem("email");

  document.getElementById("ticketGithub").textContent =
    localStorage.getItem("github");

  const uploadedImage = localStorage.getItem("uploadedImage");

  if (uploadedImage) {
    document.getElementById(
      "ticketImage"
    ).innerHTML = `<img src="${uploadedImage}" alt="avatar" />`;
  }
});
