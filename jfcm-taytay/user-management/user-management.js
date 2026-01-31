// User Management page specific JavaScript
const menuBtn = document.getElementById("menuBtn");
const menuDropdown = document.getElementById("menuDropdown");
const updateDetailsBtn = document.getElementById("updateDetailsBtn");
const deleteUserBtn = document.getElementById("deleteUserBtn");
const updateModal = document.getElementById("updateModal");
const deleteModal = document.getElementById("deleteModal");
const updateModalClose = document.getElementById("updateModalClose");
const deleteModalClose = document.getElementById("deleteModalClose");
const updateCancelBtn = document.getElementById("updateCancelBtn");
const deleteCancelBtn = document.getElementById("deleteCancelBtn");
const updateForm = document.getElementById("updateForm");
const deleteConfirmBtn = document.getElementById("deleteConfirmBtn");

// Menu button toggle
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

// Update Details Modal Functions
function openUpdateModal() {
  updateModal.classList.add("show");
  // Populate with current user details (in a real app, this would fetch from backend)
  document.getElementById("fullName").value = "James Malinao";
  document.getElementById("username").value = "henreyjamesmalinao";
  document.getElementById("role").value = "User";
  const statusCheckbox = document.getElementById("status");
  const isActive = !document.querySelector(".user-card").classList.contains("inactive");
  statusCheckbox.checked = isActive;
  menuDropdown.style.display = "none";
}

function closeUpdateModal() {
  updateModal.classList.remove("show");
}

// Delete User Modal Functions
function openDeleteModal() {
  deleteModal.classList.add("show");
  menuDropdown.style.display = "none";
}

function closeDeleteModal() {
  deleteModal.classList.remove("show");
}

// Event listeners for Update Modal
updateDetailsBtn.addEventListener("click", openUpdateModal);
updateModalClose.addEventListener("click", closeUpdateModal);
updateCancelBtn.addEventListener("click", closeUpdateModal);

// Status toggle listener
const statusCheckbox = document.getElementById("status");
const statusText = document.getElementById("statusText");

statusCheckbox.addEventListener("change", () => {
  statusText.textContent = statusCheckbox.checked ? "Active" : "Inactive";
});

// Event listener for Update Form Submit
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const username = document.getElementById("username").value;
  const role = document.getElementById("role").value;
  const isActive = document.getElementById("status").checked;
  
  // In a real app, this would send data to backend
  console.log("Updating user:", { fullName, username, role, isActive });
  
  // Update the UI with new values
  document.querySelector(".user-name").textContent = fullName;
  document.querySelector(".user-username").textContent = username;
  const statusText = isActive ? "(Active)" : "(Inactive)";
  document.querySelector(".user-role").textContent = `${role} ${statusText}`;
  
  // Update card color based on status
  const userCard = document.querySelector(".user-card");
  if (isActive) {
    userCard.classList.remove("inactive");
  } else {
    userCard.classList.add("inactive");
  }
  
  closeUpdateModal();
});

// Event listeners for Delete Modal
deleteUserBtn.addEventListener("click", openDeleteModal);
deleteModalClose.addEventListener("click", closeDeleteModal);
deleteCancelBtn.addEventListener("click", closeDeleteModal);

// Event listener for Delete Confirm
deleteConfirmBtn.addEventListener("click", () => {
  // In a real app, this would send delete request to backend
  console.log("User deleted");
  closeDeleteModal();
  // You could remove the user card or show a success message here
  alert("User deleted successfully");
});

// Close modal when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target === updateModal) {
    closeUpdateModal();
  }
  if (e.target === deleteModal) {
    closeDeleteModal();
  }
});

