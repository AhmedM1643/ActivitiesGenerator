let container = document.querySelector(".container");
let activityTitle = document.querySelector("h4");
let activityCategory = document.querySelector("p");

let req = new XMLHttpRequest();
req.open("GET", "https://www.boredapi.com/api/activity");
req.send();

req.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log("Request Sended");
        let newActivity = JSON.parse(this.responseText);
        console.log(newActivity)
        activityTitle.innerHTML = newActivity.activity;
        activityCategory.innerHTML = newActivity.type;
    }
}

function reload() {
    location.reload()
}