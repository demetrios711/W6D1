const sum = function(){
let the_sum = 0; 
let nums = Array.from(arguments);
for(let i = 0; i < nums.length; i++){
  the_sum += parseInt(nums[i]);
}
  return the_sum;
}

// sum1(1,2,3,4,'cat',5,6,7)

// const sum2 = function (...potato) {
//   let the_sum_2 = 0;
//   for (let i = 0; i < potato.length; i++) {
//     the_sum_2 += potato[i];
//   }
//   return the_sum_2;
// }

// sum2(1, 2, 3, 4, 'cat', 5, 6, 7)

Function.prototype.myBind = function () {

  let ctx = arguments[0];
  let bindArgs = Array.from(arguments).slice(1);

  
  return () => {
    let callArgs = Array.from(arguments)
    return this.apply(ctx, bindArgs.concat(callArgs))
  }
}

function curriedSum(numArgs) {
  const numbers = []; 
  return function _curriedSum(num)
  {
    numbers.push(num); 
    if(numbers.length === numArgs){
      return sum(...numbers);
    }else{
      return _curriedSum; 
    }
  }
}

console.log(curriedSum(4)(5)(30)(20)(1)); // => 56