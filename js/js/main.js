// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 80) {
    document.querySelector('#navbar').style.background = 'rgba(0,0,0,0.9)';
  } else {
    document.querySelector('#navbar').style.background = 'rgba(0,0,0,0)';
  }
});

document.getElementById('tour').addEventListener('click', function () {
  document.getElementById('tours').style.display = 'block';
  document.getElementById('hotels').style.display = 'none';
  document.getElementById('flights').style.display = 'none';
});
document.getElementById('hotel').addEventListener('click', function () {
  document.getElementById('hotels').style.display = 'block';
  document.getElementById('tours').style.display = 'none';
  document.getElementById('flights').style.display = 'none';
});
document.getElementById('flight').addEventListener('click', function () {
  document.getElementById('flights').style.display = 'block';
  document.getElementById('hotels').style.display = 'none';
  document.getElementById('tours').style.display = 'none';
});

// nav humberger icone
// $(function () {
//   menu = $('nav ul');

//   $('#openup').on('click', function (e) {
//     e.preventDefault();
//     menu.slideToggle();
//   });

//   $(window).resize(function () {
//     var w = $(this).width();
//     if (w > 480 && menu.is(':hidden')) {
//       menu.removeAttr('style');
//     }
//   });

//   $('nav li').on('click', function (e) {
//     var w = $(window).width();
//     if (w < 480) {
//       menu.slideToggle();
//     }
//   });
//   $('.open-menu').height($(window).height());
// });

// Smooth Scrolling
// $('.cf a').on('click', function (event) {
//   if (this.hash !== '') {
//     event.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top,
//       },
//       800,
//       function () {
//         window.location.hash = hash;
//       }
//     );
//   }
// });
