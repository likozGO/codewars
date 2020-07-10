function findOutlier(integers){
    let arrParnie = [];
    let arrNeparnie = [];
    for(let i = 0; i <= integers.length; i++) {
        if (arrParnie.length < 2 && integers[i] % 2 == 0) {
            arrParnie.push(integers[i])
        }
        else if (arrNeparnie.length < 2 && integers[i] % 2 != 0){
            arrNeparnie.push(integers[i])
        }
    }
    return arrParnie.length == 1 ? arrParnie[0] : arrNeparnie[0];
}