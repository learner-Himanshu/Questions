function Prime(number) {
    let isprime = true;
    if (number < 2 && number > 0) { return false } else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isprime = false;
                break;
            }

        }
        
            return isprime;
        
    }
}
console.log(Prime(33))