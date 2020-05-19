console.log(typeof null);

console.log(typeof NaN);

(function() {
  console.log("hello");
})();

var num1 = 0.1;
var num2 = 0.2;
var shouldEqual = 0.3;
var num = 5;

if (num1 + num2 == shouldEqual) {
  console.log("cool");
} else {
  console.log(".....what?");
}

console.log(new Array() == false);
console.log(typeof num);
