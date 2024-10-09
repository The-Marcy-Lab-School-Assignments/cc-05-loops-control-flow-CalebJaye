const multiplesOfSixAndNine = () => {
    for (let i = 0; i <= 100; i++){
        if (i % 6 === 0 && i % 9 === 0){
          console.log(i)
        }
    }
}
//multiplesOfSixAndNine();

const greaterNum = (num1, num2) => {
    if ( num1 > num2 ) {
        return num1 
    } else if ( num1 < num2){
        return num2
    } else if ( num1 = num2){
        console.log('Both arguments are equal')
    } else {
        return 'null'
    } 
} 
//console.log(greaterNum(1,NaN))

const sumOfFourAndSix = () => {
   let counter = 0 
   for (let i = 1; i <= 1000; i++){
    if (i % 4 === 0 && i % 6 === 0){
         counter += i
    }
  } return counter
}
//console.log(sumOfFourAndSix());

const oddAndEvenToN = (int) => {
for (let i = 0; i <= int; i++){
    if (i % 2 === 0){
        console.log(`i is even`)
    } else if ( i % 2  !== 0){
        console.log(` i is odd`)
    }
  }
}
oddAndEvenToN();