document.getElementById('theme')
.addEventListener('click', function(){
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
})

document.getElementById('card-section')
.addEventListener('click', function(){
    alert('Board Updated Successfully')
   const btnDisabled = document.getElementById('card-section').disabled = true;
    document.getElementById('card-section').style.backgroundColor = '#ccc'

    const taskNumber = document.getElementById('task-number').innerText;
    const headerNumber = document.getElementById('header-number').innerText;
    const convertedHeaderNumber = parseInt(headerNumber);

    if(btnDisabled === true){
        const subs = taskNumber -1;
        document.getElementById('task-number').innerText = subs;

        const sum = convertedHeaderNumber + 1;
        document.getElementById('header-number').innerText = sum;

        const cardTitle = document.getElementById('fix-mobile').innerText;

        const activityLog = document.getElementById('activity-log');

        const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const formattedTime = `${hours}:${minutes}:${seconds}`;

        const createP = document.createElement('p');
        createP.innerText = `
           You have completed the task ${cardTitle} at ${formattedTime}
           `
           activityLog.appendChild(createP);
    }
    else{
        console.log('no')
    }
})