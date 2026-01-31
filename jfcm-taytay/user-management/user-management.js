// User Management page specific JavaScript
const addUserBtn = document.querySelector(".add-user-btn");
const updateModal = document.getElementById("updateModal");
const deleteModal = document.getElementById("deleteModal");
const addUserModal = document.getElementById("addUserModal");
const updateModalClose = document.getElementById("updateModalClose");
const deleteModalClose = document.getElementById("deleteModalClose");
const addUserModalClose = document.getElementById("addUserModalClose");
const updateCancelBtn = document.getElementById("updateCancelBtn");
const deleteCancelBtn = document.getElementById("deleteCancelBtn");
const addUserCancelBtn = document.getElementById("addUserCancelBtn");
const updateForm = document.getElementById("updateForm");
const addUserForm = document.getElementById("addUserForm");
const deleteConfirmBtn = document.getElementById("deleteConfirmBtn");
const cardsGrid = document.querySelector(".cards-grid");

// Menu button toggle using event delegation
document.addEventListener("click", (e) => {
  const menuBtn = e.target.closest(".menu-btn");
  if (menuBtn) {
    const dropdown = menuBtn.nextElementSibling;
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    e.stopPropagation();
  }
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".menu-btn") && !e.target.closest(".menu-dropdown")) {
    document.querySelectorAll(".menu-dropdown").forEach(menu => {
      menu.style.display = "none";
    });
  }
});

// Update Details button using event delegation
document.addEventListener("click", (e) => {
  if (e.target.closest(".update-details-btn")) {
    e.stopPropagation();
    const card = e.target.closest(".user-card");
    if (card) {
      openUpdateModal(card);
    }
  }
});

// Delete/Archive button using event delegation
document.addEventListener("click", (e) => {
  if (e.target.closest(".delete-user-btn")) {
    e.stopPropagation();
    const card = e.target.closest(".user-card");
    const dropdown = e.target.closest(".menu-dropdown");
    if (dropdown) {
      dropdown.style.display = "none";
    }
    if (card) {
      deleteModal.currentCard = card;
      openDeleteModal();
    }
  }
});

// Update Details Modal Functions
function openUpdateModal(card) {
  updateModal.classList.add("show");
  // Get user details from the card
  const fullName = card.querySelector(".user-name").textContent;
  const username = card.querySelector(".user-username").textContent;
  const roleText = card.querySelector(".user-role").textContent;
  const role = roleText.split(" ")[0]; // Extract role (Admin/User) from "User (Active)"
  const isActive = !card.classList.contains("inactive");
  
  // Populate with current user details
  document.getElementById("fullName").value = fullName;
  document.getElementById("username").value = username;
  document.getElementById("role").value = role;
  document.getElementById("status").checked = isActive;
  document.getElementById("statusText").textContent = isActive ? "Active" : "Inactive";
  
  // Store reference to current card for updates
  updateModal.currentCard = card;
}

function closeUpdateModal() {
  updateModal.classList.remove("show");
}

// Delete User Modal Functions
function openDeleteModal() {
  deleteModal.classList.add("show");
}

function closeDeleteModal() {
  deleteModal.classList.remove("show");
}

// Add User Modal Functions
function openAddUserModal() {
  addUserModal.classList.add("show");
  document.getElementById("addFullName").value = "";
  document.getElementById("addUsername").value = "";
  document.getElementById("addRole").value = "";
  document.getElementById("addStatus").checked = true;
  document.getElementById("addStatusText").textContent = "Active";
}

function closeAddUserModal() {
  addUserModal.classList.remove("show");
}

// Event listeners for Update Modal
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
  
  // Update the UI with new values on the current card
  const card = updateModal.currentCard;
  if (card) {
    card.querySelector(".user-name").textContent = fullName;
    card.querySelector(".user-username").textContent = username;
    const statusText = isActive ? "(Active)" : "(Inactive)";
    card.querySelector(".user-role").textContent = `${role} ${statusText}`;
    
    // Update card color based on status
    if (isActive) {
      card.classList.remove("inactive");
    } else {
      card.classList.add("inactive");
    }
  }
  
  closeUpdateModal();
});

// Event listeners for Delete Modal
deleteModalClose.addEventListener("click", closeDeleteModal);
deleteCancelBtn.addEventListener("click", closeDeleteModal);

// Event listeners for Add User Modal
addUserBtn.addEventListener("click", openAddUserModal);
addUserModalClose.addEventListener("click", closeAddUserModal);
addUserCancelBtn.addEventListener("click", closeAddUserModal);

// Event listener for Add User Form Submit
addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.getElementById("addFullName").value;
  const username = document.getElementById("addUsername").value;
  const role = document.getElementById("addRole").value;
  const isActive = document.getElementById("addStatus").checked;
  
  // In a real app, this would send data to backend
  console.log("Adding new user:", { fullName, username, role, isActive });
  
  // Create new user card
  const cardsGrid = document.querySelector(".cards-grid");
  const statusDisplay = isActive ? "(Active)" : "(Inactive)";
  const cardClass = isActive ? "" : "inactive";
  
  const newCard = document.createElement("div");
  newCard.className = `user-card card ${cardClass}`;
  newCard.innerHTML = `
    <div>
      <button class="menu-btn">⋮</button>
      <div class="menu-dropdown" style="display: none;">
        <button class="menu-item update-details-btn">Update Details</button>
        <button class="menu-item archive-item delete-user-btn">Archive</button>
      </div>
    </div>
    <div
      class="user-avatar"
      style="
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        color: #fff;
        flex-shrink: 0;
      "
    >
      <i class="fas fa-user"></i>
    </div>
    <div class="user-info-container">
      <h3 class="user-name">${fullName}</h3>
      <p class="user-username">${username}</p>
      <p class="user-role">${role} <span class="user-status">${statusDisplay}</span></p>
    </div>
  `;
  
  cardsGrid.appendChild(newCard);
  
  closeAddUserModal();
});

// Event listener for Delete Confirm
deleteConfirmBtn.addEventListener("click", () => {
  // In a real app, this would send delete request to backend
  console.log("User archived");
  
  // Remove the card from the grid
  const card = deleteModal.currentCard;
  if (card) {
    card.remove();
  }
  
  closeDeleteModal();
  alert("User archived successfully");
});

// Status toggle listeners
const addStatusCheckbox = document.getElementById("addStatus");
const addStatusText = document.getElementById("addStatusText");

addStatusCheckbox.addEventListener("change", () => {
  addStatusText.textContent = addStatusCheckbox.checked ? "Active" : "Inactive";
});

// Close modal when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target === updateModal) {
    closeUpdateModal();
  }
  if (e.target === deleteModal) {
    closeDeleteModal();
  }
  if (e.target === addUserModal) {
    closeAddUserModal();
  }
});

