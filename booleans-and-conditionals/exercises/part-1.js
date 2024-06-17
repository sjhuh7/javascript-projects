// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "NOT red blinking";
let engineTemperature = 2600;
let fuellevel = 12000
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeedMph = 15000;
let commandOverride = true



if (crewStatus === true) {
   console.log ("Crew Ready");
} else {
   console.log("Crew Not Ready");
}

if (computerStatusCode === 200) {
   console.log ("Please standy by. Computer is rebooting");
} else if (computerStatusCode ===400){
   console.log("Success! Computer online.");
} else {
   console.log("Alert: Computer offline!");
}

if (shuttleSpeedMph === 17500) {
   console.log ("ALERT: Escape velocity reached!")
} else if (shuttleSpeedMph < 8000){
   console.log ("ALERT: Cannot maintain orbit!")
} else {
   console.log("Stable speed.")
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}

if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (fuellevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
   console.log("ENGINE FAILURE IMMINENT!");
} else if (fuellevel >20000 && engineTemperature <= 2500) {
   console.log("Full tank. Engines good")
} else if (fuellevel > 10000 && engineTemperature <= 2500) {
   console.log("Fuel level above 50%. Engines good.")
} else if (fuellevel > 5000 && engineTemperature <= 2500) {
   console.log("Fuel level above 25%. Engines good.")
} else if (fuellevel <= 5000 || engineTemperature > 2500) {
   console.log("Check fuel level. Engines running hot.")
} else {
   console.log("Fuel and engine status pending...")
}

if (fuellevel > 20000 && engineIndicatorLight === "NOT red blinking" || commandOverride === true) {
   console.log("Cleared to Launch!")
} else {
   console.log("Launch scrubbed")
}


// Predict - Both the codes above will have the same result so YES

// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
// test