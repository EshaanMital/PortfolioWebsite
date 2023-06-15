document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.querySelector(".bg-overlay");
  const welcomeSection = document.querySelector(".welcome-section");
  const mainSection = document.querySelector("main");

  setTimeout(function() {
    overlay.style.opacity = "0";
    welcomeSection.style.opacity = "0";
  }, 2000);

  setTimeout(function() {
    overlay.style.display = "none";
    welcomeSection.style.display = "none";
    mainSection.style.opacity = "1";
    mainSection.classList.add("fade-in");
  }, 4000);
});

document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.querySelector(".bg-overlay");
  const welcomeSection = document.querySelector(".welcome-section");
  const mainSection = document.querySelector("main");
  const aboutImage = document.querySelector(".about-image img");

  // Define the original and second image URLs
  const originalImageUrl = "about1.jpeg";
  const secondImageUrl = "about2.jpeg";

  let isFlipped = false; // Flag to track the flipped state

  // Function to toggle between original and second image
  function toggleImage() {
    if (isFlipped) {
      aboutImage.src = originalImageUrl; // Switch to original image
      isFlipped = false;
    } else {
      aboutImage.src = secondImageUrl; // Switch to second image
      isFlipped = true;
      // After 5 seconds, switch back to the original image
      setTimeout(function() {
        aboutImage.src = originalImageUrl;
        isFlipped = false;
      }, 5000);
    }
  }

  // Add event listener to the aboutImage
  aboutImage.addEventListener("click", toggleImage);
});

document.addEventListener("DOMContentLoaded", function() {
  const photos = document.querySelectorAll(".photo");
  let currentPhotoIndex = 0;

  function switchPhoto() {
    photos.forEach(function(photo) {
      photo.style.display = "none";
    })

    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photos[currentPhotoIndex].style.display = "block";
  }

  // Call switchPhoto function every 5 seconds
  setInterval(switchPhoto, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
  const events = document.querySelectorAll(".timeline-event");

  function sortByDate() {
    const sortedEvents = Array.from(events).sort(function(a, b) {
      const dateA = new Date(a.getAttribute("data-date"));
      const dateB = new Date(b.getAttribute("data-date"));
      return dateA - dateB;
    });

    const timelineEvents = document.querySelector(".timeline-events");
    sortedEvents.forEach(function(event) {
      timelineEvents.appendChild(event);
    });
  }

  // Call sortByDate function to sort the events by date
  sortByDate();

  events.forEach(function(event, index) {
    const dot = event.querySelector(".timeline-dot");
    const content = event.querySelector(".timeline-content");

    dot.addEventListener("click", function() {
      events.forEach(function(event) {
        event.classList.remove("active");
      });

      event.classList.add("active");
    });

    event.addEventListener("mouseover", function() {
      if (index % 2 === 0) {
        content.style.transform = "translate(-50%, -100%)";
      } else {
        content.style.transform = "translate(-50%, 0)";
      }
    });

    event.addEventListener("mouseout", function() {
      content.style.transform = "translate(-50%, -100%)";
    });
  });
});
