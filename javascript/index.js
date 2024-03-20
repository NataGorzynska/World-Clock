let durbanElement = document.querySelector("#durban");
let durbanDateElement = durbanElement.querySelector(".date");
let durbanTimeElement = durbanElement.querySelector(".time");
let durbanTime = moment();

durbanDateElement.innerHTML = durbanTime.format("MMMM Do YYYY");

durbanTimeElement.innerHTML = `${durbanTime.format(
  "h:mm:ss"
)} <small> ${durbanTime.format("A")} </small>`;
