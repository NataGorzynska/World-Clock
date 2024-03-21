function updateTime() {
  let durbanElement = document.querySelector("#durban");
  let durbanDateElement = durbanElement.querySelector(".date");
  let durbanTimeElement = durbanElement.querySelector(".time");
  let durbanTime = moment().tz("Africa/Johannesburg");

  durbanDateElement.innerHTML = durbanTime.format("MMMM Do YYYY");

  durbanTimeElement.innerHTML = `${durbanTime.format(
    "h:mm:ss"
  )} <small> ${durbanTime.format("A")} </small>`;

  let exeterElement = document.querySelector("#exeter");
  let exeterDateElement = exeterElement.querySelector(".date");
  let exeterTimeElement = exeterElement.querySelector(".time");
  let exeterTime = moment().tz("Europe/London");

  exeterDateElement.innerHTML = exeterTime.format("MMMM Do YYYY");

  exeterTimeElement.innerHTML = `${exeterTime.format(
    "h:mm:ss"
  )} <small> ${exeterTime.format("A")} </small>`;
}
updateTime();
setInterval(updateTime, 1000);
