function reverseString(string){
    let reverseStr = "";
 for(let i = 0; i<string.length; i++){
             
          let revstr = string[string.length-1-i];
          reverseStr = reverseStr+revstr;    
 }
 return reverseStr;
//  console.log(reverseStr)

}
console.log(reverseString("anisah"))
// reverseString("karan")