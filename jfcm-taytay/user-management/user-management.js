// User Management page specific JavaScript
const menuBtn = document.getElementById("menuBtn");
const menuDropdown = document.getElementById("menuDropdown");

if (menuBtn) {
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menuDropdown.style.display =
      menuDropdown.style.display === "none" ? "block" : "none";
  });

  document.addEventListener("click", (e) => {
    if (
      !e.target.closest('[id="menuBtn"]') &&
      !e.target.closest('[id="menuDropdown"]')
    ) {
      menuDropdown.style.display = "none";
    }
  });
}
