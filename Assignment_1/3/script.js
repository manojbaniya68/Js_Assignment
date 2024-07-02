let num = 5.3;
function checkInteger(num) 
{
    if (!Number.isInteger(num)) 
    {
        console.log("Number is not integer.");
    }
    else 
    {
        console.log("Number is integer.");

    }
}
checkInteger(num);