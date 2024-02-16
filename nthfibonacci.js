function fibo(n){
    if(n<=1) return n;
if(n>=2){
    return fibo(n-1)+ fibo(n-2)
}
}

console.log(fibo(6))