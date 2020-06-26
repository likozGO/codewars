function accum(s) {
    var res = '';
    s.toLowerCase();
    for(let i = 0; i < s.length; i++) {
        res += s[i].toUpperCase();
        res += s[i].repeat(i).toLowerCase() + (i+1 == s.length ? '' : '-');

    }
    return res;
}