//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

const React = require("react");
const ReactDOM = require("react-dom");

var time = new Date().getHours();

function timeOfDay() {
  if (time < 12) {
    return "Morning";
  } else if (time < 18) {
    return "Afternoon";
  } else {
    return "Evening";
  }
}

function textColor() {
  if (time < 12) {
    return "red";
  } else if (time < 18) {
    return "green";
  } else {
    return "blue";
  }
}

ReactDOM.render(
  <div>
    <h1 style={{ color: textColor() }}> Good {timeOfDay(time)} ! </h1>
  </div>,

  document.getElementById("root")
);
