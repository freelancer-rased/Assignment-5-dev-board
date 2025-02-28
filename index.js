document.getElementById("theme").addEventListener("click", function () {
  document.body.style.backgroundColor = `hsl(${
    Math.random() * 360
  }, 100%, 50%)`;
});

// fix mobile button issue section
document.getElementById("card-section").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const btnDisabled = (document.getElementById("card-section").disabled = true);
  document.getElementById("card-section").style.backgroundColor = "#ccc";

  const taskNumber = document.getElementById("task-number").innerText;
  const headerNumber = document.getElementById("header-number").innerText;
  const convertedHeaderNumber = parseInt(headerNumber);

  if (btnDisabled === true) {
    const subs = taskNumber - 1;
    document.getElementById("task-number").innerText = subs;

    const sum = convertedHeaderNumber + 1;
    document.getElementById("header-number").innerText = sum;

    const cardTitle = document.getElementById("fix-mobile").innerText;

    const activityLog = document.getElementById("activity-log");

    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const createP = document.createElement("p");
    createP.innerText = `
           You have completed the task ${cardTitle} at ${formattedTime}
           `;
    activityLog.appendChild(createP);
  } else {
    console.log("no");
  }
});

// Add Dark Mode Section
document.getElementById("btn-card2").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const btnDisabled = (document.getElementById("btn-card2").disabled = true);
  document.getElementById("btn-card2").style.backgroundColor = "#ccc";

  const taskNumber = document.getElementById("task-number").innerText;
  const headerNumber = document.getElementById("header-number").innerText;
  const convertedHeaderNumber = parseInt(headerNumber);

  if (btnDisabled === true) {
    const subs = taskNumber - 1;
    document.getElementById("task-number").innerText = subs;

    const sum = convertedHeaderNumber + 1;
    document.getElementById("header-number").innerText = sum;

    const cardTitle = document.getElementById("add-dark").innerText;

    const activityLog = document.getElementById("activity-log");

    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const createP = document.createElement("p");
    createP.innerText = `
           You have completed the task ${cardTitle} at ${formattedTime}
           `;
    activityLog.appendChild(createP);
  } else {
    console.log("no");
  }
});

// Optimize Home Page Section
document.getElementById("btn-card3").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const btnDisabled = (document.getElementById("btn-card3").disabled = true);
  document.getElementById("btn-card3").style.backgroundColor = "#ccc";

  const taskNumber = document.getElementById("task-number").innerText;
  const headerNumber = document.getElementById("header-number").innerText;
  const convertedHeaderNumber = parseInt(headerNumber);

  if (btnDisabled === true) {
    const subs = taskNumber - 1;
    document.getElementById("task-number").innerText = subs;

    const sum = convertedHeaderNumber + 1;
    document.getElementById("header-number").innerText = sum;

    const cardTitle = document.getElementById("optimize-home").innerText;

    const activityLog = document.getElementById("activity-log");

    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const createP = document.createElement("p");
    createP.innerText = `
           You have completed the task ${cardTitle} at ${formattedTime}
           `;
    activityLog.appendChild(createP);
  } else {
    console.log("no");
  }
});

// Add new emoji
document.getElementById("btn-card4").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const btnDisabled = (document.getElementById("btn-card4").disabled = true);
  document.getElementById("btn-card4").style.backgroundColor = "#ccc";

  const taskNumber = document.getElementById("task-number").innerText;
  const headerNumber = document.getElementById("header-number").innerText;
  const convertedHeaderNumber = parseInt(headerNumber);

  if (btnDisabled === true) {
    const subs = taskNumber - 1;
    document.getElementById("task-number").innerText = subs;

    const sum = convertedHeaderNumber + 1;
    document.getElementById("header-number").innerText = sum;

    const cardTitle = document.getElementById("add-new").innerText;

    const activityLog = document.getElementById("activity-log");

    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const createP = document.createElement("p");
    createP.innerText = `
           You have completed the task ${cardTitle} at ${formattedTime}
           `;
    activityLog.appendChild(createP);
  } else {
    console.log("no");
  }
});

// Integrate openai API
document.getElementById("btn-card5").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const btnDisabled = (document.getElementById("btn-card5").disabled = true);
  document.getElementById("btn-card5").style.backgroundColor = "#ccc";

  const taskNumber = document.getElementById("task-number").innerText;
  const headerNumber = document.getElementById("header-number").innerText;
  const convertedHeaderNumber = parseInt(headerNumber);

  if (btnDisabled === true) {
    const subs = taskNumber - 1;
    document.getElementById("task-number").innerText = subs;

    const sum = convertedHeaderNumber + 1;
    document.getElementById("header-number").innerText = sum;

    const cardTitle = document.getElementById("integrate").innerText;

    const activityLog = document.getElementById("activity-log");

    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const createP = document.createElement("p");
    createP.innerText = `
           You have completed the task ${cardTitle} at ${formattedTime}
           `;
    activityLog.appendChild(createP);
  } else {
    console.log("no");
  }
});

// Improve Job searching
document.getElementById("btn-card6").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const btnDisabled = (document.getElementById("btn-card6").disabled = true);
  document.getElementById("btn-card6").style.backgroundColor = "#ccc";

  const taskNumber = document.getElementById("task-number").innerText;
  const headerNumber = document.getElementById("header-number").innerText;
  const convertedHeaderNumber = parseInt(headerNumber);

  if (btnDisabled === true) {
    const subs = taskNumber - 1;
    document.getElementById("task-number").innerText = subs;

    const sum = convertedHeaderNumber + 1;
    document.getElementById("header-number").innerText = sum;

    const cardTitle = document.getElementById("improve-job").innerText;

    const activityLog = document.getElementById("activity-log");

    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const createP = document.createElement("p");
    createP.innerText = `
             You have completed the task ${cardTitle} at ${formattedTime}
             `;
    activityLog.appendChild(createP);
  } else {
    console.log("no");
  }
});
