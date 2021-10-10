/* const result = {};
const keys = "acbdef";
for(let key of keys){
    result[key] = 1

}

console.log(result);

function letterFrequency(text){
    let output = {}
    for(let key of text){


    }

} */

// ----Letter Frequency--

/*  function letterFrequency(str) {
     let result = {}
     for (let i = 0; i < str.length; i++) {
         if (result[str[i]]) {
             result[str[i]]+=1
         }else{
             result[str[i]]=1
         }

     }
     return result
 } */

 function getFrequency(string) {
    let freq = {};
    for (var i=0; i<string.length; i++) {
        let character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};


 function main() {
     let string = "abbcddeff"
     let x= getFrequency(string)
 }
 main();