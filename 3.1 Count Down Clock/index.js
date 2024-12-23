// Getting formatted date from date string
let deadline = new Date("Dec 24, 2024 00:00:00").getTime();

// Calling defined function at certain intervals
let x = setInterval(function () {
  // Getting current date and time
  let now = new Date().getTime();

  // Calculating difference
  let t = deadline - now;

  // Getting values of days, hours, minutes, seconds
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);

  // Show the output time
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  // Trigger image popup at specific times
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 10) {
    showImagePopup("./images/img_1.gif"); 
  }

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    showImagePopup("./images/img_3.gif"); 
  }

  // Show overtime output
  if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIME UP";
    document.getElementById("day").innerHTML = "0";
    document.getElementById("hour").innerHTML = "0";
    document.getElementById("minute").innerHTML = "0";
    document.getElementById("second").innerHTML = "0";
  }
}, 1000);

// Function to show the image popup
function showImagePopup(imagePath) {
  // Create a modal overlay
  let overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "1000";

  // Create the image element
  let image = document.createElement("img");
  image.src = imagePath; 
  image.style.width = "80%";
  image.style.height = "auto";

  // Append image to overlay
  overlay.appendChild(image);

  // Append overlay to body
  document.body.appendChild(overlay);

  // Close the popup when overlay is clicked
  overlay.addEventListener("click", function () {
    document.body.removeChild(overlay);
  });
}

var originalImgWidth = 0;
var img = null;

function expand(it) {
    originalImgWidth = it.width;
    img = it;
    exp();
}

function exp() {

    if(window.innerWidth > img.width * 2.8){ 
        img.width = img.width * 1.1;
        setTimeout("exp()",100);
    }
    else
        setTimeout("shrink()",100);


}
function shrink() {

    if(originalImgWidth < img.width){
        img.width = img.width / 1.1; 
        setTimeout("shrink()",100);
    }
    else
        setTimeout("exp()",100);
}
