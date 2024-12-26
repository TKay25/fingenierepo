/**
* Template Name: FlexStart
* Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
* Updated: Nov 01 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }
  
  const text = "Financial Technology for Everyone ...";
  let index = 0;
  let isDeleting = false; // Track whether we are typing or deleting
  const typingSpeed = 100; // Typing speed
  const deletingSpeed = 50; // Deleting speed
  const pauseDuration = 4000; // Pause duration after typing completes
  
  function typeEffect() {
      const element = document.getElementById("typing-effect");
  
      if (!isDeleting) {
          // Typing phase
          element.textContent = text.slice(0, index);
          index++;
  
          if (index === 1) {
              // Apply fade-in effect at the start of typing
              element.classList.add("fade-in");
          }
  
          if (index > text.length) {
              // Pause briefly before starting deletion
              setTimeout(() => {
                  isDeleting = true;
                  typeEffect();
              }, pauseDuration);
              return;
          }
      } else {
          // Deleting phase
          element.textContent = text.slice(0, index);
          index--;
  
          if (index < 0) {
              // Reset for next typing cycle
              isDeleting = false;
              element.classList.remove("fade-in"); // Remove fade-in to reapply
          }
      }
  
      // Adjust speed based on phase
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(typeEffect, speed);
  }
  
  // Start the typing effect
  typeEffect();
  
  // Second Typing Effect
  const text2 = "What We Do ...";
  let index2 = 0;
  let isDeleting2 = false; // Track whether we are typing or deleting
  const typingSpeed2 = 150; // Typing speed
  const deletingSpeed2 = 50; // Deleting speed
  const pauseDuration2 = 4000; // Pause duration after typing completes
  
  function typeEffect2() {
      const element2 = document.getElementById("typing-effect2");
  
      if (!isDeleting2) {
          // Typing phase
          element2.textContent = text2.slice(0, index2);
          index2++;
  
          if (index2 === 1) {
              // Apply fade-in effect at the start of typing
              element2.classList.add("fade-in");
          }
  
          if (index2 > text2.length) {
              // Pause briefly before starting deletion
              setTimeout(() => {
                  isDeleting2 = true;
                  typeEffect2(); // Correctly call typeEffect2 here
              }, pauseDuration2);
              return;
          }
      } else {
          // Deleting phase
          element2.textContent = text2.slice(0, index2);
          index2--;
  
          if (index2 < 0) {
              // Reset for next typing cycle
              isDeleting2 = false;
              element2.classList.remove("fade-in"); // Remove fade-in to reapply
          }
      }
  
      // Adjust speed based on phase
      const speed2 = isDeleting2 ? deletingSpeed2 : typingSpeed2;
      setTimeout(typeEffect2, speed2);
  }
  
  // Start the second typing effect
  typeEffect2();
  
 // Second Typing Effect
 const text3 = "Check Out Our Services ...";
 let index3 = 0;
 let isDeleting3 = false; // Track whether we are typing or deleting
 const typingSpeed3 = 100; // Typing speed
 const deletingSpeed3 = 50; // Deleting speed
 const pauseDuration3 = 4000; // Pause duration after typing completes
 
 function typeEffect3() {
     const element3 = document.getElementById("typing-effect3");
 
     if (!isDeleting3) {
         // Typing phase
         element3.textContent = text3.slice(0, index3);
         index3++;
 
         if (index3 === 1) {
             // Apply fade-in effect at the start of typing
             element3.classList.add("fade-in");
         }
 
         if (index3 > text3.length) {
             // Pause briefly before starting deletion
             setTimeout(() => {
                 isDeleting3 = true;
                 typeEffect3(); // Correctly call typeEffect2 here
             }, pauseDuration3);
             return;
         }
     } else {
         // Deleting phase
         element3.textContent = text3.slice(0, index3);
         index3--;
 
         if (index3 < 0) {
             // Reset for next typing cycle
             isDeleting3 = false;
             element3.classList.remove("fade-in"); // Remove fade-in to reapply
         }
     }
 
     // Adjust speed based on phase
     const speed3 = isDeleting3 ? deletingSpeed3 : typingSpeed3;
     setTimeout(typeEffect3, speed3);
 }
 
 // Start the second typing effect
 typeEffect3();  

// Second Typing Effect
const text4 = "Neighborhood Eye App Features ...";
let index4 = 0;
let isDeleting4 = false; // Track whether we are typing or deleting
const typingSpeed4 = 100; // Typing speed
const deletingSpeed4 = 50; // Deleting speed
const pauseDuration4 = 4000; // Pause duration after typing completes

function typeEffect4() {
    const element4 = document.getElementById("typing-effect4");

    if (!isDeleting4) {
        // Typing phase
        element4.textContent = text4.slice(0, index4);
        index4++;

        if (index4 === 1) {
            // Apply fade-in effect at the start of typing
            element4.classList.add("fade-in");
        }

        if (index4 > text4.length) {
            // Pause briefly before starting deletion
            setTimeout(() => {
                isDeleting4 = true;
                typeEffect4(); // Correctly call typeEffect2 here
            }, pauseDuration4);
            return;
        }
    } else {
        // Deleting phase
        element4.textContent = text4.slice(0, index4);
        index4--;

        if (index4 < 0) {
            // Reset for next typing cycle
            isDeleting4 = false;
            element4.classList.remove("fade-in"); // Remove fade-in to reapply
        }
    }

    // Adjust speed based on phase
    const speed4 = isDeleting4 ? deletingSpeed4 : typingSpeed4;
    setTimeout(typeEffect4, speed4);
}

// Start the second typing effect
typeEffect4();  



  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

// Array of image URLs
const images = [
  "assets/img/6876640.jpg",
  "assets/img/5252445.jpg",
  "assets/img/5174562.jpg",
  "assets/img/5746312.jpg",
];

let currentIndex = 0; // Track the current image
let isFirstRun = true; // Flag for the first image

function showNextImage() {
  const imgElement = document.getElementById("hero-image");

  if (isFirstRun) {
    // On first run, just show the first image without delay
    imgElement.src = images[currentIndex];
    imgElement.classList.add("show");
    isFirstRun = false; // Disable first-run flag
  } else {
    // Fade-out current image
    imgElement.classList.remove("show");

    setTimeout(() => {
      // Update the image source
      currentIndex = (currentIndex + 1) % images.length;
      imgElement.src = images[currentIndex];

      // Start fade-in
      imgElement.classList.add("show");
    }, 500); // Allow fade-out to complete before updating
  }
}

// Start immediately
showNextImage();

// Call the function every 4 seconds
setInterval(showNextImage, 4000);


// Add the `show` class to the first image initially
document.getElementById("hero-image").classList.add("show");

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();