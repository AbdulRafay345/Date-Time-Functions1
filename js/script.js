let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


// original date and time
function updateDateTime() {
    let now = new Date();
    let datetimeElement = document.getElementById("datetime");
    datetimeElement.textContent = now;
}
setInterval(updateDateTime, 1000);


// to show result in output
function showOutput(output) {
    document.getElementById("output").innerHTML = output;
}


// toast function 
function toastError(text) {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "red",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}


// name of today
function nameOfToday() {
    let now = new Date();
    let dayNumber = now.getDay();
    let dayName = days[dayNumber];
    showOutput('<span class= "fs-4 text-success">"' + dayName + '"</span>');
}


// days since I born
function daysSinceBorn() {
    let birthDate = document.getElementById("input").value;
    if (!birthDate) {
        toastError("Please add date and time properly");
        return;
    }
    birthDate = new Date(birthDate).getTime()
    let now = new Date();

    let daysSinceBorn = now.getTime() - birthDate
    daysSinceBorn = Math.floor(daysSinceBorn / (1000 * 60 * 60 * 24))

    now = now.toLocaleTimeString()
    if (daysSinceBorn <= -1) {
        toastError("You didn't provide correct date!")
        return;
    } else {
        showOutput("'" + daysSinceBorn + "' days have been passed since you born" + "<br>" + "You clicked the button at " + now);
    }
}


// next birthday
function nextBirthday() {
    let birthDate = document.getElementById("input").value;
    if (!birthDate) {
        toastError("Please add date and time properly");
        return;
    }
    birthDate = new Date(birthDate);
    let now = new Date();

    let timeUntilNextBirthday = birthDate.getTime() - now.getTime();
    let daysUntilNextBirthday = Math.floor(timeUntilNextBirthday / (1000 * 60 * 60 * 24));
    console.log("daysUntilNextBirthday", daysUntilNextBirthday);

    now = now.toLocaleTimeString()
    if (daysUntilNextBirthday <= -1) {
        toastError("Please add Date and time ahead from now!");
        return;
    } else if (daysUntilNextBirthday === 0) {
        showOutput("Happy birthday! Your birthday is today!" + "<br>" + "You clicked the button at " + now);
        return;
    } else if (daysUntilNextBirthday === 1) {
        showOutput("Your birthday is tomorrow!" + "<br>" + "You clicked the button at " + now);
        return;
    } else {
        showOutput("Your next birthday is in<span class= 'fs-3 text-success'> '" + daysUntilNextBirthday + "'</span> days." + "<br>" + "You clicked the button at " + now);
    }
}


// greet user
function greetUser() {
    let now = new Date().getHours();
    let name = prompt("Your Name?")
    let timeNow = new Date().toLocaleTimeString()
    if (now < 12 && now >= 4) {
        showOutput("Good Morning '<span style= 'text-transform:capitalize;'>" + name + "'</span>" + "<br>" + "You clicked the button at " + timeNow)
        return;
    } else if (now < 16 && now >= 12) {
        showOutput("Good Afternoon '<span style= 'text-transform:capitalize;'>" + name + "'</span>" + "<br>" + "You clicked the button at " + timeNow)
        return;
    } else if (now < 19 && now >= 16) {
        showOutput("Good Evening '<span style= 'text-transform:capitalize;'>" + name + "'</span>" + "<br>" + "You clicked the button at " + timeNow)
        return;
    } else {
        showOutput("Good Night '<span style= 'text-transform:capitalize;'>" + name + "'</span>" + "<br>" + "You clicked the button at " + timeNow)
    }
}


// calculate tax 
function calculateTax() {
    let amount = +prompt("Enter total amount in rupees!")
    let tax = amount * (18 / 100)
    tax.toFixed(2)
    if (!amount) {
        toastError("Please enter your amount")
        return;
    } else {
        showOutput("Total GST on your <span class='fs-5'>'" + amount + "'<span> rupees bill is <span class='fs-5'>'" + tax + "'</span>")
    }
}


// total amount with tax 
function totalPrice() {
    let amount = +prompt("Enter total amount in rupees!")
    let tax = amount * (18 / 100)
    let totalPrice = amount + tax
    tax.toFixed(2)
    if (!amount) {
        toastError("Please enter your amount")
        return;
    } else {
        showOutput("Total GST on your <span class='fs-5'>'" + amount + "'</span> rupees bill is <span class='fs-5'>'" + tax + "'</span>" + "<br>" + "So, Total price will be <span class='fs-5'>'" + totalPrice + "'</span>")
    }
}


//  to tell time suadi Arvb time zome
function tellTime1() {
    let now = new Date();
    now.setHours(now.getHours() - 2);
    showOutput("Saudi Arab: " + now.toLocaleTimeString())
}


//  to tell time dubai time zome
function tellTime2() {
    let now = new Date();
    now.setHours(now.getHours() - 1);
    showOutput("Dubai: " + now.toLocaleTimeString())
}


//  to tell time new york time zome
function tellTime3() {
    let now = new Date()
    let newYorkOffset = -9;
    let newYorkTime = new Date(now.getTime() + (newYorkOffset * 3600000));
    showOutput("New York: " + newYorkTime.toLocaleTimeString())
}


// clear input
function clearInput() {
    document.getElementById("input").value = ""
}


// clear output
function clearOutput() {
    document.getElementById("output").innerHTML = ""
}