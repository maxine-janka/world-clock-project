function updateTime() {
  // Auckland
  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement =  aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTime = moment().tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = aucklandTime.format("Do MMMM YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement =  parisElement.querySelector(".time"); 
  let  parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

function updateCity() {
  if (!cityTimezone) return;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small> ${cityTime.format("A")} </small></div>
  </div>
  <a href="/">Go back</a>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", function (event) {
  cityTimezone = event.target.value;
  updateCity();
});

setInterval(updateCity, 1000);

