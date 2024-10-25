document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
  });
  
  
  document.querySelector('.more-btn').addEventListener('click', function () {
    // Select all elements with the class 'hidden-speaker'
    const hiddenSpeakers = document.querySelectorAll('.hidden-speaker');
    
    hiddenSpeakers.forEach(speaker => {
      speaker.classList.toggle('hidden-speaker'); // Toggle the 'hidden-speaker' class
    });
    
    // Optionally, hide the "MORE" button after clicking
    this.style.display = 'none';
  });