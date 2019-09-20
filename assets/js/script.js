window.onload = function() {
  initFilter();

  // K_logo
  let klogoButton = document.getElementById("showKlogo");
  let klogoOverlay = document.getElementById("k_logoOverlay");
  let klogoClose = document.getElementById("closeKlogo");

  klogoButton.addEventListener("click", function() {
    klogoOverlay.classList.add("visible");
  });

  klogoButton.addEventListener("click", function() {
    klogoOverlay.classList.add("visible");
  });

  klogoClose.addEventListener("click", function() {
    klogoOverlay.classList.remove("visible");
  });

  // Zebra
  let zebraButton = document.getElementById("showZebra");
  let zebraOverlay = document.getElementById("zebraOverlay");
  let zebraClose = document.getElementById("closeZebra");

  zebraButton.addEventListener("click", function() {
    zebraOverlay.classList.add("visible");
  });

  zebraButton.addEventListener("click", function() {
    zebraOverlay.classList.add("visible");
  });

  zebraClose.addEventListener("click", function() {
    zebraOverlay.classList.remove("visible");
  });

  // Vinyl
  let vinylButton = document.getElementById("showVinyl");
  let vinylOverlay = document.getElementById("vinylOverlay");
  let vinylClose = document.getElementById("closeVinyl");

  vinylButton.addEventListener("click", function() {
    vinylOverlay.classList.add("visible");
  });

  vinylButton.addEventListener("click", function() {
    vinylOverlay.classList.add("visible");
  });

  vinylClose.addEventListener("click", function() {
    vinylOverlay.classList.remove("visible");
  });

  // Black Cat
  let catButton = document.getElementById("showCat");
  let catOverlay = document.getElementById("catOverlay");
  let catClose = document.getElementById("closeCat");

  catButton.addEventListener("click", function() {
    catOverlay.classList.add("visible");
  });

  catButton.addEventListener("click", function() {
    catOverlay.classList.add("visible");
  });

  catClose.addEventListener("click", function() {
    catOverlay.classList.remove("visible");
  });

  // Ducks
  let ducksButton = document.getElementById("showDucks");
  let ducksOverlay = document.getElementById("ducksOverlay");
  let ducksClose = document.getElementById("closeDucks");

  ducksButton.addEventListener("click", function() {
    ducksOverlay.classList.add("visible");
  });

  ducksButton.addEventListener("click", function() {
    ducksOverlay.classList.add("visible");
  });

  ducksClose.addEventListener("click", function() {
    ducksOverlay.classList.remove("visible");
  });

  // Diabetes
  let diaButton = document.getElementById("showDia");
  let diaOverlay = document.getElementById("diaOverlay");
  let diaClose = document.getElementById("closeDia");

  diaButton.addEventListener("click", function() {
    diaOverlay.classList.add("visible");
  });

  diaButton.addEventListener("click", function() {
    diaOverlay.classList.add("visible");
  });

  diaClose.addEventListener("click", function() {
    diaOverlay.classList.remove("visible");
  });

  // Abrace
  let abraceButton = document.getElementById("showAbrace");
  let abraceOverlay = document.getElementById("abraceOverlay");
  let abraceClose = document.getElementById("closeAbrace");

  abraceButton.addEventListener("click", function() {
    abraceOverlay.classList.add("visible");
  });

  abraceButton.addEventListener("click", function() {
    abraceOverlay.classList.add("visible");
  });

  abraceClose.addEventListener("click", function() {
    abraceOverlay.classList.remove("visible");
  });

  // Video
  let videoButton = document.getElementById("showVideo");
  let videoOverlay = document.getElementById("videoOverlay");
  let videoClose = document.getElementById("closeVideo");

  videoButton.addEventListener("click", function() {
    videoOverlay.classList.add("visible");
  });

  videoButton.addEventListener("click", function() {
    videoOverlay.classList.add("visible");
  });

  videoClose.addEventListener("click", function() {
    videoOverlay.classList.remove("visible");
  });

  // Lilleskolerne
  let lilleButton = document.getElementById("showLille");
  let lilleOverlay = document.getElementById("lilleOverlay");
  let lilleClose = document.getElementById("closeLille");

  lilleButton.addEventListener("click", function() {
    lilleOverlay.classList.add("visible");
  });

  lilleButton.addEventListener("click", function() {
    lilleOverlay.classList.add("visible");
  });

  lilleClose.addEventListener("click", function() {
    lilleOverlay.classList.remove("visible");
  });

  // Zoo
  let zooButton = document.getElementById("showZoo");
  let zooOverlay = document.getElementById("zooOverlay");
  let zooClose = document.getElementById("closeZoo");

  zooButton.addEventListener("click", function() {
    zooOverlay.classList.add("visible");
  });

  zooButton.addEventListener("click", function() {
    zooOverlay.classList.add("visible");
  });

  zooClose.addEventListener("click", function() {
    zooOverlay.classList.remove("visible");
  });
};

function initFilter() {
  let filterLinks = document.querySelectorAll("#options a");

  for (let i = 0; i < filterLinks.length; i++) {
    filterLinks[i].addEventListener("click", function(event) {
      event.preventDefault();
      filter(this.dataset.selector);
    });
  }
}

function filter(selector) {
  addClass(".item", "hide");
  removeClass(selector, "hide");
}

function addClass(targetSelector, className) {
  manipulateClass(targetSelector, className, true);
}

function removeClass(targetSelector, className) {
  manipulateClass(targetSelector, className, false);
}

function manipulateClass(targetSelector, className, isAdd) {
  let targetFirstChar = targetSelector.substr(0, 1);
  if (targetFirstChar == "#") {
    let elm = document.querySelector(targetSelector);
    if (isAdd) {
      elm.classList.add(className);
    } else {
      elm.classList.remove(className);
    }
  } else {
    let elms = document.querySelectorAll(targetSelector);
    for (let i = 0; i < elms.length; i++) {
      if (isAdd) {
        elms[i].classList.add(className);
      } else {
        elms[i].classList.remove(className);
      }
    }
  }
}
