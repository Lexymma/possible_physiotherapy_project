// Setting smooth scroll on navigation links
const navigation = document.querySelector(".main-nav");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

// console.log(navigationHeight);
//////////////////////////////////////////////////

//Setting current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////////
// Mobile navigation automation
const mobileNav = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");

mobileNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////////////
//Smooth scrolling of nav links

const allLinks = document.querySelectorAll("a:link");
const navLinks = document.querySelectorAll(".nav-links");
console.log(navLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scrolling to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile navigation
    if (link.classList.contains("nav-links"))
      headerEl.classList.toggle("nav-open");
  });
});
