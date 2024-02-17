function returnSingleArray(arr1,arr2){
       for(let i=0; i<=arr2.length-1; i++){
         arr1[arr1.length]=arr2[i]
       }
       return arr1;
}
console.log(returnSingleArray([1,2,3,4],[5,6,7,8]));