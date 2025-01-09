//  Change header styles on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('bg-white', 'text-black');
    header.classList.remove('bg-transparent', 'text-white');
  } else {
    header.classList.add('bg-transparent', 'text-white');
    header.classList.remove('bg-white', 'text-black');
  }
});

// Toggle menu for small screens
//  document.getElementById('menu-toggle').addEventListener('click', () => {
//     menu.classList.toggle('hidden');
//   });


//   home slider