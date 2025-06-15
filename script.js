
const typed = new Typed(".typing", {
  strings: ["web designer", "FullStack Developer", "Software Engineer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalnavlist = navlist.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalnavlist; i++) {
  const a = navlist[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalnavlist; j++) {
      if (navlist[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navlist[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showsection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showsection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  const target = element.getAttribute("href").split("#")[1];
  for (let i = 0; i < totalnavlist; i++) {
    navlist[i].querySelector("a").classList.remove("active");
    if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navlist[i].querySelector("a").classList.add("active");
    }
  }
}

// ✅ FIXED: Hire Me button scrolls to #contact and updates nav
document.querySelector(".hire-me").addEventListener("click", function (e) {
  e.preventDefault();
  showsection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
