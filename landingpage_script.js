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
  