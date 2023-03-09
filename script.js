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
      sectionEl.scrollIntoView({ behavior: "smooth",
      block: "start"
     });
    }
    if (href !== "#" && href.startsWith("https:")) {
       window.open(href);
    }

    //close mobile navigation
    if (link.classList.contains("nav-links"))
      headerEl.classList.toggle("nav-open");
  });
});

// Fixing flexbox gap property missing in some Safari versions...
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
