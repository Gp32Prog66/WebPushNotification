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