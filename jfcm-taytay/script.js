const dropdowns = document.querySelectorAll('.has-dropdown');

dropdowns.forEach(currentDropdown => {
  const toggle = currentDropdown.querySelector('.dropdown-toggle');
  const menu = currentDropdown.querySelector('.dropdown-menu');

  toggle.addEventListener('click', () => {
    dropdowns.forEach(dropdown => {
      if (dropdown !== currentDropdown) {
        dropdown.querySelector('.dropdown-menu').style.display = 'none';
      }
    });

    menu.style.display =
      menu.style.display === 'block' ? 'none' : 'block';
  });
});
