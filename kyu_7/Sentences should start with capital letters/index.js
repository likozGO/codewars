function fix(paragraph){
    var newArr = [];
    let nextUpper = false;
    for(let i = 0; i < paragraph.length; i++) {

        if (paragraph[i] == ".") {
            newArr.push(paragraph[i])
            nextUpper = true;
        }
        else if (nextUpper === true && paragraph[i] != " ") {
            newArr.push(paragraph[i].toUpperCase())
            nextUpper = false;
        }
        else if (i == 0) newArr.push(paragraph[i].toUpperCase())
        else {
            newArr.push(paragraph[i])
        }
    }
    return newArr.join('');
}