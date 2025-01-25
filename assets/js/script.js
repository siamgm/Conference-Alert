// change the color of the header when scrolling
    const header = document.querySelector('.header');
    const headerSearchField = document.querySelector('.header-search-field');

    if(header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
          header.classList.add('bg-white', 'md:text-black');
          header.classList.remove('bg-transparent', 'text-white');
          headerSearchField.classList.remove('bg-transparent');
        } else {
          header.classList.add('bg-transparent', 'text-white');
          header.classList.remove('bg-white', 'md:text-black');
          headerSearchField.classList.add('bg-transparent');
        }
      });
    }
    
    



// Toggle menu for small screens

const menu = document.getElementById('menu');
document.getElementById('menu-toggle').addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('text-black');
  menu.classList.toggle('top-[70px]');
});

// Collapse menu when clicking on anything inside the menu
menu.addEventListener('click', (event) => {
  if (event.target !== menu) {
    menu.classList.add('hidden');
    menu.classList.remove('text-black');
    menu.classList.remove('top-[70px]');
  }
});



// tab

  function switchTab(event, tabId) {
    // Remove active state from all tabs
    document.querySelectorAll('.tab-header').forEach(tab => {
      tab.classList.remove(
        'bg-red-500',
        'text-white',
        'md:before:bg-red-500',
        'before:h-3',
        'before:w-3',
        'before:absolute',
        'before:right-[-6px]',
        'before:bottom-[33%]',
        'before:rotate-45'
      );
      tab.classList.add('bg-gray-100', 'text-gray-700');
    });
  
    // Add active state to the clicked tab
    const clickedTab = event.currentTarget;
    clickedTab.classList.add(
      'bg-red-500',
      'text-white',
      'md:before:bg-red-500',
      'before:h-3',
      'before:w-3',
      'before:absolute',
      'before:right-[-6px]',
      'before:bottom-[33%]',
      'before:rotate-45'
    );
    clickedTab.classList.remove('bg-gray-100', 'text-gray-700');
  
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.add('hidden');
    });
  
    // Show the selected tab content
    document.getElementById(tabId).classList.remove('hidden');
  }
