$(function () {
  $(".navbar-container").load("./Component/Header.html");
  $("footer").load("./Component/Footer.html");
  $(".about-me").load("./Component/About.html");
  $(".slider").load("./Component/Slideshow.html");
  $(".other-service").load("./Component/OtherService.html");
  $(".customer").load("./Component/Customer.html");
  $(".info").load("./Component/Info.html");
});

// const navbarContainer = document.querySelector('.navbar-container');
// const footer = document.querySelector('footer');
// const aboutMe = document.querySelector('.about-me');
// const slider = document.querySelector('.slider');
// const otherService = document.querySelector('.other-service');
// const customer = document.querySelector('.customer');
// const info = document.querySelector('.info');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('animate');
//       observer.unobserve(entry.target);
//     }
//   });
// });

// observer.observe(navbarContainer);
// observer.observe(footer);
// observer.observe(aboutMe);
// observer.observe(slider);
// observer.observe(otherService);
// observer.observe(customer);
// observer.observe(info);