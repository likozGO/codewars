function isValidWalk(walk) {
    let n = walk.filter(a => a == 'n').length;
    let s = walk.filter(a => a == 's').length;
    let w = walk.filter(a => a == 'w').length;
    let e = walk.filter(a => a == 'e').length;

    return walk.length == 10 && n == s && w == e
}