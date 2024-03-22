// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const message = "surprise";

function writeCards(names, message) {
  return names.map(name => `Thank you, ${name}, for the wonderful ${message} gift!`);
}

module.exports = {
  writeCards
};

function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  
  module.exports = {
    countDown
  };
