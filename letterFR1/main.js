function letterFrequency(str) {
    let result = {};

    for (let i = 0; i < str.length; i++) {
        let num = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                num += 1;
            }

        }
        result[str[i]] = num;
    }
    return result;
}

console.log(letterFrequency("abcdabc"));