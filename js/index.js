 
//declarations
const homeBtn = document.querySelector(".nav-link");
const logo = document.querySelector(".logo-heading");
const nav = document.querySelectorAll("a");
const bannerImage = document.querySelector("img");
const images = document.querySelector(".img-content");

//const destination = document.querySelectorAll(".destination");
const button = document.querySelector(".btn");
const bannerContainer = document.querySelector(".content-destination");
const banner = document.querySelector("#banner");
const footer = document.querySelector(".footer");

//mouseover - changes text properties when mouse hovers over it

nav.forEach((navItem) => {
  navItem.addEventListener("mouseover", () => {
    navItem.style.color = "purple";
    navItem.style.fontSize = "25px";
  });
});

//keydown - press a key to establish an action

document.addEventListener("keydown", (event) => {
    if (event.key == "Shift") {
        images.style.width = "25%";
    }
  });

//wheel - scroll the mousewheel to establish action
const popUp = () => {
    bannerImage.style.transform = "rotate(180deg)";
    
};

bannerImage.addEventListener("wheel", popUp);

//load - action loads when page first opens or refreshes

window.addEventListener("load", (event) => {
    console.log("Welcome");
    alert("Welcome");
  });

//focus - text focuses when clicked, making a reaction from it
const changeH4s = () => {
  destination.forEach((items) => {
    let h4 = items.querySelector("h4");
    h4.style.background = "pink";
    h4.style.color = "white";
    h4.style.textAlign = "center";
    h4.style.fontSize = "30px";
    h4.style.borderRadius = "20px";
  });
};

homeBtn.addEventListener("focus", (event) => {
    logo.textContent = `Hello World`;
  });
  
footer.addEventListener("click", changeH4s);

//resize - displays size of window height and width

const showSize = () => {
  console.log(
    `Window Height: ${window.innerHeight} Window Width: ${window.innerWidth}`
  );
};

window.addEventListener("resize", showSize);

//scroll - scrolling on a page or window establishes action

window.addEventListener("scroll", () => {
  banner.style.transform = "rotate(180deg)";
  banner.style.transition = "transform 1.5s";
});

//dblClick - double click to start

  images.addEventListener("dblclick", () => {
    images.style.width = "50%";
});

// Prevent propagation with nested events.

bannerContainer.addEventListener("click", (event) => {
  console.log("Not working");
});

banner.addEventListener("click", (event) => {
  console.log("It is working");
  event.stopPropagation();
});