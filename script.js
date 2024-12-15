const schedule = {
    "2024-11-25": "History",
    "2024-11-26": "Science ",
    "2024-11-27": "Sinhala",
    "2024-11-28": "Sinhala",
    "2024-11-29": "Mathematics",
    "2024-11-30": "Today is free",
    "2024-12-01": "Today is free",
    "2024-12-02": " Buddhism ",
    "2024-12-03": "English ",
    "2024-12-04": "Today is free",
    "2024-12-05": "History 2",
        "2024-12-06": "Science 2",
    "2024-12-10": "Mathematics 2",
        "2024-12-12": "Buddhism 2",
    "2024-12-13": "English 2",
    "2024-12-16": "1st optional caregory"
};

function getTime() {
    var options = {
        timeZone: "Asia/Colombo",
        hour: "numeric",
        minute: "numeric",
        hour12: false
    };

    var currentTime = new Date().toLocaleString("en-US", options);
    var time = currentTime.replace(",", "");
    var currentDate = new Date().toISOString().split('T')[0];

    displayMessage(time, currentDate);
}

function displayMessage(time, currentDate) {
    var subject = schedule[currentDate];
    var hours = parseInt(time.substring(0, 2));
    var minutes = parseInt(time.substring(3, 5));

    if ((hours === 5 && minutes >= 30) || (hours < 9)) {
        if (subject) {
            document.getElementById("message").innerHTML = "NOW " + subject;
        } else {
            document.getElementById("message").innerHTML = "No subject now";
        }
    } else {
        document.getElementById("message").innerHTML = "No subject now";
    }
}

setInterval(getTime, 1000);
