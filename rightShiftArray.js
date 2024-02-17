function rightShiftArray(...array){
    let lastElement = array[array.length-1];
    for(let i =0; i<array.length; i++){
        array[array.length-1-i]= array[array.length-2-i]
    }
    array[0]=lastElement;

    return array;
}
console.log(rightShiftArray(1,2,3,4,5))