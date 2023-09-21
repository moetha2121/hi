let timeArray = []; // Declare an array to store time values

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  // Update the array with the current time values
  timeArray = [h, m, s];

  document.getElementById('hour').innerHTML = timeArray[0]; /* Display the time separately in different HTML elements */
  document.getElementById('minute').innerHTML = timeArray[1];
  document.getElementById('second').innerHTML = timeArray[2];

  setTimeout(startTime, 1000); /* update the time every second */
}

startTime();

function checkTime(i) {
  if (i < 10) {
    i = "0" + i; /* check numbers and if they are less than 10, add a 0 infront. */
  }
  return i;
}
