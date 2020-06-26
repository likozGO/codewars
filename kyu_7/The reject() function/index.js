function reject(array, predicate) {
    return array.filter(e => !predicate(e));
}