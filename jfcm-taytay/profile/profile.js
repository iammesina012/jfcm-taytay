// Profile picture upload functionality
const profileUploadBtn = document.getElementById("profileUploadBtn");
const profileFileInput = document.getElementById("profileFileInput");
const profilePicture = document.getElementById("profilePicture");

if (profileUploadBtn) {
  profileUploadBtn.addEventListener("click", () => {
    profileFileInput.click();
  });

  profileFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        profilePicture.innerHTML = `<img src="${event.target.result}" alt="Profile Picture" />`;
      };
      reader.readAsDataURL(file);
    }
  });
}
