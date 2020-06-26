function toDifferentCase(s, choose) {
    let res;
    if (choose == "lowwer")
        res = s.split('').map((a, i) => i % 2 == 0 ? a.toUpperCase() : a.toLowerCase()).join('')
    else if (choose == "upper")
        res = s.split('').map((a, i) => i % 2 == 0 ? a.toLowerCase() : a.toUpperCase()).join('')

    return res;
}

function capitalize(s){
    let arr = [];
    arr.push(toDifferentCase(s,"lowwer"))
    arr.push(toDifferentCase(s,"upper"))
    return arr;
};