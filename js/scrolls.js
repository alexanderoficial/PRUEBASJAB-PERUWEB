
document.addEventListener("DOMContentLoaded", function() {
    var portfolioItems = document.querySelectorAll('.portfolio-item');
  
    function checkVisibility(elements) {
      elements.forEach(function (element) {
        var elementPosition = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
  
        if (elementPosition < windowHeight * 0.75) {
          element.classList.add("appear");
        }
      });
    }
  
    window.addEventListener("scroll", function() {
      checkVisibility(portfolioItems);
    });
  
    // Llamamos a checkVisibility una vez al cargar la página para manejar elementos ya visibles
    checkVisibility(portfolioItems);
  });
  
// script.js de scls 2 

document.addEventListener("DOMContentLoaded", function() {
    var featureBoxes = document.querySelectorAll('.features .feature-box');
  
    window.addEventListener("scroll", function() {
      featureBoxes.forEach(function(box) {
        var boxPosition = box.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
  
        if (boxPosition < windowHeight * 0.75) {
          box.classList.add("appear");
        } else {
          box.classList.remove("appear");
        }
      });
    });
  });
  