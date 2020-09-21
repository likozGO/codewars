function likes(names) {
    let result = '';
    switch (true) {
        case names.length === 0:
            result = 'no one likes this';
            break;
        case names.length === 1:
            result = `${names[0]} likes this`
            break;
        case names.length > 1 && names.length < 4:
            result = names.length === 2 ?
                `${names[0]} and ${names[1]} like this` :
                `${names[0]}, ${names[1]} and ${names[2]} like this`
            break;
        case names.length > 3:
            result = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
            break;
        default:
            result = '';
            console.log('default');
    }
    return result;
}

const arr1 = [ 'Alex', 'Jacob', 'Mark', 'Max' ];
const arr2 = [];
const arr3 = [ 'Peter' ];
const arr4 = [ 'Jacob', 'Alex' ];
const arr5 = [ 'Max', 'John', 'Mark' ];


likes(arr1);