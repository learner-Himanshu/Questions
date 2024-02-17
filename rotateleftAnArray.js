function leftRotateAnArray(array) {
      let firstElement = array[0];
      for(let i =0; i<array.length; i++){
         array[i]=array[i+1];
      }
       array[array.length-1]=firstElement;
       return array
}
let arr = [1, 2, 3, 4]
console.log(leftRotateAnArray(arr)) 