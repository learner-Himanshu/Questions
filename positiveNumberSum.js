
function Sum(...sum){
    let total =0;
 for(let i =0; i< sum.length; i++){
    if(sum[i]>0){
    total = total + sum[i]
    }
 }
 return total
}

 console.log(Sum(4,5,6,7,8,9,-5.-2));