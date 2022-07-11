
for (var i=0; i<10; i+=1) {
    console.log(i + "th fibnum: " + fibnum(i));
}

// gets the nth fibnum
function fibnum(n) {
    if (n === 1) return 1;
    if (n === 0) return 0;
    return fibnum(n-1) + fibnum(n-2);
}
