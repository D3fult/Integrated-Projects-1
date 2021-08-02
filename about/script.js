const menuIcon = document.querySelector("#menuIcon");
const navSm = document.querySelector("#navSm");

menuIcon.addEventListener("click", () => {
  if (navSm.classList.contains("hidden")) {
    navSm.classList.remove("hidden");
    navSm.classList.add("md:hidden");
  } else {
    navSm.classList.add("hidden");
    navSm.classList.remove("md:hidden");
  }
});

