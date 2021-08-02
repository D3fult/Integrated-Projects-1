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

// overlays for skills
//Start
const learnMore = document.getElementById("l1");
const overlay = document.getElementById("overlay");
const title = document.getElementById("skillTitle");

learnMore.addEventListener("click", skillInfo);

function skillInfo() {
  overlay.classList.remove("hidden");
  title.classList.add("hidden");
  setTimeout(() => {
    overlay.classList.add("hidden");
    title.classList.remove("hidden");
  }, 6000);
}
const learnMore_2 = document.getElementById("l2");
const overlay_2 = document.getElementById("overlay2");
const title_2 = document.getElementById("skillTitle2");

learnMore_2.addEventListener("click", skillInfo_2);

function skillInfo_2() {
  overlay_2.classList.remove("hidden");
  title_2.classList.add("hidden");
  setTimeout(() => {
    overlay_2.classList.add("hidden");
    title_2.classList.remove("hidden");
  }, 6000);
}
const learnMore_3 = document.getElementById("l3");
const overlay_3 = document.getElementById("overlay3");
const title_3 = document.getElementById("skillTitle3");

learnMore_3.addEventListener("click", skillInfo_3);

function skillInfo_3() {
  overlay_3.classList.remove("hidden");
  title_3.classList.add("hidden");
  setTimeout(() => {
    overlay_3.classList.add("hidden");
    title_3.classList.remove("hidden");
  }, 6000);
}
const learnMore_4 = document.getElementById("l4");
const overlay_4 = document.getElementById("overlay4");
const title_4 = document.getElementById("skillTitle4");

learnMore_4.addEventListener("click", skillInfo_4);

function skillInfo_4() {
  overlay_4.classList.remove("hidden");
  title_4.classList.add("hidden");
  setTimeout(() => {
    overlay_4.classList.add("hidden");
    title_4.classList.remove("hidden");
  }, 6000);
}
const learnMore_5 = document.getElementById("l5");
const overlay_5 = document.getElementById("overlay5");
const title_5 = document.getElementById("skillTitle5");

learnMore_5.addEventListener("click", skillInfo_5);

function skillInfo_5() {
  overlay_5.classList.remove("hidden");
  title_5.classList.add("hidden");
  setTimeout(() => {
    overlay_5.classList.add("hidden");
    title_5.classList.remove("hidden");
  }, 6000);
}
const learnMore_6 = document.getElementById("l6");
const overlay_6 = document.getElementById("overlay6");
const title_6 = document.getElementById("skillTitle6");

learnMore_6.addEventListener("click", skillInfo_6);

function skillInfo_6() {
  overlay_6.classList.remove("hidden");
  title_6.classList.add("hidden");
  setTimeout(() => {
    overlay_6.classList.add("hidden");
    title_6.classList.remove("hidden");
  }, 6000);
}
//End
