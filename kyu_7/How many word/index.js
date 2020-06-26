function testit(s){
    console.log(s)
    let newWord = s.toLowerCase().split('');
    let quant = 0;
    let temp = [];
    for(let i = 0; i <= newWord.length; i++) {
        if (temp.length == 0 && newWord[i] == 'w') {
            temp.push(newWord[i])
        } else if (temp.length == 1 && newWord[i] == 'o') {
            temp.push(newWord[i])
        } else if (temp.length == 2 && newWord[i] == 'r') {
            temp.push(newWord[i])
        } else if (temp.length == 3 && newWord[i] == 'd') {
            temp.push(newWord[i])
            quant = quant + 1;
            temp = [];
        }
    }
    console.log(quant)
    return quant
}