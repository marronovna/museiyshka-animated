//  scroll slow

function myFunction() {
  document.documentElement.style.scrollBehavior = "smooth";
}

function slowScroll(id) {
  let offset = 0;
  $("html, body").animate({
    scrollTop: $(id).offset().top - offset,
  });
  return false;
}


// animation for gallery

function reveal() {
  var reveals = document.querySelectorAll(".thumbnail");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 20;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



// Show more button

function showMore() {
  var example_2 = document.getElementById('example_2');
  example_2.style.display = 'block';
  example_2.style.animation = 'fadeInUp 0.3s ease-in-out';
}


// Less  button

function hideElement() {
  setTimeout(function () {
    example_2.style.display = 'none';
  }, 300);
}



// typewriting

document.addEventListener('DOMContentLoaded', function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('typing-animation');
      }
    });
  });

  document.querySelectorAll('.typewriter').forEach(function (typewriter) {
    observer.observe(typewriter);
  });
});
