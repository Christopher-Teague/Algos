function extraLongFactorials(n) {
    // Write your code here
    let res = 1;
    for (let i = n; i>0; i--){
        console.log("result: "+i)
        res *= i;
    }
    console.log("Total: "+res)
    return res
}

extraLongFactorials(10)
