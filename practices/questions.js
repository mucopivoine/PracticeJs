// qu 1,2,3,4
function actions(x,y){
    let sum ,product,differnce,division;
    sum = x+y;
    product = x*y;
    differnce = x-y;
    division = x/y;
    return [sum, product, differnce, division];
    };
    const[sum,product,differnce,division]= actions(20,10);
    console.log(sum);
    console.log(product);
    console.log(differnce);
    console.log(division);
// qn 5
    function sumOfArr(arr){
        let total = 0;
        for (let i = 0; i < arr.length; i++){
            total += arr[i];
        }
        return total;
    }
    const total=sumOfArr([1,2,3,4,5]);
    console.log(total);
// qn 6
    function greaterValue(arr){
        if(arr.length === 0){
            return undefined;
        }
        let greatest = arr[0];
        for( let i= 1; i<arr.length ;i++){
            if(arr[i]>greatest){
                greatest = arr[i];
            }
        }return greatest;
    }
    const array7 = [10,3,7,4,8,9,20,4,6,8,76,3];
    console.log(greaterValue(array7));
// qn 7
    function smaller(arr){
        if(arr.length === 0){
            return undefined;
        }
        let smallest = arr[0];
        for(let i = 1; i<arr.length; i++){
        if(arr[i]<smallest){
            smallest = arr[i];
        }
     } return smallest;
    }
    const array8 = [20,30,40,5,6,56,21,34,57,90];
    console.log(smaller(array8));
// qn 8
    function average(arr){
        if (arr.length === 0){
            return 0;
        }
        let addt = 0;
        for (let i=0; i<arr.length; i++){
            addt += arr[i];
        }
      const avg = addt/arr.length;
       return avg;
    }
    const numberss = [20,10,3,40,5,60,7,34,58,29,10];
    console.log(average(numberss));
// qn 9
    function combine (arr1,arr2){
        return arr1.concat(arr2);
        
      }
      
      const arrange = ['a','b','c','d'];
      const arrayto = ['e','f','g'];
      console.log(combine(arrange,arrayto));
// qn 10
      function asterisk(row ,column){
        for(let i=0; i<row; i++){
        let row ='';
        for(let j=0; j<column; j++){
            row += '* ';
        }
        console.log(row);
    }
    }
    console.log(asterisk(4,5));

// qn 11
    // function ones(row){
    //     let row = 4;
    //     for (let i = 0; i<row ;i++)
    //     {
    //         row = '';
    //         for (let j =0; j<row-1; i++){
    //             row.push (1);
    //         }
    //     }console.log(row);
    // }
    // console.log(ones(4));

// collect numbers 11,12,13,14
// qn 15
function reversing(array){
 let reverseArr = array.reverse();
 return reverseArr;
}
const thisarray = [1,3,4,3,7,8,0,12,19];
 console.log(reversing(thisarray));
//  qn 16 a,b,c
function numbers(array){
    array.sort(function(a,b){
        return a-b;
    })
    return array;
}
var somenumbers  = [3,4,8,2,1,2,2,6,3,4];
console.log(numbers(somenumbers));

function sortBoundary(numbers){
    const firstthree = numbers.slice(0,3);
    const lastthree = numbers.slice(0,-3);
    const sortArray = numbers.slice(3,-3).sort((a,b)=>a-b);
    const result = firstthree.concat(sortArray, lastthree);

    return result,firstthree;
}
var somenumbers = [3,4,8,2,1,2,2,6,3,4];
console.log(sortBoundary(somenumbers));
// qn 17
function classification(age){
    
    if(age>=0 && age<=12){
        console.log("MINICRY");
    } else if (age>=13 && age<=19)
    {
        console.log("SELF-DISCOVERY");
    } else if (age>=20 && age<=45)
    { 
    console.log("COMMITMENT");
    } else if (age>=46)
    {
        console.log("LEGACY");
    } else {
   console.log("not in range");
    }
}
var age = 20;
classification(age);
// qn 18
function BMIofperson(height ,weight){
    const bmi = weight /(height*height);
    if(bmi < 18.5){
   console.log("Underweight");
    } else if(bmi>=18.5 && bmi<25){
        console.log("Normal weight");
    } else if(bmi >=25 && bmi <30){
        console.log("overweight");
    }else {
        console.log("Obese");
    }
}
let personbe = BMIofperson(1.67,47);
console.log(personbe);
// qn 19
 function count(str){
    let count = 0;
    for (let i=0; i<str.length; i++){
         if (str[i]!==" "){
            count ++;
        }
    }
    return count;
  }
 const str = "Hello World";
console.log(count(str));
//  qn 20
function iseven(){
    for(let i=2; i<=100; i += 2){
        console.log(i);
    }
}
iseven();
// qn 21
function squaring(num){
    let itssquare = num*num;
    return itssquare;
}

console.log(squaring(20));
//  qn 22
function isiteven(x){
    if(x %2 == 0){
        console.log(x,'is even');
    }else{
        return 0;
    }
}
console.log(isiteven(20));

// qn 23
function isodd(num){
  if(num%2!==0){
       console.log("number is odd");
   }else{
       console.log(num,"is not odd");
   }
 }
 console.log(isodd(12));
// qn 24
function max(a,b){
  let result;
  result = Math.max(a,b);
  return result;
}
 console.log(max(20,30));
// qn 25
 function min(a,b){
    let results;
   results = Math.min(a,b);
   return results;
 }
 console.log(min(35,20));
// qn 26
 function fact(num){
   if(num === 0 || num ===1){
     return 1;
   }else {
    return num * fact(num-1);
  }
}
const numb = 15;
 console.log("Factorial of", numb ,":",fact(numb));
// qn 27
 function toreverse(str){
    return str.split('').reverse('').join('');
 }
 const text = 'Hello everyone';
 console.log(toreverse(text));
// qn 28
// // function palindom(x){
// //     let r,d;
// //     r = x%10;
// //     d = 
// qn 29
function checkodd(){
    for(let i=1; i<=100; i+= 2){
    console.log(i);
  }
    }
checkodd();
// qn 30
function multiple(x){
        if(x%5 == 0){
            console.log(x,"is a multiple of 5");
        }else {
            console.log(x,"not a multiple of 5");
        }
    }

console.log( multiple(31));
// qn 31
function tosqrt(y){
  return Math.sqrt(y);
}
console.log(tosqrt(25));
// qn 32
function bigger(a,b){
    return Math.max(a,b);
}
console.log(bigger(9,4));
// qn 33
function change(){
    let text ;
    text ='its okay not to be okay';
    return text.toUpperCase();
}
console.log(change(text));
// qn 34
// function stringModifier{
//     let thisstring = " ";
// }
// qn 35
function Count(str){
    const vowels = /[aeiuo]/gi;
    const vowel = str.match(vowels);
    return vowel ? vowel.length : 0;
}
 let str1 = "Counting";
console.log("counted vowels:", Count(str1));
// qn 36
function counting(){
    const consont = /[bcdfghjklmnpqrstvwxyz]/gi;
    const consonant = str2.match(consont);
    return consonant ? consonant.length :0;
}
let str2 = 'lets go shopping';
console.log('counted consonants:',counting(str2));
// qn 37
function findIndex(str,char){
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            return i;
        }
    }
            return -1;
    }
const phrase = "its time to bear it";
const charact = "b";
console.log(`index of ${charact} in string:`,findIndex(phrase,charact));