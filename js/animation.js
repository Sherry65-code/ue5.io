var loadingTimeline = gsap.timeline();

loadingTimeline.to(".loading", {
  y: 50,
  duration: 1,
  yoyo: true,
  repeat: -1,
  ease: "bounce",
});

window.addEventListener("load", (event) => {
  loadingTimeline.to("body", {
    backgroundColor: "black",
  })
  .to("#splash", {
    opacity: 0,
    duration: 0.5,
  })
  .to("#splash", {
    duration: 0,
    scale: 0,
  });
  if (document.title == "Unreal Engine 5 - Home") {
  loadingTimeline
    .from(".slidt", {
      y: 30,
      opacity: 0,
      delay: 0.2,
      stagger: 0.1,
    })
    .from(".rightimg", {
      y: 30,
      opacity: 0,
      delay: 0.2,
    });
  }
  else if (document.title == "Unreal Engine 5 - Features") {
    loadingTimeline.to(
      '.ue5ui', {
        width: "50%",
        duration: 1,
      }
    )
    .from(
      '.large',
      {
        y: 200,
        opacity: 0,
        duration: 0.4
      }
    )
    .from('.feature', {
      y: 200,
      opacity: 0,
      duration: 0.4
    })
  }
});
