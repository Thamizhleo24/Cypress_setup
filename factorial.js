const number = 30;

if(number < 0)
{
    console.log('Negative number');
}
else if(number == 0)
{
    console.log('The Factorial of '+number+' is 1');
}
else{
    let sum = 1;
    
    for(i=1;i <= number;i++){
        sum *=i;
    }
console.log('The factorial of '+number+' is '+sum);
}