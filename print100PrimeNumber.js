
function primeNumber(limit){
     if(limit<=1){
        console.log("please enter anh valid limit..")
     }
     else if(limit>1){
        for(let i =2; i<limit; i++){
              let isPrime =true;
            for(let j=2; j<i; j++){
                if(i%j==0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                console.log(i)
            }
        }

     }

}
primeNumber(10)