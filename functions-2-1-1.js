  /* 
  1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
  */

  maxOfTwoNumbers = (num1,num2) => {
    // ADD YOUR CODE HERE
    if(num1>num2){
      console.log('The largest number is '+num1)
    }else if(num2>num1) {
      console.log('The largest number is '+num2)
    }else{
      console.log(num1+' and '+num2+' are equal')
    }
    
  };
  maxOfTwoNumbers(8,8)

  //maxOfThree(7,8,9);

  /*
  2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
  */
  maxOfThree = (num1,num2,num3) => {
    // ADD YOUR CODE HERE
    if(num1>num2){
      if(num1>num3){
        console.log('The largest number is '+num1)
      }else {
        console.log('The largest number is '+num3)
      }
    }else if(num2>num3) {
      console.log('The largest number is '+num2)
      }else{
      console.log('The largest number is '+num3)
    }
    
  };
  maxOfThree(10,8,9);

  // maxOfThree = () => {
  //   // ADD YOUR CODE HERE
  // };

  /*
  3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  */
  isCharacterAVowel = (a) => {
    if(a == 'a'||a=='e'||a=='i'||a=='o'||a=='u'){
      return true
    }else{
      return false
    }
    // ADD YOUR CODE HERE
  };
  console.log(isCharacterAVowel('e'))

  /*
  4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
  */

  sumArray = (numArray) => {
    // ADD YOUR CODE HERE
    let sum =0
    for(let i=0; i<numArray.length;i++){
      sum = sum + numArray[i]
    }
    return sum
  };

  multiplyArray= (numArray) => {
    // ADD YOUR CODE HERE
    let multiplies =1
    for(let i=0; i<numArray.length;i++){
      multiplies = multiplies * numArray[i]
    }
    return multiplies
  };

  let numArray=[1,2,3,4]
  console.log(sumArray(numArray))
  console.log(multiplyArray(numArray))
  

  /*
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  function printNames(...names) {
    console.log(`number of arguments: ${names.length}`);
    for (var name of names) {
      console.log(name);
    }
  }
  
  printNames('Car', 'Bus', 'Truck','Hello');
  /*
  6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
  */

  reverseString = (word) => {
    // ADD YOUR CODE HERE
    let chr=''
    for(i=word.length;i>0;i--){
      chr=chr+word.slice(i-1,i)
    }
    return chr
  };
  console.log(reverseString("jag testar"))


  /*
  7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
  */
  findLongestWord = (wordArry) => {
    // ADD YOUR CODE HERE
    let longWordLength=wordArry[0].length
    for(i=1; i< wordArry.length; i++){
      if(wordArry[i].length> longWordLength){
        longWordLength =wordArry[i].length
      }
    }
    return longWordLength
  };
  let wordArry =['Hello','Bicycle','Computer','Tree','Toy']
  console.log(findLongestWord(wordArry))

  /*
  8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
  */
  filterLongWords = (wordsArry,i) => {
    // ADD YOUR CODE HERE
    let longWord =[]
    for(let j=0;j<wordsArry.length;j++){
      if (wordsArry[j].length > i){
        longWord.push(wordsArry[j])
      }
    }
    return longWord
  };
  let wordsArry =['Hello','Bicycle','Computer','Tree','Toy']
  console.log(filterLongWords(wordsArry,5))
