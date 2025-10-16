function showTime() {
  let time = new Date();

  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let session = "AM";

  if (hour >= 12) {
    session = "PM";
  }
  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
  document.getElementById("ampm").innerHTML = session;

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let today = days[time.getDay()];

  let date = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear();

  if (date < 10) {
    date = "0" + date;
  }
  if (month < 10) {
    month = "0" + month;
  }

  document.getElementById("day").innerHTML = today;
  document.getElementById("date").innerHTML = date + "/" + month + "/" + year;
}

setInterval(showTime, 1000);
showTime();
