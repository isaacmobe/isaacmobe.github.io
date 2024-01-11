"use strict";

// ELEMENT TOGGLE FUNCTION
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// SIDEBAR VARIABLES
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// SIDEBAR TOGGLE FUNCTIONALITY FOR MOBILE
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

("use strict");

// Check if local storage has a saved active page
const savedPage = localStorage.getItem("activePage");
const defaultPage = savedPage || "about"; // Change "home" to the default page you want

// Function to set the active page
const setActivePage = function (page) {
  localStorage.setItem("activePage", page);
};

// Function to handle page navigation
const navigateToPage = function (page) {
  for (let i = 0; i < pages.length; i++) {
    if (page === pages[i].dataset.page) {
      pages[i].classList.add("active");
      navigationLinks[i].classList.add("active");
      window.scrollTo(0, 0);
      setActivePage(page); // Save the active page to local storage
    } else {
      pages[i].classList.remove("active");
      navigationLinks[i].classList.remove("active");
    }
  }
};

// Set the default active page on initial load
navigateToPage(defaultPage);

// Add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const selectedPage = this.innerHTML.toLowerCase();
    navigateToPage(selectedPage);
  });
}

// TILT EFFECT FOR HOME LOGO
function tiltEffect(event) {
  const box = document.querySelector(".avatar-box");
  const boundingBox = box.getBoundingClientRect();
  const x = (event.clientX - boundingBox.left) / boundingBox.width - 0.5;
  const y = 0.5 - (event.clientY - boundingBox.top) / boundingBox.height;

  box.style.transform = `rotateX(${y * 50}deg) rotateY(${x * 50}deg)`;
}

document
  .querySelector(".avatar-box")
  .addEventListener("mouseleave", function () {
    this.style.transform = "rotateX(0deg) rotateY(0deg)";
  });

// FILTER FOR PROJECTS

document.addEventListener("DOMContentLoaded", function () {
  // Get all necessary elements
  const filterButtons = document.querySelectorAll(".filter-item button");
  const projectItems = document.querySelectorAll(".project-item");
  const selectButtons = document.querySelectorAll(".select-item button");

  // Function to handle filter based on category
  function filterProjects(category) {
    projectItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      const isVisible = category === "All" || category === itemCategory;

      if (isVisible) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Function to handle button click event
  function handleButtonClick(button) {
    // Remove 'active' class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    selectButtons.forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    button.classList.add("active");

    // Get the selected category
    const category = button.textContent.trim();

    // Filter the projects based on the selected category
    filterProjects(category);
  }

  // Event listener for filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      handleButtonClick(this);
    });
  });

  // Event listener for select buttons
  selectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      handleButtonClick(this);
    });
  });
});

