const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function (){
  links.classList.toggle('show-links');
});


const menu = [
  {
    id: 1,
    img: '../css/img/Content.png',
    title: "pic-1",
    category: "web-design",
  },
  {
    id: 2,
    img: '../css/img/Content.png',
    title: "pic-2",
    category: "photography",
  },
  {
    id: 3,
    img: '../css/img/Content.png',
    title: "pic-3",
    category: "web-design",
  }

];

// $(window).on('load', function (){
//   $('.loader').fadeOut(1000);
//   $('.content').fadeIn(1000);
  
// });


$(document).ready(function (){

  $('.carousel').owlCarousel({
    margin: 0,
    loop: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      700: {
        items: 2,
        nav: false,
      },
      900:{
          items: 3,
        nav: false,
      },
      1200: {
        items: 4,
        nav: false,
      },
    },
  });
  
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });

});
const sectionCenter = document.querySelector('.section-center');
  const btnContainer = document.querySelector('.btn-container');
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  });

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
});

  function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<div class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo">
        </div>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;

};






