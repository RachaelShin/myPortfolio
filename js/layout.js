/*mouse-cursor custom*/
const cursor = $(".cursor");

$(window).on("mousemove", (e) => {
  //console.log(e);
  cursor.css({
    left: e.pageX + "px",
    top: e.pageY + "px",
  });
});

/*popupCover bubbles gsap animation*/
const bubblesTL = gsap.timeline({ repeat: -1 });
bubblesTL
  .from("#popUp .bubble .b01", {
    opacity: 0,
    y: 10,
    duration: 0.8,
  })
  .from("#popUp .bubble .b02", {
    opacity: 0,
    y: 10,
    duration: 0.8,
  })
  .from("#popUp .bubble .b03", {
    opacity: 0,
    y: 10,
    duration: 0.8,
  })
  .from("#popUp .bubble .b04", {
    opacity: 0,
    y: 10,
    duration: 0.8,
  })
  .from("#popUp .bubble .b05", {
    opacity: 0,
    y: 10,
    duration: 0.8,
  })
  .from("#popUp .bubble .b06", {
    opacity: 0,
    y: 10,
    duration: 0.8,
  });

/* popupCover */

function disappear02() {
  gsap.to("#waves", {
    top: 470,
    ease: "back.in",
    duration: 2,
  });
  gsap.to(".underBox", {
    height: 232,
    ease: "back.in",
    duration: 2,
  });
  gsap.to(".fakeCover", {
    display: "none",
    delay: 1.5,
  });
}

function disappear01() {
  gsap.to("#popUp", {
    display: "none",
  });
  disappear02();
  gsap.to(".popupContents", {
    opacity: 0,
    duration: 1,
  });
}

$("#popUp .inner .btns .btnClose").on("click", () => {
  disappear01();
});
$("#popUp .inner .btns .btnWeekClose").on("click", () => {
  disappear01();
  Cookies.set("popupDisplay", "none", { expires: 7 });
});
//console.log(Cookies.get("popupDisplay"));
if (Cookies.get("popupDisplay") !== "none") {
  $("#popUp").show();
} else {
  $("#popUp").hide();
  disappear02();
}
