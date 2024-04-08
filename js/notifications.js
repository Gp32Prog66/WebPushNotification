const checkPermission = () =>
{
    if(!('serviceWorker' in navigator))
    {
        throw new Error('SvcWorker is not supported')
    }

    if(!('Notification' in window))
    {
        throw new Error('Notification is not supported')
    }
}
//Show Notifications
var userPermission = Notification.permission;

if(userPermission === "granted")
{
    showingNotification();
}
else
{
    alert("Denied");
}


function showingNotification()
{
    var title = "Notification has been turned on";
    var body = "This is a message to let you know that you allowed notifications to be turned on";

    var notify = new Notification(title, {body});

    notify.onclick = () =>
    {
        notify.close();
        
    }
}

const registerSW = async () =>
{
    const registration = await navigator.serviceWorker.register('sw.js');
    return registration;
}

//Turn on Notification Button
const requestNotificationPermission = async () =>
{
    const permission = await Notification.requestPermission();
    return permission;
}

//User Input
function userInput(userIn) 
{
     userIn= prompt("Enter Something and I Will Echo it Back!");

     alert(userIn);
}

//Displaying This Text on Screen
function displayText()
{
    alert("Display This Text On Screen");
}

if (permission !== 'granted')
{
    throw new Error("Notification permission is not granted")
}else
{
    new Notification("PTI Competition is on April 16th");
}

checkPermission()
registerSW()
requestNotificationPermission()
displayText()