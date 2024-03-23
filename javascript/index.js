function updateTime() {
  let durbanElement = document.querySelector("#durban");
  if (durbanElement) {
    let durbanDateElement = durbanElement.querySelector(".date");
    let durbanTimeElement = durbanElement.querySelector(".time");
    let durbanTime = moment().tz("Africa/Johannesburg");

    durbanDateElement.innerHTML = durbanTime.format("MMMM Do YYYY");

    durbanTimeElement.innerHTML = `${durbanTime.format(
      "h:mm:ss"
    )} <small> ${durbanTime.format("A")} </small>`;
  }

  let exeterElement = document.querySelector("#exeter");
  if (exeterElement) {
    let exeterDateElement = exeterElement.querySelector(".date");
    let exeterTimeElement = exeterElement.querySelector(".time");
    let exeterTime = moment().tz("Europe/London");

    exeterDateElement.innerHTML = exeterTime.format("MMMM Do YYYY");

    exeterTimeElement.innerHTML = `${exeterTime.format(
      "h:mm:ss"
    )} <small> ${exeterTime.format("A")} </small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2> ${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
