window.addEventListener('load', function() {
    const landingImage = document.querySelector('.landing-image');
    landingImage.classList.add('focused');
  });

  document.addEventListener("DOMContentLoaded", function () {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
  
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("first-img")) {
            entry.target.classList.add("animate-first");
          } else if (entry.target.classList.contains("second-img")) {
            entry.target.classList.add("animate-second");
          } else if (entry.target.classList.contains("third-img")) {
            entry.target.classList.add("animate-third");
          }
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    const targets = document.querySelectorAll(".first-img, .second-img, .third-img");
    targets.forEach(target => observer.observe(target));
  });


  document.getElementById("menuBtn").addEventListener("click", function() {
    document.getElementById("sideModal").style.width = "250px";
  });

  document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("sideModal").style.width = "0";
  });

  document.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.getElementById('dropdownButton');
    var dropdownContent = document.getElementById('dropdownContent');

    dropdownButton.addEventListener('click', function() {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.icon')) {
            dropdownContent.style.display = 'none';
        }
    });
});

window.addEventListener('load', function() {
  const landingImage = document.querySelector('.landing-image');
  landingImage.classList.add('focused');
});

// JavaScript to handle the scroll and hover functionality

document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
          // Scrolling down
          header.classList.add('hidden');
      } else {
          // Scrolling up
          header.classList.remove('hidden');
      }

      lastScrollTop = scrollTop;
  });

  // Show header when the cursor is near the top of the screen
  document.addEventListener('mousemove', function(e) {
      if (e.clientY < 50) {
          header.classList.remove('hidden');
      }
  });
});

window.addEventListener('load', function() {
  const landingImage = document.querySelector('.landing-image');
  landingImage.classList.add('focused');
});

// JavaScript to handle the scroll and hover functionality

document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
          // Scrolling down
          header.classList.add('hidden');
      } else {
          // Scrolling up
          header.classList.remove('hidden');
      }

      lastScrollTop = scrollTop;
  });

  // Show header when the cursor is near the top of the screen
  document.addEventListener('mousemove', function(e) {
      if (e.clientY < 50) {
          header.classList.remove('hidden');
      }
  });
});

window.addEventListener('load', function() {
  const landingImage = document.querySelector('.landing-image');
  landingImage.classList.add('focused');
});

// JavaScript to handle the scroll and hover functionality
document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
          // Scrolling down
          header.classList.add('hidden');
      } else {
          // Scrolling up
          header.classList.remove('hidden');
      }

      lastScrollTop = scrollTop;
  });

  // Show header when the cursor is near the top of the screen
  document.addEventListener('mousemove', function(e) {
      if (e.clientY < 50) {
          header.classList.remove('hidden');
      }
  });

  // Scroll to the bottom of the page when .now is clicked
  document.querySelector('.now').addEventListener('click', function() {
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
      });
  });
});