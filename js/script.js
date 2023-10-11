var isMenuOpen = false;

document.getElementById("menu-button").addEventListener("click", () => {
  if (isMenuOpen) {
    document.getElementById("menu").style.transform = "scale(0)";
    isMenuOpen = false;
  } else {
    document.getElementById("menu").style.transform = "scale(1)";
    isMenuOpen = true;
  }
});

window.addEventListener("scroll", (event) => {
  const scrollpos = scrollY / innerHeight;
  if (scrollpos > 1) {
    try {
      var scrolltext = Math.round(scrollpos * 10) - 10;
      if (scrolltext == 0) scrolltext = 1;
      document.getElementById("aw" + scrolltext).style.color = "white";
      if (scrolltext < 10) {
        x = scrolltext += 1;
        while (x < 11) {
          document.getElementById("aw" + x).style.color = "#f0f8ff44";
          x++;
        }
      }
    } catch (err) {}
  }
});

function scrolltotop() {
    gsap.to(window, {
        scrollTo: {
          y: 0,
        },
        duration: 1,
      });
    }
document.querySelector('.top').addEventListener('click', scrolltotop);
