function callback()
{
    console.log("Hello, this is callback");
}

function delayCallback(callback)
{
    setTimeout(callback,2000);                   
}

delayCallback(callback);  
