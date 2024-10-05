const buttonToUp = document.getElementById("buttonUp");

function goUp() {
  window.addEventListener("scroll", () => {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 400) {
      buttonToUp.style.opacity = 100;
      buttonToUp.style.right = 5 + "rem";
    } else {
      buttonToUp.style.right = -10 + "rem";
      buttonToUp.style.opacity = 0;
    }
  });
}

function clickToUp() {
  const buttonToUp = document.getElementById("buttonUp");
  buttonToUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

clickToUp();
goUp();
