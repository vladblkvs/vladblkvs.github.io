var sliderBtns = document.querySelectorAll(".slider-btn a");
if (sliderBtns) {
  var slides = document.querySelectorAll(".slide");

  for (var j = 0; j < sliderBtns.length; j++) {
    sliderBtns[j].addEventListener("click", function(evt) {
      evt.preventDefault();

      if (this.hasAttribute("data-active")) return false;

      for (var k = 0; k < sliderBtns.length; k++) {
        sliderBtns[k].removeAttribute("data-active");
        slides[k].removeAttribute("data-active");
      }

      this.setAttribute("data-active", true);

      document.querySelector(this.getAttribute("href")).setAttribute("data-active", true);
    });
  }
}

var serviceLinks = document.querySelectorAll(".services-slider-controls a");
if (serviceLinks) {
  var serviceSlides = document.querySelectorAll(".services-slide");

  for (var j = 0; j < serviceLinks.length; j++) {
    serviceLinks[j].addEventListener("click", function(evt) {
      evt.preventDefault();

      if (this.hasAttribute("data-active")) return false;

      for (var k = 0; k < serviceLinks.length; k++) {
        serviceLinks[k].removeAttribute("data-active");
        serviceSlides[k].removeAttribute("data-active");
      }

      this.setAttribute("data-active", true);

      document.querySelector(this.getAttribute("href")).setAttribute("data-active", true);
    });
  }
}


var buyLinkArr = document.querySelectorAll(".buy");

if (buyLinkArr) {
  var buyPopup = document.querySelector(".modal-cart");
  var buyClose = buyPopup.querySelector(".modal-close");

  for (var i = 0; i < buyLinkArr.length; i++) {
    buyLinkArr[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      buyPopup.classList.add("modal-show");
    });
  }

  buyClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
  });
}

var mapLink = document.querySelector(".contacts-map");

if (mapLink) {
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
}

var writeLink = document.querySelector(".write-us");

if (writeLink) {
  var writePopup = document.querySelector(".modal-write-us");
  var writeClose = writePopup.querySelector(".modal-close");
  var form = writePopup.querySelector(".contact-form");
  var clientName = writePopup.querySelector("[name=client-name]");
  var email = writePopup.querySelector("[name=email]");
  var message = writePopup.querySelector("[name=message]");

  var isStorageSupport = true;
  var storage = "";
  var storage1 = "";
  try {
    storage = localStorage.getItem("client-name");
    storage1 = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  writeLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    writePopup.classList.add("modal-show");
    if (storage) {
      clientName.value = storage;
      email.value = storage1;
      message.focus();
    } else {
      clientName.focus();
    }
  });

  writeClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    writePopup.classList.remove("modal-show");
    writePopup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(evt) {
    if (!clientName.value || !email.value || !message.value) {
      evt.preventDefault();
      writePopup.classList.remove("modal-error");
      writePopup.offsetWidth = writePopup.offsetWidth;
      writePopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("client-name", clientName.value);
        localStorage.setItem("email", email.value);
      }
    }
  });
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
    if (writePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writePopup.classList.remove("modal-show");
      writePopup.classList.remove("modal-error");
    }
    if (buyPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      buyPopup.classList.remove("modal-show");
    }
  }
});