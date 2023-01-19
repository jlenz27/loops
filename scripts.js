function countTo(count, multiple) {
    if (multiple < count && count > 0 && multiple > 0) {
        let countPrint = [];
        for (let i = multiple; i <= count + 1; i += multiple) {
            countPrint.push(i);

        }
    } else
        return ("please enter a number");
    return countPrint;
}


function replaceVowel(str) {
    let strReplace = str.replace(/[aeiou]/gi, "-")
    strReplace;


}




      function replaceVowels(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let newString = '';
        for (let i = 0; i < str.length; i++) {
          if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
            newString += '-';
          } else {
            newString += str[i];
          }
        }
        return newString;
      }