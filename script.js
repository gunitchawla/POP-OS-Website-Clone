// Create animated stars
function createStars() {
  const starsContainer = document.querySelector(".stars")
  const numStars = 100

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div")
    star.className = "star"
    star.style.left = Math.random() * 100 + "%"
    star.style.top = Math.random() * 100 + "%"
    star.style.animationDelay = Math.random() * 2 + "s"
    starsContainer.appendChild(star)
  }
}

// Video play functionality
function playVideo() {
  alert("Video would play here! This is a demo of the Pop!_OS website clone.")
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Header transparency on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.95)"
  } else {
    header.style.background = "rgba(0, 0, 0, 0.9)"
  }
})

// Initialize stars when page loads
document.addEventListener("DOMContentLoaded", createStars)

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe feature cards for animation
document.addEventListener("DOMContentLoaded", () => {
  const featureCards = document.querySelectorAll(".feature-card")
  featureCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
})
