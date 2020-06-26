function getNiceNames(people){
    return people.filter(a => a.wasNice == true).map(a => a.name);
}

function getNaughtyNames(people){
    return people.filter(a => a.wasNice == false).map(a => a.name);
}
