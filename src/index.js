function updateTime() {
  // Auckland
  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement =  aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTime = moment().tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = aucklandTime.format("Do MMMM YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement =  parisElement.querySelector(".time");
  let  parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);