"use strict";

let customers = [1];
start();

function setStyle() {
  let bars = document.querySelectorAll(".bar");

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.height = (customers[i] / 32) * 100 + "%";

    if (bars[i].style.height >= "66%") {
      bars[i].style.backgroundColor = "#ff084a";
    } else if (bars[i].style.height >= "33%" && bars[i].style.height < "66%") {
      bars[i].style.backgroundColor = "#ff6289";
    } else if (bars[i].style.height >= "0%" && bars[i].style.height < "33%") {
      bars[i].style.backgroundColor = "#ffc2cd";
    }
  }
}

function start() {
  if (customers.length <= 39) {
    setTimeout(() => {
      customers.push(Math.floor(Math.random() * 33));
      start();
    }, 0);
  } else {
    liveUpdate();
  }
}

function liveUpdate() {
  setTimeout(() => {
    if (customers.length <= 39) {
      customers.push(Math.floor(Math.random() * 33));
      setStyle();
    } else {
      customers = customers.slice(1);
      customers.push(Math.floor(Math.random() * 33));
      setStyle();
    }
    liveUpdate();
  }, 1000);
}
