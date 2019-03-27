var jsonData = {
  temperature: 27,
  fan_speed: 1,
  power: true
};
console.log(jsonData.power);
// var data = JSON.parse(jsonData);
console.log(jsonData.fan_speed);
//--------------------------------------------------------------------
var windUp = document.getElementById("wind-up");
var windDown = document.getElementById("wind-down");
var count = jsonData.fan_speed;
if (count == 1) {
  document.getElementById("wind-icon").innerHTML =
    "<i class='fas fa-wind wind-icon'></i>";
}
if (count == 2) {
  document.getElementById("wind-icon").innerHTML =
    "<i class='fas fa-wind wind-icon'></i><i class='fas fa-wind wind-icon'></i>";
  windDown.disabled = false;
}
if (count == 3) {
  document.getElementById("wind-icon").innerHTML =
    "<i class='fas fa-wind wind-icon'></i><i class='fas fa-wind wind-icon'></i><i class='fas fa-wind wind-icon'></i>";
  windUp.disabled = true;
}
windUp.addEventListener("click", function() {
  if (jsonData.power == true) {
    console.log("button clicked");
    count++;
    if (count == 1) {
      document.getElementById("wind-icon").innerHTML =
        "<i class='fas fa-wind wind-icon'></i>";
      jsonData.fan_speed = count;
      console.log(jsonData.fan_speed);
    }

    if (count == 2) {
      document.getElementById("wind-icon").innerHTML =
        "<i class='fas fa-wind wind-icon'></i><i class='fas fa-wind wind-icon'></i>";
      windDown.disabled = false;
      jsonData.fan_speed = count;
      console.log(jsonData.fan_speed);
    }
    if (count == 3) {
      document.getElementById("wind-icon").innerHTML =
        "<i class='fas fa-wind wind-icon'></i><i class='fas fa-wind wind-icon'></i><i class='fas fa-wind wind-icon'></i>";
      windUp.disabled = true;
      jsonData.fan_speed = count;
      console.log(jsonData.fan_speed);
    }
  }
});
windDown.addEventListener("click", function() {
  if (jsonData.power == true) {
    count--;
    if (count == 2) {
      document.getElementById("wind-icon").innerHTML =
        "<i class='fas fa-wind wind-icon'></i><i class='fas fa-wind wind-icon'></i>";
      windUp.disabled = false;
      jsonData.fan_speed = count;
      console.log(jsonData.fan_speed);
    }
    if (count == 1) {
      document.getElementById("wind-icon").innerHTML =
        "<i class='fas fa-wind wind-icon'></i>";
      windDown.disabled = true;
      jsonData.fan_speed = count;
      console.log(jsonData.fan_speed);
    }
  }
});

//--------------------------------------------------------------------------
if (jsonData.power == true) {
  document.getElementById("display-details").style.display = "block";
}
if (jsonData.power == false) {
  document.getElementById("display-details").style.display = "none";
}
var on = document.getElementById("power-on");
on.addEventListener("click", function() {
  document.getElementById("display-details").style.display = "block";
  jsonData.power = true;
});
var on = document.getElementById("power-off");
on.addEventListener("click", function() {
  document.getElementById("display-details").style.display = "none";
  jsonData.power = false;
  console.log(jsonData.power);
});
//--------------------------------------------------------------------------

var tempUp = document.getElementById("temp-up");
var tempDown = document.getElementById("temp-down");
// var temperature = parseInt(
//   document.getElementById("temp-display").innerHTML,
//   10
// );
var temperature = jsonData.temperature;
document.getElementById("temp-display").innerHTML = temperature + "°c";
console.log(jsonData.power);
console.log(jsonData.power);
tempUp.addEventListener("click", function() {
  if (jsonData.power == true) {
    temperature++;

    if (temperature < 33) {
      document.getElementById("temp-display").innerHTML = temperature + "°c";
      tempDown.disabled = false;
      jsonData.temperature = temperature;
      console.log(temperature);
    } else {
      tempUp.disabled = true;
      console.log("max");
    }
  }
});
tempDown.addEventListener("click", function() {
  if (jsonData.power == true) {
    temperature--;
    if (temperature > 15) {
      document.getElementById("temp-display").innerHTML = temperature + "°c";
      tempUp.disabled = false;
      jsonData.temperature = temperature;
      console.log(temperature);
    } else {
      tempDown.disabled = true;
      console.log("min");
    }
  }
});

//----------------------------------------------------------------------------
