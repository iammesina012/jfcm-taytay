// Get burger menu and sidebar elements
const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const dashboardMain = document.querySelector('.dashboard-main');

// Toggle sidebar when burger menu is clicked
if (burger) {
  burger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    burger.classList.toggle('active');
    dashboardMain.classList.toggle('sidebar-open');
  });
}

// Close sidebar when a link is clicked
const sidebarLinks = sidebar.querySelectorAll('a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
    burger.classList.remove('active');
    dashboardMain.classList.remove('sidebar-open');
  });
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !burger.contains(event.target)) {
    sidebar.classList.remove('active');
    burger.classList.remove('active');
    dashboardMain.classList.remove('sidebar-open');
  }
});

// Modules dropdown toggle
const modulesToggle = document.getElementById('modulesToggle');
const modulesSubmenu = document.getElementById('modulesSubmenu');

if (modulesToggle) {
  modulesToggle.addEventListener('click', (e) => {
    e.preventDefault();
    modulesToggle.classList.toggle('open');
    modulesSubmenu.classList.toggle('open');
  });
}

// Upload button functionality
const uploadBtn = document.querySelector('.upload-btn');
const fileInput = document.getElementById('fileInput');

if (uploadBtn && fileInput) {
  uploadBtn.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      console.log('File selected:', files[0].name);
    }
  });
}
