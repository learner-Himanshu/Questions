function unMatchedArrayFn(arr1, arr2) {
    let unMatchedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        let unMatchedElement = true;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                unMatchedElement = false;
                break;
            } else {
                unMatchedElement = arr1[i]
            }
        }
        if (unMatchedElement) {
            unMatchedArray[unMatchedArray.length] = unMatchedElement;
        }

    }
    return unMatchedArray;
}
let unMatchedArray = unMatchedArrayFn([1, 2, 4, 3, 4], [5, 6, 3, 4, 1])
console.log(unMatchedArray);