//selectors
const menu = document.querySelector(".menu");
const menuIcon = menu.firstChild;
const nav = document.querySelector("nav");
const overlay = document.querySelectorAll(".overlay");
const outside = document;

// functions
function toggleClass(elem, str) {
  elem.classList.toggle(str);
}
function switchClass(elem, a, b) {
  if ([...elem.classList].includes(a)) {
    elem.classList.remove(a);
    elem.classList.add(b);
  } else {
    elem.classList.remove(b);
    elem.classList.add(a);
  }
}

function closeAll() {
  let currentOverlay = document.querySelector(".show-overlay");
  if ([...nav.classList].includes("shown")) {
    toggleClass(nav, "shown");
    switchClass(menuIcon, "fa-bars", "fa-times");
  }
  if (currentOverlay) {
    let currentIcon = currentOverlay.querySelector("i");
    toggleClass(currentOverlay, "show-overlay");
    switchClass(currentIcon, "fa-plus", "fa-minus");
  }

  outside.removeEventListener("click", closeAll, false);
}

//event listeners

menu.addEventListener(
  "click",
  e => {
    toggleClass(nav, "shown");
    switchClass(menuIcon, "fa-bars", "fa-times");

    outside.addEventListener("click", closeAll, false);
    e.stopPropagation();
  },
  false
);

overlay.forEach(btn => {
  btn.addEventListener(
    "click",
    e => {
      if (e.target.nodeName === "BUTTON" || e.target.nodeName === "I") {
        // alert("yes");
        let currentIcon;
        if (e.target.nodeName === "BUTTON") {
          currentIcon = e.target.querySelector("i");
        } else {
          currentIcon = e.target;
        }

        toggleClass(btn, "show-overlay");
        switchClass(currentIcon, "fa-plus", "fa-minus");
      }
      outside.addEventListener("click", closeAll, false);
      e.stopPropagation();
    },
    false
  );
});
