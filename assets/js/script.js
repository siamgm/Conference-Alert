//  Change header styles on scroll
const header = document.querySelector('.header');
const headerSearchField = document.querySelector('.search-field');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('bg-white', 'text-black');
    header.classList.remove('bg-transparent', 'text-white');
    headerSearchField.classList.remove('bg-transparent');
  } else {
    header.classList.add('bg-transparent', 'text-white');
    header.classList.remove('bg-white', 'text-black');
    headerSearchField.classList.add('bg-transparent');
  }
});


// Toggle menu for small screens

const menu = document.getElementById('menu');
 document.getElementById('menu-toggle').addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });


//   tabs

// Get all tab buttons and tab contents
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listener to each tab button
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    // Remove active state from all buttons
    tabButtons.forEach(btn => {
      btn.classList.remove('border-blue-500', 'text-blue-500');
    });

    // Hide all tab contents
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });

    // Activate the clicked button and show the associated tab content
    button.classList.add('border-blue-500', 'text-blue-500');
    document.getElementById(targetTab).classList.remove('hidden');
  });
});

// Set the first tab as active by default
if (tabButtons.length > 0) {
  tabButtons[0].click();
}



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
