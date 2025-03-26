function Clock() {
  const now = new Date();
  const Hours = now.getHours().toString().padStart(2, 0);
  const Minutes = now.getMinutes().toString().padStart(2, 0);
  const Seconds = now.getSeconds().toString().padStart(2, 0);
  let textString;
  if (Hours <= 12) {
    textString = `${Hours}:${Minutes}:${Seconds}AM`;
    document.getElementById(`clock`).textContent = textString;
  } else {
    textString = `${Hours}:${Minutes}:${Seconds} PM`;
    document.getElementById(`clock`).textContent = textString;
  }
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = weekday[now.getDay()];
  console.log(day);
  const date = now.getDate().toString().padStart(2, 0);
  const month = now.getMonth().toString().padStart(2, 0);
  const year = now.getFullYear();
  const datestring = `${day} ${date}.${month}.${year}`;
  document.getElementById(`date`).textContent = datestring;
}
Clock();
setInterval(Clock, 1000);

//color change

function colorChange(color) {
  document.getElementById(`clock`).style.color = color;
  document.getElementById(`date`).style.color = color;
}

document.getElementById(`red`).onclick = function () {
  colorChange(`red`);
};
document.getElementById(`yellow`).onclick = function () {
  colorChange(`yellow`);
};
document.getElementById(`blue`).onclick = function () {
  colorChange(`blue`);
};
document.getElementById(`green`).onclick = function () {
  colorChange(`green`);
};
document.getElementById(`white`).onclick = function () {
  colorChange(`white`);
};
document.getElementById(`orange`).onclick = function () {
  colorChange(`orange`);
};
document.getElementById(`purple`).onclick = function () {
  colorChange(`purple`);
};
document.getElementById(`brown`).onclick = function () {
  colorChange(`brown`);
};
document.getElementById(`black`).onclick = function () {
  colorChange(`black`);
};
