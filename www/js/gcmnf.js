
try
{
    var pushNotification = window.plugins.pushNotification;
    if (window.device.platform == 'android' || device.platform == 'Android') {
        // Register for Android:
        pushNotification.register(
            pushSuccessHandler,
            pushErrorHandler, {
                "senderID":"...", // Project number from Google Developer Console
                "ecb":"onNotificationGCM"
            }
        );
    }
}
catch(err)
{
    // For this example, we'll fail silently ...
    console.log(err);
}
 
/**
 * Success handler for when connected to push server
 * @param result
 */
var pushSuccessHandler = function(result)
{
    console.log(result);
};
 
/**
 * Error handler for when not connected to push server
 * @param error
 */
var pushErrorHandler = function(error)
{
    console.log(error);
};
 
/**
 * Notification from Android GCM
 * @param e
 */
var onNotificationGCM = function(e)
{
    // Check which event:
    switch(e.event)
    {
        case 'registered' :
        {
            console.log('android reg id: ' + e.regid);
            break;
        }
    }
};