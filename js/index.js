/*mouse-cursor custom*/
const cursor = $(".cursor");

$(window).on("mousemove", (e) => {
  //console.log(e);
  cursor.css({
    left: e.pageX + "px",
    top: e.pageY + "px",
  });
});

/* bubbles ------------------------------------------------ */
$(".bubbles span").each((idx, item) => {
  const radius = Math.random() * 10 + 5;
  $(item).css({
    bottom: Math.random() * $(".bubbles").height(),
    left: Math.random() * $(".bubbles").width(),
    width: radius,
    height: radius,
  });
  gsap.from($(item), {
    x: Math.random() * 100 - 80,
    y: Math.random() * 50 + 30,
    duration: 15,
    repeat: -1,
  });
});

/* Wave ---------------------------------------------------- */
function disappearWave() {
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

/* popup ---------------------------------------------------- */
function disappearPopUp() {
  gsap.to("#popUp", {
    display: "none",
  });
  disappearWave();
  gsap.to(".popupContents", {
    opacity: 0,
    duration: 1,
  });
}

$("#popUp .popupContents .btns .btnClose").on("click", () => {
  disappearPopUp();
});
$("#popUp .popupContents .btns .btnWeekClose").on("click", () => {
  disappearPopUp();
  Cookies.set("popupDisplay", "none", { expires: 7 });
});
//console.log(Cookies.get("popupDisplay"));
if (Cookies.get("popupDisplay") !== "none") {
  $("#popUp").show();
} else {
  $("#popUp").hide();
  disappearWave();
}

/* fullpage --------------------------------------------------- */

// wave animaion with fullpage
function waveDown() {
  gsap.to(".waveBg", {
    top: 1000,
    ease: "back.in",
    duration: 2,
  });
  gsap.to(".bubbles", {
    opacity: 0,
    duration: 2,
  });
}

function waveUpLow() {
  gsap.to(".waveBg", {
    top: 230,
    ease: "back.in",
    duration: 2,
  });
  gsap.fromTo(
    ".bubbles",
    { bottom: "-100px", opacity: 0 },
    {
      bottom: "-80px",
      opacity: 1,
      delay: 2.1,
    }
  );
}

function waveUpHigh() {
  gsap.to(".waveBg", {
    top: 150,
    ease: "back.in",
    duration: 2,
  });
  gsap.to(".bubbles", {
    bottom: "-20px",
    opacity: 1,
    delay: 2.1,
  });
}

// fullpage control
$("#main").fullpage({
  afterLoad(origin, destination, direction) {
    // scroll down
    if (destination.index === 1 && direction === "down") {
      waveDown();
      $("#header .gnb .gnbList").addClass("black");
    }
    if (destination.index === 4 && direction === "down") {
      waveUpLow();
      gsap.to("#contact .copyright", {
        opacity: 1,
        delay: 2.1,
      });
      $(".waveBg").css({ zIndex: 0 });
      $("#header .gnb .gnbList").removeClass("black");
    }
    // ------------------- scroll end -----------------------
    // scroll up
    if (destination.index === 3 && direction === "up") {
      waveDown();
      $("#header .gnb .gnbList").addClass("black");
    }
    if (destination.index === 0 && direction === "up") {
      waveUpHigh();
      $(".waveBg").css({ zIndex: 1 });
      $("#header .gnb .gnbList").removeClass("black");
    }
  },
});

//fullpage_api.moveTo(5);

$("#header .gnb .gnbList li a").each((idx, item) => {
  $(item).on("click", (event) => {
    event.preventDefault();
    fullpage_api.silentMoveTo(idx + 1);
    if (idx === 1 || idx === 2 || idx === 3) {
      $(".waveBg").hide();
      $(".bubbles").hide();
      $("#header .gnb .gnbList").addClass("black");
    } else {
      $(".waveBg").show();
      $(".bubbles").show();
      $("#header .gnb .gnbList").removeClass("black");
    }
  });
});

/* swiper -------------------------------------------------- */
const pjt01Swiper = new Swiper("#pjt01Swiper", {
  speed: 1000,
});
