let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

checkSecurity();

function checkSecurity() {
  if (isAlarmOn && isWindowClosed && isDoorLocked && isOwnerInside) {
    console.log("Secure");
  } else {
    console.log("Unsafe");
  }
}

isOwnerInside = false;

checkSecurity();

isWindowClosed = false;

checkSecurity();
