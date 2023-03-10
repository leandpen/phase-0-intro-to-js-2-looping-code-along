function countDown(number) {
 let x = number
 while (x >= 0) { 
    console.log(x);
    x--;
 }
 return number;
}

const gifts = ["Guadalupe ", "Ollie ", "Aki "]

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push ("Thank you, " + names[i] + ", for the wonderful "  + event + " gift!");
    }
    return messages;
  }


  console.log ["Guadalupe", "Ollie", "Aki"];
console.log(writeCards(names));