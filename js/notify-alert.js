function showNotifications(message)
{
    if(!("Notification" in window))
    {
        alert("This browser does not support notifications");
    }
    else if(Notification.permission === "granted")
    {
        const notification = new notification(document.title, {body: message});
    }
    else if(Notification.permission !== "denied")
    {
        Notification.requestPermission().then(function (permission)
        {
            if(permission === "granted")
            {
                const notification = new notification(document.title, {body: message})
                alert("Displaying This Text On Screen");
            }
        });
    }
}