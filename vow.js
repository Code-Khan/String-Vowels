// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels (but not y).
// The input string will only consist of lower case letters and/or spaces.

function countVowels(s){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let l = 0; l <= s.length; l++){
        console.log(s[l])
        if (vowels.includes(s[l])) {
            count += 1
        }
    }
    return count
}
console.log(countVowels('mississippi'))

// Alternate Solution // 

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsCount = 0;
    for (let char of str) {
      if (vowels.includes(char)) vowelsCount++;
    };
    return vowelsCount;
  }
console.log(getCount("hey there you fine beautiful people"))