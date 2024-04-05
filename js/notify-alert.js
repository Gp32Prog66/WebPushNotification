function showNotifications(message)
{
    if(!("Notification" in window))
    {
        alert("This browser does not support notifications");
    }
    else if(Notification.permission === "granted")
    {
        var notification = new notification(document.title, {body: message});
    }
    else if(Notification.permission !== "denied")
    {
        Notification.requestPermission().then(function (permission)
        {
            if(permission === "granted")
            {
                var notification = new notfication(document.title, {body: message})
            }
        });
    }
}