/*#1*/
function solution(str){
    return str ? (str.length % 2 ? str + '_' : str).match(/../g) : []
}

/*#2*/
function solution(str){
    var temp = '';
    if (str.length % 2 !== 0) {
        str += '_';
    }
    if (str.length == 0) {
        temp = [];
    } else {
        for(let i = 0; i < str.length; i++) {
            if (i % 2 == 0 && i != 0) {
                temp += ',' + str[i];
            } else {
                temp += str[i];
            }
        }
        temp = temp.split(',');
    }
    return temp;
}