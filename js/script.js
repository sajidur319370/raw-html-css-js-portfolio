// A button is active when clicking it and others are inactive
const resumeButtons = document.querySelectorAll(".resume-button");
resumeButtons.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    resumeButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
