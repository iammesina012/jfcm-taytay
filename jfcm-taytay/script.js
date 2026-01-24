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

const slides = [
    {
      image: "images/slide1.jpg",
      text: "We win people to the Lord Jesus Christ through the ministry of evangelism and church planting."
    },
    {
      image: "images/slide2.jpg",
      text: "We train people to do the work of the ministry through discipleship, ministry and mission training."
    },
    {
      image: "images/slide3.jpg",
      text: "We send people to do ministry and mission according to their God-given abilities."
    }
  ];

  let currentSlide = 0;

  function showSlide(index) {
    document.getElementById("slide-image").src = slides[index].image;
    document.getElementById("slide-text").textContent = slides[index].text;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }