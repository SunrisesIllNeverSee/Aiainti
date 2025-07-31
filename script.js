// Footer Counter Animation
let counter = document.getElementById('counter');
let count = 0;
let end = 9324;
let speed = 20;

function updateCounter() {
  if (count < end) {
    count += Math.ceil((end - count) / 10);
    counter.textContent = `Cards Burned: ${count.toLocaleString()}`;
    setTimeout(updateCounter, speed);
  } else {
    counter.textContent = `Cards Burned: ${end.toLocaleString()}`;
  }
}

window.onload = updateCounter;