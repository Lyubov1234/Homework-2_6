function fuel (distanceToGasStation, mpg, 
  enoughForRefueling) {
  return  (distanceToGasStation > mpg*enoughForRefueling) ? false:true; 
}

console.log(fuel(50, 25, 2));



// function doubleTheNumber (i) {
//   return i*2;
// }

// console.log (doubleTheNumber(5));



// function areYouPlayingBango (name) {
//   const nameStartingWithR = name [0].toLowerCase () === 'r' ? 'play bango' : 'does not play bango'

//   return name+nameStartingWithR;
// }

// console.log (areYouPlayingBango("Jon " ));
// console.log (areYouPlayingBango("Ron " ));
// console.log (areYouPlayingBango("Nik " ));
// console.log (areYouPlayingBango("roman " ));


// function deleteCharacter (letter) {
//   return letter.slice (1, -1);
// }

// console.log (deleteCharacter('Bingo'));


// function even(n) {
//   return n % 2 == 0;
// }

// console.log (even (7));


// //////////////////////////////////////////////////////////////   Средний уровень

// function reverse(i){
//   return i.split("").reverse().join("");
// }

// console.log (reverse ("LOVE"));





// function palindrom (i) {
//   return i == i.split('').reverse().join('');
// }

// console.log (palindrom("шалаш"));
// console.log (palindrom("потоп"));
// console.log (palindrom("Медведь"));





// /////////////////////////////////////////////   Сложный уровень


// function oppositeNumber(number) {
//   return(-number);
// }

// console.log (oppositeNumber(15));