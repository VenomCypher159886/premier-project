// Auto-advancing slider with 5-second intervals
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.slider-nav a');
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    let currentSlide = 0;
    let autoSlideInterval;
    
    // Function to go to a specific slide
    function goToSlide(slideIndex) {
        // Remove active class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to current button
        if (navButtons[slideIndex]) {
            navButtons[slideIndex].classList.add('active');
        }
        
        // Scroll to the selected slide
        const slideWidth = slider.offsetWidth;
        slider.scrollTo({
            left: slideIndex * slideWidth,
            behavior: 'smooth'
        });
        
        currentSlide = slideIndex;
    }
    
    // Function to go to next slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }
    
    // Button click functionality
    navButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            goToSlide(index);
            
            // Reset auto-advance timer
            clearInterval(autoSlideInterval);
            startAutoSlide();
        });
    });
    
    // Start auto-advance
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // 5 seconds
    }
    
    // Pause auto-advance on hover
    slider.addEventListener('mouseenter', function() {
        clearInterval(autoSlideInterval);
    });
    
    // Resume auto-advance when mouse leaves
    slider.addEventListener('mouseleave', function() {
        startAutoSlide();
    });
    
    // Update active button based on scroll position
    slider.addEventListener('scroll', function() {
        const slideWidth = slider.offsetWidth;
        const scrollIndex = Math.round(slider.scrollLeft / slideWidth);
        
        if (scrollIndex !== currentSlide) {
            currentSlide = scrollIndex;
            navButtons.forEach((btn, index) => {
                btn.classList.toggle('active', index === currentSlide);
            });
        }
    });
    
    // Initialize
    goToSlide(0);
    startAutoSlide();
});

// script for pricing page

document.addEventListener('DOMContentLoaded', function() {
    const openPopupBtn = document.getElementById('quote-1');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const myPopup = document.getElementById('myPopup');
  
    openPopupBtn.addEventListener('click', function() {
      myPopup.classList.add('show');
    });
  
    closePopupBtn.addEventListener('click', function() {
      myPopup.classList.remove('show');
    });
  
    // Optional: Close popup when clicking outside the content
    myPopup.addEventListener('click', function(event) {
      if (event.target === myPopup) {
        myPopup.classList.remove('show');
      }
    });
  });
