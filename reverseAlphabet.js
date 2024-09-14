
function reverseAlphabet(input) {
    const alphabets = input.match(/[A-Za-z]/g) || [];
    const numbers = input.match(/[0-9]+$/) || '';
    
    const reversedAlphabets = alphabets.reverse().join('');
    return reversedAlphabets + numbers;
}

const result = reverseAlphabet("NEGIE1");
console.log(result);
