let character = 'Remove The Caps Letter'

let firstcharArray = character.split(" ")
for(i=0;i<firstcharArray.length;i++){
firstcharArray[i] = firstcharArray[i].substring(1)
}

console.log(firstcharArray);