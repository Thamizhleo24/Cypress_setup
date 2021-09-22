function add(num1, num2) 
{
  return num1 + num2;
}
function result(num1, num2, cb) 
{
  return "result is:" + cb(num1, num2);
}

let res = result(15, 15, add);
console.log(res);