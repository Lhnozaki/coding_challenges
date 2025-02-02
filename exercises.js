// Function -  FirstFactorial(num)
// The function will take the num parameter being passed and return the factorial of it (ie. if num =3, return(3 * 2 * 1))For test cases, the range will be between 1 and 18.

let arry1 = [];
let factorial = 1;

function FirstFactorial(num) {
  for(i = 1; i <= num; i++) {
    arry1.push(i);
  };
  for(j = 0; j < arry1.length; j++) {
    factorial = factorial * arry1[j];
  };
  console.log(factorial);
}

FirstFactorial(3);


// Function - SimpleAdding(num)
// The function will take the num parameter and add up all the numbers from 1 to num.  For test cases, the parameter num will be any number from 1 to 1000.

    // let arry2 = [];
    // let sum = 0;

    //function SimpleAdding(num) {
      // Using the array method...
      // for(i = 1; i <= num; i++) {
      //   arry2.push(i);
      // };
      // for(f = 0; f < arry2.length; f++) {
      //   sum += arry2[f];
      // }
      // console.log(sum);
    //}

function SimpleAdding(num) {
  num = num * (num+1)/2;
  console.log(num);
}

SimpleAdding(10);

// Function - LetterCapitalize(str)
// The function will take the str parameter being passed and capitalize the first letter of each word.  Words will be separated by only one space.

let thanos = "today i have lost more than you could ever know.";

function LetterCapitalize(str) {
  let arry = str.split(" ");
  let arry2 = [];
  for(i = 0; i < arry.length; i++) {
   arry2.push(arry[i].charAt(0).toUpperCase() + arry[i].slice(1));
  }
  return arry2.join(" ");
}

console.log(LetterCapitalize(thanos));

// Function rangeRover(arr)
// The function will take an array of two numbers and return the sum of those two numbers AND all numbers between them.  The lowest number will not always come first.  For example rangeRover([1, 4]) should return 10, i.e.(1 + 2 + 3 + 4), rangeRover([4, 1]) should also return 10.

function rangeRover(arr) {
  let num1;
  let num2;
  let sum;
  let Q1;
  let Q2;
  if(arr[0] > arr[1] && arr[1] !== 1) {
    num1 = arr[0];
    num2 = arr[1];
    Q1 = num1 * (num1+1)/2;
    Q2 = (num2 - 1) * num2 / 2;
    sum = Q1 - Q2;
  } else if(arr[0] > arr[1] && arr[1] === 1) {
    num1 = arr[0];
    num2 = arr[1];
    sum = num1 * (num1+1)/2;
  } else if (arr[0] < arr[1] && arr[0] !== 1){
    num1 = arr[1];
    num2 = arr[0];
    Q2 = num1 * (num1+1)/2;
    Q1 = (num2 - 1) * num2 / 2;
    sum = Q2 - Q1;
  } else {
    num1 = arr[1];
    num2 = arr[0];
    sum = num1 * (num1+1)/2;
  }
  console.log(sum);
}

rangeRover([1, 20]);

// Function missingLetter(str)
// The function will find the missing letter passed in the parameter and return it.  If all letters are present in the string, the return will be undefined.  For example missingLetter("abce") should return "d", missingLetter("bcd") should return undefined.

// Function hailCaesar(num)
// The function will take the num parameter and convert the given number into a roman numeral.  For example hailCaesar(2) should return "II", hailCaesar(5) should return "V".

function hailCaesar(num) {
  const numeral = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1};
  let roman = '';
  let i;
  for (i in numeral) {
    while ( num >= numeral[i] ) {
      roman += i;
      num -= numeral[i];
    }
  }
  return roman;
}

console.log(hailCaesar(8));

// Function spinalTap(str)
// The function will convert a string to spinal case.  Spinal case is all-lowercase-words-joined-by-dashes.  For example spinalTap("I own this Taco Stand!") should return "i-own-this-taco-stand!".

function spinalTap(str) {
  let arry = str.split(" ");
  return arry.join("-");
}

console.log(spinalTap(thanos));

// Function sumFibs(num)
// The function will return the sum of all ODD Fibonacci numbers up to and including the passed number if it's a Fibonacci number.  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, where the next number is found by adding up the two numbers before it.  For example subFibs(4) should return 5, sumbFibs(1000) should return 1785.

function sumFibs(num) {
  let arry = [];
  let arryOdd = [];
  let sum = 0;
  for(i = 0; i <= num; i++) {
    if(i === 0) {
      arry.push(i);
    } else if (i === 1) {
      arry.push(i);
    } else { 
      arry.push(arry[i-2] + arry[i-1]);
   };
    if(arry[i] % 2 !== 0) {
    arryOdd.push(arry[i]);
    }
  }
  for(x = 0; x < arryOdd.length; x++) {
    sum += arryOdd[x];
  }
  console.log(arry);
  console.log(arryOdd);
  console.log(sum);
}

sumFibs(4);